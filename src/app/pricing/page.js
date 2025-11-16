"use client";

import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      desc: "Basic features for everyone",
      highlight: false,
      features: ["Save unlimited notes", "Basic reminders", "Secure storage"],
    },
    {
      name: "Pro",
      price: "₹199/mo",
      desc: "Advanced features for power users",
      highlight: true,
      features: [
        "Smart recurring reminders",
        "Priority support",
        "Faster responses",
        "Extra cloud storage",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 relative">

      {/* Background Glow */}
      <div className="absolute top-[20%] left-[-10%] w-[45vw] h-[45vw] bg-[var(--color-primary)]/15 blur-[160px] rounded-full -z-10"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[40vw] h-[40vw] bg-[var(--color-accent)]/20 blur-[160px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold">Simple Pricing</h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mx-auto rounded-full mt-3"></div>
          <p className="mt-4 text-[var(--text-dim)] max-w-lg mx-auto text-lg">
            Start free. Upgrade anytime for more features.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.18, duration: 0.6 }}
              className={`p-10 rounded-3xl border shadow-medium hover:shadow-strong hover:-translate-y-2 transition-all backdrop-blur-xl ${
                plan.highlight
                  ? "bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-white border-white/10 shadow-strong"
                  : "glass text-[var(--text-main)] border-white/10"
              }`}
            >
              {/* Plan Name */}
              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <p
                className={`mt-2 ${
                  plan.highlight ? "text-white/90" : "text-[var(--text-dim)]"
                }`}
              >
                {plan.desc}
              </p>

              {/* Price */}
              <div className="text-4xl font-extrabold mt-6">{plan.price}</div>

              {/* Features */}
              <ul
                className={`mt-6 space-y-3 ${
                  plan.highlight ? "text-white/90" : "text-[var(--text-dim)]"
                }`}
              >
                {plan.features.map((f, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.12 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-lg">✔</span> {f}
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`mt-10 w-full py-3 rounded-xl font-semibold transition-all ${
                  plan.highlight
                    ? "bg-white text-black hover:opacity-90 shadow-strong"
                    : "bg-black/5 dark:bg-white/5 text-[var(--text-main)] hover:bg-black/10 dark:hover:bg-white/10"
                }`}
              >
                {plan.highlight ? "Upgrade to Pro" : "Start Free"}
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
