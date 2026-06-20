import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle2, User, Mail, Phone, Shield } from 'lucide-react';

const schema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100)
    .regex(/^[a-zA-Z\s]+$/, 'Only letters and spaces are allowed'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
});

type FormData = z.infer<typeof schema>;

const PERKS = [
  '🏆 Certificate of Completion',
  '📹 Recorded session access',
  '🛠️ Simulator software included',
  '👨‍🏫 Personal instructor attention',
  '🤝 Community & peer groups',
];

export default function RegistrationForm() {
  const [loading, setLoading]       = useState(false);
  const [serverErr, setServerErr]   = useState<string | null>(null);
  const [success, setSuccess]       = useState<FormData | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setServerErr(null);
    try {
      const res    = await fetch('/api/enquiry', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.message || 'Submission failed.');
      setSuccess(data);
      reset();
    } catch (e: any) {
      setServerErr(e.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="register" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="section-badge mb-4">Register Now</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-4">
            Secure Your Child's Spot
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Seats are limited to 20 per batch. Fill in the details below and our team will reach out within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: perks panel */}
          <div className="lg:col-span-5 rounded-2xl bg-gray-50 border border-gray-100 p-8 flex flex-col gap-6">
            <div>
              <p className="text-xs font-bold text-primary-500 uppercase tracking-wider mb-2">
                What's Included
              </p>
              <h3 className="text-xl font-extrabold text-gray-900">
                Everything your child needs to succeed
              </h3>
            </div>

            <ul className="flex flex-col gap-3">
              {PERKS.map(p => (
                <li key={p} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>

            {/* Pricing callout */}
            <div className="mt-auto rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 p-6 text-white">
              <p className="text-primary-100 text-xs font-semibold uppercase tracking-wider mb-1">
                Total Investment
              </p>
              <p className="text-4xl font-black">₹2,999</p>
              <p className="text-primary-100 text-sm mt-1">One-time · No hidden charges</p>
              <div className="flex items-center gap-2 mt-4 text-xs text-primary-100">
                <Shield className="w-4 h-4" />
                <span>Secure enrollment · 24-hr confirmation call</span>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7 kidrove-card p-8">
            {serverErr && (
              <div className="mb-5 p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-600 font-medium">
                {serverErr}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">

              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <User className="w-4 h-4 text-gray-400" />
                  Child's Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="e.g. Aarav Sharma"
                  disabled={loading}
                  {...register('name')}
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-medium text-gray-800 placeholder-gray-400
                    focus:outline-none focus:ring-2 focus:border-transparent transition-all
                    ${errors.name
                      ? 'border-red-300 bg-red-50 focus:ring-red-300'
                      : 'border-gray-200 bg-gray-50 focus:ring-primary-300 focus:bg-white'
                    }`}
                />
                {errors.name && (
                  <p className="text-xs text-red-500 font-medium">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <Mail className="w-4 h-4 text-gray-400" />
                  Parent's Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="yourname@email.com"
                  disabled={loading}
                  {...register('email')}
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-medium text-gray-800 placeholder-gray-400
                    focus:outline-none focus:ring-2 focus:border-transparent transition-all
                    ${errors.email
                      ? 'border-red-300 bg-red-50 focus:ring-red-300'
                      : 'border-gray-200 bg-gray-50 focus:ring-primary-300 focus:bg-white'
                    }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 font-medium">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <Phone className="w-4 h-4 text-gray-400" />
                  WhatsApp Number
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-gray-200 bg-gray-100 text-sm text-gray-500 font-medium">
                    +91
                  </span>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="9876543210"
                    disabled={loading}
                    {...register('phone')}
                    className={`flex-1 px-4 py-3 rounded-r-xl border text-sm font-medium text-gray-800 placeholder-gray-400
                      focus:outline-none focus:ring-2 focus:border-transparent transition-all
                      ${errors.phone
                        ? 'border-red-300 bg-red-50 focus:ring-red-300'
                        : 'border-gray-200 bg-gray-50 focus:ring-primary-300 focus:bg-white'
                      }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-xs text-red-500 font-medium">{errors.phone.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="mt-2 btn-orange py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed w-full justify-center"
              >
                {loading ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> Submitting…</>
                ) : (
                  'Submit Enquiry'
                )}
              </button>

              <p className="text-center text-xs text-gray-400">
                By submitting, you agree to be contacted by our team via call/WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Success modal */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSuccess(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center"
            >
              <div className="w-16 h-16 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                You're Enrolled! 🎉
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Thanks, <strong className="text-gray-800">{success.name}</strong>! We've received your enquiry and will call you at{' '}
                <strong className="text-gray-800">+91 {success.phone}</strong> within 24 hours to confirm your seat.
              </p>
              <button
                onClick={() => setSuccess(null)}
                className="btn-orange w-full justify-center py-3"
              >
                Great, Thanks!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
