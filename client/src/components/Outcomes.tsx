import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const OUTCOMES = [
  {
    title: 'Algorithmic Thinking & Logic',
    desc:  'Break complex problems into logical steps using variables, loops, conditions and functions — the foundation of every programmer.',
    color: 'text-primary-500',
    bg:    'bg-primary-50',
    border:'border-primary-100',
    check: 'text-primary-500',
  },
  {
    title: 'Mechanical Design Principles',
    desc:  'Understand motors, wheels, sensors, and gear systems. Learn how physical forces translate into a robot\'s motion and stability.',
    color: 'text-secondary-500',
    bg:    'bg-secondary-50',
    border:'border-secondary-100',
    check: 'text-secondary-500',
  },
  {
    title: 'Python & Block Coding',
    desc:  'Start with drag-and-drop visual blocks (Scratch-style) and progressively transition into real Python syntax to control virtual robots.',
    color: 'text-pink-500',
    bg:    'bg-pink-50',
    border:'border-pink-100',
    check: 'text-pink-500',
  },
  {
    title: 'AI & Machine Learning Basics',
    desc:  'Interact with image classifiers, object detectors, and speech models. Understand how machines "see" and "decide" just like humans.',
    color: 'text-amber-500',
    bg:    'bg-amber-50',
    border:'border-amber-100',
    check: 'text-amber-500',
  },
  {
    title: 'Autonomous Navigation',
    desc:  'Program obstacle-avoidance logic, line-following routines, and sensor-reactive behaviours in live robotic simulators.',
    color: 'text-green-600',
    bg:    'bg-green-50',
    border:'border-green-100',
    check: 'text-green-600',
  },
  {
    title: 'Capstone Project & Certificate',
    desc:  'Design and present your own smart robot project at the graduation ceremony. Earn a co-branded Kidrove certificate on completion.',
    color: 'text-blue-500',
    bg:    'bg-blue-50',
    border:'border-blue-100',
    check: 'text-blue-500',
  },
];

export default function Outcomes() {
  return (
    <section id="outcomes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="section-badge mb-4">Curriculum</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-4">
            What Your Child Will Learn
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Over 4 weeks, students advance from basic programming blocks to building autonomous, AI-powered virtual robots.
          </p>
        </div>

        {/* Outcome cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OUTCOMES.map(({ title, desc, color, bg, border, check }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className={`kidrove-card p-6 flex flex-col gap-4 ${bg} border ${border}`}
            >
              {/* Number + check */}
              <div className="flex items-center justify-between">
                <span className={`text-4xl font-black opacity-10 ${color}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <CheckCircle2 className={`w-6 h-6 ${check}`} />
              </div>

              <div>
                <h3 className={`text-base font-bold ${color} mb-2`}>{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning path strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { week: 'Week 1',  topic: 'Coding Basics & Logic' },
            { week: 'Week 2',  topic: 'Robotics & Mechanics'  },
            { week: 'Week 3',  topic: 'AI & Python Projects'  },
            { week: 'Week 4',  topic: 'Capstone Showcase'     },
          ].map(({ week, topic }, i) => (
            <div
              key={week}
              className="relative bg-white border border-gray-100 rounded-2xl p-5 shadow-card flex flex-col gap-1"
            >
              {i < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-2.5 w-5 h-0.5 bg-primary-200 z-10" />
              )}
              <p className="text-xs font-bold text-primary-500 uppercase tracking-wider">{week}</p>
              <p className="text-sm font-semibold text-gray-800">{topic}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
