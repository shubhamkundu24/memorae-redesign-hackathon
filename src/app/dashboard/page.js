"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto glass rounded-3xl shadow-strong border border-[var(--color-border)] p-6 sm:p-10"
      >
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">

          {/* LEFT SECTION */}
          <motion.div className="flex-1" variants={itemVariants}>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Welcome to your Dashboard 👋
            </h1>

            <p className="text-[var(--text-dim)] text-base sm:text-lg leading-relaxed mb-10">
              This is your Memorae dashboard. Integrate APIs here to fetch real reminders, notes, and saved data.
            </p>

            {/* Dashboard cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* Card 1 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="card hover:shadow-medium"
              >
                <h3 className="font-semibold text-lg">Saved Items</h3>
                <p className="text-[var(--text-dim)] text-sm mt-3">
                  Soon you'll see all saved notes, IDs & reminders here.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="card hover:shadow-medium"
              >
                <h3 className="font-semibold text-lg">Upcoming Reminders</h3>
                <p className="text-[var(--text-dim)] text-sm mt-3">
                  Your scheduled reminders will show up here.
                </p>
              </motion.div>

            </div>
          </motion.div>

          {/* RIGHT SECTION */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-start sm:items-end gap-3 w-full md:w-auto"
          >
            <Link
              href="/"
              className="text-[var(--text-dim)] hover:text-[var(--color-primary)] font-medium transition-colors text-sm"
            >
              Home
            </Link>

            <motion.button
              onClick={() => router.push("/")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg bg-rose-600 text-white font-semibold shadow-medium hover:bg-rose-700 transition-all text-sm w-full sm:w-auto"
            >
              Logout
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
