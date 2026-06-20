import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import { z } from 'zod';
import { connectDB, isOfflineMode, LOCAL_DB_PATH } from './db';
import { Enquiry } from './models/Enquiry';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Input validation schema using Zod
const EnquirySchema = z.object({
  name: z.string()
    .min(2, { message: 'Name must be at least 2 characters long' })
    .max(100, { message: 'Name must be less than 100 characters' })
    .regex(/^[a-zA-Z\s]+$/, { message: 'Name should only contain letters and spaces' }),
  email: z.string()
    .email({ message: 'Please enter a valid email address' }),
  phone: z.string()
    .regex(/^[6-9]\d{9}$/, { message: 'Please enter a valid 10-digit Indian phone number (starting with 6-9)' })
});

// POST /api/enquiry
app.post('/api/enquiry', async (req: Request, res: Response) => {
  try {
    // Validate request body
    const validatedData = EnquirySchema.safeParse(req.body);

    if (!validatedData.success) {
      const errors = validatedData.error.errors.map(err => ({
        field: err.path[0],
        message: err.message
      }));
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    const { name, email, phone } = validatedData.data;

    let savedData;
    let storageMethod = '';

    if (isOfflineMode) {
      // Local JSON File storage fallback
      try {
        const fileContent = fs.readFileSync(LOCAL_DB_PATH, 'utf-8');
        const enquiries = JSON.parse(fileContent);

        const newEnquiry = {
          _id: `offline_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          name,
          email,
          phone,
          createdAt: new Date().toISOString()
        };

        enquiries.push(newEnquiry);
        fs.writeFileSync(LOCAL_DB_PATH, JSON.stringify(enquiries, null, 2));

        savedData = newEnquiry;
        storageMethod = 'Local File JSON';
      } catch (fileError) {
        console.error('Failed to write to local storage:', fileError);
        return res.status(500).json({
          success: false,
          message: 'Failed to write enquiry to local storage fallback.'
        });
      }
    } else {
      // MongoDB storage
      try {
        const newEnquiry = new Enquiry({
          name,
          email,
          phone
        });
        savedData = await newEnquiry.save();
        storageMethod = 'MongoDB';
      } catch (dbError: any) {
        console.error('MongoDB save error:', dbError);
        return res.status(500).json({
          success: false,
          message: `Database save failed: ${dbError.message}`
        });
      }
    }

    console.log(`📥 Enquiry received from ${name} (${email}) - Saved using ${storageMethod}`);

    return res.status(201).json({
      success: true,
      message: `Thank you, ${name}! Your enquiry has been received and saved.`,
      storage: storageMethod,
      data: savedData
    });

  } catch (error: any) {
    console.error('Server error handling enquiry:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.'
    });
  }
});

// Basic health check route
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    database: isOfflineMode ? 'OFFLINE (Local file fallback active)' : 'ONLINE (MongoDB)'
  });
});

// Start the server
async function startServer() {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🚀 Express server running on http://localhost:${PORT}`);
    console.log(`📋 Health check available at http://localhost:${PORT}/health`);
  });
}

startServer();
