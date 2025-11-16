"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import DarkToggle from "./DarkToggle";
import MobileNav from "./MobileNav";

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.05, duration: 0.3 },
  }),
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#how", label: "How it Works" },
    { href: "#usecases", label: "Use Cases" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <motion.header
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-softbg)]/80 backdrop-blur-md shadow-soft border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-white font-bold flex items-center justify-center shadow-medium text-sm sm:text-base"
              whileHover={{ scale: 1.08 }}
            >
              M
            </motion.div>
            <span className="hidden sm:block font-bold text-lg gradient-text">
              Memorae
            </span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              custom={i}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                href={link.href}
                className="px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base text-[var(--text-dim)] hover:text-[var(--text-main)] hover:bg-[var(--color-lightgray)]/50 transition-smooth font-medium"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-3">
          <DarkToggle />
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden sm:block"
          >
            <Link
              href="/login"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white text-sm font-medium shadow-medium hover:shadow-strong transition-smooth"
            >
              Start on WhatsApp
            </Link>
          </motion.div>

          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
