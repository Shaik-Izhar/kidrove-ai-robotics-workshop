import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';

export let isOfflineMode = false;
export const LOCAL_DATA_DIR = path.join(__dirname, '..', 'data');
export const LOCAL_DB_PATH = path.join(LOCAL_DATA_DIR, 'enquiries.json');

// Ensure local data directory exists for file fallback
if (!fs.existsSync(LOCAL_DATA_DIR)) {
  fs.mkdirSync(LOCAL_DATA_DIR, { recursive: true });
}

if (!fs.existsSync(LOCAL_DB_PATH)) {
  fs.writeFileSync(LOCAL_DB_PATH, JSON.stringify([], null, 2));
}

export async function connectDB() {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    console.warn('⚠️ No MONGODB_URI found in environment. Falling back to local JSON file storage.');
    isOfflineMode = true;
    return;
  }

  try {
    // Set connection timeout to 3 seconds so we fail fast and fallback
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 3000
    });
    console.log('✅ Successfully connected to MongoDB database.');
  } catch (error: any) {
    console.warn(`⚠️ MongoDB connection failed: ${error.message}`);
    console.warn('👉 Gracefully falling back to local JSON file storage (server/data/enquiries.json).');
    isOfflineMode = true;
  }
}
