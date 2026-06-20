import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users, Wifi, Award } from 'lucide-react';

const BADGE_ITEMS = [
  { icon: <Users className="w-4 h-4" />,  text: 'Ages 8–14'         },
  { icon: <Clock className="w-4 h-4" />,  text: '4 Weeks'           },
  { icon: <Wifi  className="w-4 h-4" />,  text: 'Online Live'       },
  { icon: <Award className="w-4 h-4" />,  text: 'Certificate'       },
];

export default function Hero() {
  return (
    <section className="pt-24 pb-0 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y:   0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <span className="section-badge">
            🎯 &nbsp;Summer 2026 &nbsp;·&nbsp; Limited Seats
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y:  0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight max-w-4xl mx-auto mb-6"
        >
          AI &amp; Robotics{' '}
          <span className="text-primary-500">Summer Workshop</span>
          <br />
          <span className="text-secondary-500">for Kids</span>
        </motion.h1>

        {/* Sub-heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y:  0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Give your child a head start in the world of tomorrow. Our 4-week live workshop teaches kids to build real AI projects and code virtual robots — no prior experience needed!
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y:  0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a href="#register" className="btn-orange px-8 py-4 text-base w-full sm:w-auto justify-center">
            Enroll Now — ₹2,999
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#details" className="btn-outline px-8 py-4 text-base w-full sm:w-auto justify-center">
            Learn More
          </a>
        </motion.div>

        {/* Quick-stats badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-14"
        >
          {BADGE_ITEMS.map(({ icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-600"
            >
              <span className="text-primary-500">{icon}</span>
              {text}
            </div>
          ))}
        </motion.div>
        
         <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.35 }}
  whileHover={{ y: -5 }}
  className="mx-auto max-w-5xl px-4"
>
  <div className="relative group">

    {/* Glow */}
    <div
      className="
        absolute
        -inset-3
        rounded-[40px]
        bg-gradient-to-r
        from-orange-400/30
        via-purple-500/30
        to-orange-400/30
        blur-2xl
        opacity-0
        group-hover:opacity-100
        transition-all
        duration-700
      "
    />

    {/* Premium Frame */}
    <div
      className="
        relative
        p-2
        rounded-[38px]
        bg-gradient-to-r
        from-orange-500
        via-purple-500
        to-orange-500
        shadow-[0_20px_60px_rgba(249,115,22,0.25)]
      "
    >
      <motion.img
        src="/images/ai-robotics-hero.png"
        alt="AI & Robotics Summer Workshop"
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.4 }}
        className="
          w-full
          h-auto
          block
          rounded-[30px]
        "
      />
    </div>
  </div>
</motion.div>
      </div>
    </section>
  );
}
