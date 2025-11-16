"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      q: "What is Memorae?",
      a: "Memorae is a WhatsApp-based memory assistant that stores notes, reminders, docs, IDs and more."
    },
    {
      q: "Do I need to install any app?",
      a: "No. Everything works directly inside WhatsApp — no installation needed."
    },
    {
      q: "Is my data secure?",
      a: "Yes, all your stored messages are encrypted and fully private."
    },
    {
      q: "Is it free?",
      a: "Yes, a Free plan is available forever. Paid plan unlocks advanced features."
    },
  ];

  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-24 relative">

      {/* Soft Glow */}
      <div className="absolute top-[10%] right-[-10%] w-[40vw] h-[40vw] bg-[var(--color-primary)]/20 blur-[150px] rounded-full -z-10"></div>

      <div className="max-w-4xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold">Frequently Asked Questions</h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mx-auto mt-3 rounded-full"></div>
        </motion.div>

        {/* FAQ Cards */}
        <div className="mt-14 space-y-5">
          {faqs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.45 }}
              className="glass border border-white/10 shadow-medium rounded-xl p-5 cursor-pointer hover:shadow-strong transition-all"
              onClick={() => setOpen(open === index ? null : index)}
            >
              {/* Question */}
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">{item.q}</p>

                <motion.span
                  animate={{ rotate: open === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl font-semibold text-[var(--text-dim)] select-none"
                >
                  +
                </motion.span>
              </div>

              {/* Answer */}
              <AnimatePresence>
                {open === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0, y: -8 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    className="text-[var(--text-dim)] mt-3 leading-relaxed"
                  >
                    {item.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
