"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.3 },
  }),
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      href: "https://www.linkedin.com/company/memorae-ai/",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="hover:text-[#0A66C2]"
        >
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6C1.12 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.86 1 4.98 2.12 4.98 3.5ZM.22 8.91H4.78V24H.22V8.91ZM8.91 8.91H13.27V11.03H13.34C13.97 9.86 15.48 8.63 17.82 8.63C22.09 8.63 23 11.44 23 15.55V24H18.44V16.44C18.44 14.41 18.4 11.88 15.7 11.88C12.95 11.88 12.52 13.99 12.52 16.29V24H7.96V8.91H8.91Z" />
        </svg>
      ),
    },
    {
      href: "https://www.youtube.com/@memoraeAi",
      icon: (
        <svg
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="hover:text-red-600"
        >
          <path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.9-1.6-.9-2-1C17.6 2.5 12 2.5 12 2.5h-.1s-5.6 0-8.7.3c-.4 0-1.2.1-2 1-.6.7-.8 2.4-.8 2.4S0 8.1 0 9.9v1.7c0 1.8.2 3.7.2 3.7s.2 1.7.8 2.4c.8.9 1.9.9 2.4 1C5.6 19.5 12 19.5 12 19.5s5.6 0 8.7-.3c.4 0 1.2-.1 2-1 .6-.7.8-2.4.8-2.4s.2-1.9.2-3.7V9.9c0-1.8-.2-3.7-.2-3.7zM9.5 14.7V7.8l6.3 3.45L9.5 14.7z" />
        </svg>
      ),
    },
    {
      href: "https://www.instagram.com/memorae.ai/",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="hover:text-pink-500"
        >
          <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.5.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.5.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.4-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.5-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.5-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.4.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.5-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.7.2 4.8.4 4 .7c-.9.3-1.7.8-2.4 1.5S.3 3.8 0 4.7c-.3.8-.5 1.7-.6 3C-.7 9 .3 9.4.3 12s0 3-.1 4.3c0 1.3.2 2.2.4 3 .3.9.8 1.7 1.5 2.4.7.7 1.5 1.2 2.4 1.5.8.3 1.7.5 3 .6C8.3 24 8.7 24 12 24s3.7 0 5-.1c1.3-.1 2.2-.3 3-.6.9-.3 1.7-.8 2.4-1.5.7-.7 1.2-1.5 1.5-2.4.3-.8.5-1.7.6-3 .1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.2-.6-3-.3-.9-.8-1.7-1.5-2.4C20.7.3 19.9-.2 19-.5c-.8-.3-1.7-.5-3-.6C15.7-.7 15.3-.7 12-.7zM12 5.8A6.2 6.2 0 1 0 18.2 12 6.2 6.2 0 0 0 12 5.8zm0 10.2A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm4.6-10.8a1.44 1.44 0 1 1-1.44-1.44A1.44 1.44 0 0 1 16.6 5.2z" />
        </svg>
      ),
    },
    {
      href: "https://www.facebook.com/profile.php?id=61570007759613",
      icon: (
        <svg
          width="22"
          height="22"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="hover:text-blue-500"
        >
          <path d="M22.7 0H1.3C.6 0 0 .6 0 1.3v21.3C0 23.4.6 24 1.3 24h11.5v-9.3H9.7V11h3.1V8.4c0-3.1 1.8-4.8 4.6-4.8 1.3 0 2.6.2 2.6.2v2.9H18c-1.5 0-2 .9-2 1.9V11h3.4l-.5 3.7H16v9.3h6.7c.7 0 1.3-.6 1.3-1.3V1.3c0-.7-.6-1.3-1.3-1.3z" />
        </svg>
      ),
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-12 border-t border-[var(--color-border)] bg-[var(--color-softbg)]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-white font-bold flex items-center justify-center shadow-medium">
              M
            </div>
            <div>
              <div className="font-bold text-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
                Memorae
              </div>
              <div className="text-sm text-[var(--color-textdim)]">
                Smart reminders on WhatsApp
              </div>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="hidden md:block text-center text-[var(--color-textdim)] text-sm"
          >
            © {currentYear} Memorae. All rights reserved.
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-end gap-6 text-[var(--color-textdim)]"
          >
            {footerLinks.map((item, i) => (
              <motion.div
                key={i}
                variants={linkVariants}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link href={item.href} target="_blank" className="text-2xl">
                  {item.icon}
                </Link>
              </motion.div>
            ))}
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8 pt-8 border-t border-[var(--color-border)] text-center text-sm text-[var(--color-textdim)]"
        >
          Built with ❤️ by Shubham - Memorae Hackathon
        </motion.div>

      </div>
    </motion.footer>
  );
}
