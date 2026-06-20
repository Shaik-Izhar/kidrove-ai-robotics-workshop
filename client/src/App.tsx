import Header from './components/Header';
import Hero from './components/Hero';
import Details from './components/Details';
import Outcomes from './components/Outcomes';
import FAQ from './components/FAQ';
import RegistrationForm from './components/RegistrationForm';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased overflow-x-hidden">

      <Header />

      <main>
        <Hero />
        <Details />
        <Outcomes />
        <FAQ />
        <RegistrationForm />
      </main>

      {/* Footer — Kidrove style: clean, minimal, white/gray */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-gray-800">

            {/* Brand */}
            <div className="md:col-span-4">
              <a href="/" className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                  </svg>
                </div>
                <span className="text-xl font-extrabold text-white">
                  kid<span className="text-primary-500">rove</span>
                </span>
              </a>
              <p className="text-sm leading-relaxed max-w-xs">
                Empowering kids with 21st-century skills through outstanding live workshops, camps, and educational programs.
              </p>
              <div className="flex items-center gap-3 mt-5">
                {['Instagram', 'Twitter', 'Facebook'].map(s => (
                  <a key={s} href="#" aria-label={s}
                     className="w-8 h-8 rounded-full bg-gray-800 hover:bg-primary-500 flex items-center justify-center transition-colors text-xs font-bold text-gray-400 hover:text-white">
                    {s[0]}
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="md:col-span-3">
              <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
              <ul className="space-y-2.5 text-sm">
                {[
                  ['Workshop Details',   '#details' ],
                  ['What You\'ll Learn', '#outcomes'],
                  ['FAQs',              '#faq'     ],
                  ['Register Now',      '#register'],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="hover:text-primary-400 transition-colors">{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-5">
              <h4 className="text-white font-semibold text-sm mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <span className="block text-gray-500 text-xs mb-0.5">Email</span>
                  <a href="mailto:support@kidrove.com" className="hover:text-primary-400 transition-colors">
                    support@kidrove.com
                  </a>
                </li>
                <li>
                  <span className="block text-gray-500 text-xs mb-0.5">Phone / WhatsApp</span>
                  <a href="tel:+919876543210" className="hover:text-primary-400 transition-colors">
                    +91 98765 43210
                  </a>
                </li>
              </ul>

              {/* Urgency badge */}
              <div className="mt-6 p-4 rounded-xl bg-gray-800 border border-gray-700">
                <p className="text-xs text-primary-400 font-semibold uppercase tracking-wider mb-1">
                  🔴 Seats Filling Fast
                </p>
                <p className="text-sm text-gray-300 font-medium">
                  Starting 15 July 2026 · Only 20 seats per batch
                </p>
                <a href="#register" className="mt-3 btn-orange text-xs py-2 inline-flex">
                  Reserve Your Seat →
                </a>
              </div>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
            <span>© {new Date().getFullYear()} Kidrove Education Technology. All rights reserved.</span>
            <span>Built for GEMA Education Technology Pvt. Ltd. — Assessment Submission</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
