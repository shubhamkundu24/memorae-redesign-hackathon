"use client";

import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      title: "Smart Reminders",
      desc: "Set recurring and one-time reminders directly from WhatsApp.",
      icon: "⏰",
    },
    {
      title: "Instant Search",
      desc: "Find anything instantly — IDs, notes, tasks, bills.",
      icon: "🔍",
    },
    {
      title: "Secure Storage",
      desc: "Your saved data is encrypted & protected.",
      icon: "🔒",
    },
    {
      title: "Auto Organizing",
      desc: "Memorae automatically categorizes & sorts your data.",
      icon: "🗂️",
    },
    {
      title: "No App Needed",
      desc: "Works fully inside WhatsApp — no installation required.",
      icon: "📱",
    },
    {
      title: "Available 24×7",
      desc: "Your assistant never sleeps & never forgets.",
      icon: "🚀",
    },
  ];

  return (
    <section id="features" className="py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Title */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Powerful Features to Make Your Life Easier
          </h2>

          <div className="w-24 h-[3px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mx-auto rounded-full mt-3"></div>

          <p className="text-[var(--text-dim)] text-lg mt-4 max-w-2xl mx-auto">
            Memorae simplifies everyday tasks by organizing your notes, reminders,
            IDs, and files directly inside WhatsApp.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="p-8 rounded-2xl glass shadow-medium border border-white/10 hover:shadow-strong hover:-translate-y-2 transition-all backdrop-blur-xl cursor-default"
            >
              <div className="text-5xl mb-5">{item.icon}</div>

              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

              <p className="text-[var(--text-dim)]">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
