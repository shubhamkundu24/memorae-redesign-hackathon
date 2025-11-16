"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Send anything on WhatsApp",
      desc: "Just message Memorae — tasks, notes, screenshots, IDs, reminders.",
      icon: "💬",
    },
    {
      num: "02",
      title: "Memorae organizes it",
      desc: "It categorizes and stores your data automatically and securely.",
      icon: "🗂️",
    },
    {
      num: "03",
      title: "Get it back instantly",
      desc: "Search or request reminders anytime — Memorae never forgets.",
      icon: "⚡",
    },
  ];

  return (
    <section id="how" className="py-24 relative">
      
      {/* Background Glow */}
      <div className="absolute right-[-10%] top-[10%] w-[40vw] h-[40vw] bg-[var(--color-accent)]/20 blur-[150px] rounded-full -z-10"></div>

      <div className="max-w-5xl mx-auto px-6">
        
        {/* Title */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold">How It Works</h2>

          <div className="w-24 h-[3px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]
            mx-auto mt-3 rounded-full"></div>

          <p className="text-[var(--text-dim)] text-lg mt-4 max-w-xl mx-auto">
            Memorae works in 3 simple steps designed to make your life easier.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="relative mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* connecting horizontal line (desktop only) */}
          <div className="hidden md:block absolute top-[55px] left-[10%] right-[10%] 
                          h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]
                          opacity-30 rounded-full"></div>

          {/* glowing dots on the line */}
          <div className="hidden md:flex absolute top-[50px] left-[10%] right-[10%] justify-between px-6">
            {[1,2,3].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.4, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="w-4 h-4 rounded-full bg-gradient-to-br 
                          from-[var(--color-primary)] to-[var(--color-accent)]
                          shadow-[0_0_12px_var(--color-primary)]"
              />
            ))}
          </div>

          {/* Step Cards */}
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.55 }}
              className="relative p-8 rounded-2xl glass shadow-medium border border-white/10
                         hover:shadow-strong hover:-translate-y-2 transition-all backdrop-blur-xl"
            >
              {/* Icon bubble */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-[var(--color-primary)]/25 blur-2xl rounded-full"></div>
                  <div className="w-20 h-20 rounded-full glass flex items-center justify-center 
                                  text-4xl shadow-medium border border-white/10">
                    {item.icon}
                  </div>
                </div>
              </div>

              {/* Step Number */}
              <motion.div
                initial={{ opacity: 0, scale: 0.65 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="text-center text-3xl font-extrabold bg-gradient-to-r
                from-[var(--color-primary)] to-[var(--color-accent)]
                bg-clip-text text-transparent mb-3"
              >
                {item.num}
              </motion.div>

              <h3 className="text-xl font-semibold text-center mb-2 text-[var(--foreground)]">
                {item.title}
              </h3>

              <p className="text-[var(--text-dim)] text-center leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
