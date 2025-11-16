"use client";

import { motion } from "framer-motion";

export default function UseCases() {
  const useCases = [
    { emoji: "🏥", title: "Medical Records", desc: "Store prescription details and health data securely" },
    { emoji: "💼", title: "Work Tasks", desc: "Track project deadlines and important meetings" },
    { emoji: "🎓", title: "Study Notes", desc: "Keep class notes and exam schedules organized" },
    { emoji: "💰", title: "Expense Tracking", desc: "Log bills, invoices, and expense receipts" },
    { emoji: "🎁", title: "Gift Ideas", desc: "Save gift ideas and wish lists for later" },
    { emoji: "✈️", title: "Travel Plans", desc: "Store booking confirmations and itineraries" },
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Perfect For Everyone
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mx-auto rounded-full mt-3 sm:mt-4"></div>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {useCases.map((item, i) => (
            <motion.div
              key={i}
              initial={false}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.05 }}
              className="card text-center cursor-default hover:shadow-strong"
            >
              <div className="text-5xl sm:text-6xl mb-4">{item.emoji}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-[var(--text-dim)] text-sm sm:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
