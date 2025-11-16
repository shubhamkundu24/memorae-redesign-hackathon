"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { motion } from "framer-motion";

export default function LoginPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  function validatePhone(p) {
    return /^[0-9]{10,15}$/.test(p);
  }

  const submit = (e) => {
    e.preventDefault();
    setErr("");
    if (!validatePhone(phone)) {
      setErr("Enter a valid phone number (digits only, 10-15 digits).");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/dashboard");
    }, 900);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-md w-full card"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Login to Dashboard</h2>
        <p className="text-sm text-[var(--text-dim)] mb-8">
          Enter your phone number to continue.
        </p>

        <form onSubmit={submit} className="space-y-5">
          <div>
            <label className="text-sm font-medium text-[var(--text-main)]">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. 919876543210"
              className="mt-2 w-full px-4 py-3 rounded-lg border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-card)] text-[var(--text-main)] text-sm sm:text-base transition-all"
            />
          </div>

          {err && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-rose-600 bg-rose-50 dark:bg-rose-900/20 p-3 rounded-lg"
            >
              {err}
            </motion.div>
          )}

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white font-semibold hover:shadow-medium disabled:opacity-60 transition-all text-base"
          >
            {loading ? "Signing in…" : "Continue"}
          </motion.button>

          <div className="text-sm text-[var(--text-dim)] text-center">
            Or{" "}
            <Link href="/" className="text-[var(--color-primary)] font-medium hover:underline">
              go back home
            </Link>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
