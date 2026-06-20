import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: 'Does my child need prior coding experience?',
    a: 'No experience needed at all! We start from absolute zero — block-based visual coding — and gradually introduce text-based Python. The curriculum is designed so any child aged 8–14 can follow along confidently.',
  },
  {
    q: 'How are the online sessions conducted?',
    a: 'Sessions are live on Zoom with a maximum of 20 students per batch. Every child works directly in their browser on our simulation platform, and instructors can see their screen to give real-time help.',
  },
  {
    q: 'Do we need to buy any hardware or robotics kit?',
    a: 'No physical kits are required. We use industry-grade online simulators (Tinkercad, Webots) that run in any modern browser. Optional physical kits can be purchased separately if you\'d like a hands-on extension.',
  },
  {
    q: 'Will my child receive a certificate?',
    a: 'Yes! Every student who completes the course and submits a capstone project receives an official, co-branded Kidrove × GEMA Certificate of Completion, printable and shareable as a digital badge.',
  },
  {
    q: 'What if my child misses a session?',
    a: 'All sessions are recorded. If your child misses a class, they can watch the recording at any time, and our instructors hold a weekly 30-minute catch-up Q&A for any follow-up questions.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="section-badge mb-4">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500">
            Have more questions? Reach us at{' '}
            <a href="mailto:support@kidrove.com" className="text-primary-500 font-semibold hover:underline">
              support@kidrove.com
            </a>
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {FAQS.map(({ q, a }, i) => (
            <div
              key={i}
              className={`kidrove-card overflow-hidden transition-all ${open === i ? 'border-primary-200' : ''}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-gray-800 text-sm md:text-base pr-4">{q}</span>
                <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  open === i ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-500'
                }`}>
                  {open === i
                    ? <Minus className="w-4 h-4" />
                    : <Plus  className="w-4 h-4" />
                  }
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-5 md:px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
                      {a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
