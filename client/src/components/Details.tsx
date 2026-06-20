import { motion } from 'framer-motion';
import { Users, Calendar, Laptop, IndianRupee, Rocket, ArrowRight } from 'lucide-react';

const DETAILS = [
  {
    icon:   <Users className="w-6 h-6" />,
    label:  'Age Group',
    value:  '8–14 Years',
    desc:   'Tailored curriculum perfectly matched to middle-school learners.',
    bg:     'bg-primary-50',
    border: 'border-primary-100',
    icon_bg:'bg-primary-100',
    color:  'text-primary-500',
    dot:    'bg-primary-500',
  },
  {
    icon:   <Calendar className="w-6 h-6" />,
    label:  'Duration',
    value:  '4 Weeks',
    desc:   '8 live sessions (2× per week, 90 min each) with expert instructors.',
    bg:     'bg-secondary-50',
    border: 'border-secondary-100',
    icon_bg:'bg-secondary-100',
    color:  'text-secondary-500',
    dot:    'bg-secondary-500',
  },
  {
    icon:   <Laptop className="w-6 h-6" />,
    label:  'Mode',
    value:  'Online – Live',
    desc:   'Interactive Zoom sessions. Children code & experiment in real time.',
    bg:     'bg-pink-50',
    border: 'border-pink-100',
    icon_bg:'bg-pink-100',
    color:  'text-pink-500',
    dot:    'bg-pink-500',
  },
  {
    icon:   <IndianRupee className="w-6 h-6" />,
    label:  'Fee',
    value:  '₹2,999',
    desc:   'Inclusive of all materials, software access & completion certificate.',
    bg:     'bg-amber-50',
    border: 'border-amber-100',
    icon_bg:'bg-amber-100',
    color:  'text-amber-500',
    dot:    'bg-amber-500',
  },
  {
    icon:   <Rocket className="w-6 h-6" />,
    label:  'Start Date',
    value:  '15 July 2026',
    desc:   'Limited to 20 students per batch for personalised attention.',
    bg:     'bg-green-50',
    border: 'border-green-100',
    icon_bg:'bg-green-100',
    color:  'text-green-600',
    dot:    'bg-green-500',
  },
];

export default function Details() {
  return (
    <section id="details" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="section-badge mb-4">Workshop Details</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A clear overview of the upcoming summer batch so you can make the best decision for your child.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {DETAILS.map(({ icon, label, value, desc, bg, border, icon_bg, color, dot }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -6, boxShadow: '0 12px 28px rgba(0,0,0,0.10)' }}
              className={`rounded-2xl border ${bg} ${border} p-6 flex flex-col gap-4 transition-all duration-300 cursor-default`}
            >
              <div className={`w-11 h-11 rounded-xl ${icon_bg} ${color} flex items-center justify-center`}>
                {icon}
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{label}</p>
                <p className={`text-xl font-extrabold ${color}`}>{value}</p>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{desc}</p>
              <div className={`w-8 h-1 rounded-full ${dot}`} />
            </motion.div>
          ))}
        </div>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-white">
            <p className="text-sm font-semibold text-primary-100 uppercase tracking-wider mb-2">
              ⭐ What Parents Say
            </p>
            <p className="text-xl md:text-2xl font-bold leading-snug max-w-xl">
              "My 10-year-old built a radar simulation in just 3 sessions. Absolutely amazing!"
            </p>
            <p className="text-primary-100 text-sm mt-3">— Priya R., Parent of Arjun (Age 10)</p>
          </div>
          <a
            href="#register"
            className="shrink-0 flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary-600 font-bold text-sm hover:bg-primary-50 transition-colors shadow-lg whitespace-nowrap"
          >
            Reserve a Seat <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
