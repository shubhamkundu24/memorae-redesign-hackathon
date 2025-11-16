"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  // Sequence of automated messages
  const messageSequence = [
    { id: 1, side: "other", text: "Welcome to Memorae 👋 Send anything to save it." },
    { id: 2, side: "me", text: "Save: PAN ABCDE1234F" },
    { id: 3, side: "other", text: "Saved securely 🔒" },
    { id: 4, side: "me", text: "Remind me to pay rent on 1st" },
    { id: 5, side: "other", text: "Reminder set ✔ Monthly, every 1st." },
  ];

  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const chatRef = useRef(null);

  // Auto-play message sequence (real chat flow)
  useEffect(() => {
    let index = 0;

    const playNext = () => {
      if (index >= messageSequence.length) return;

      const nextMsg = messageSequence[index];

      // Show typing before each message from "other"
      if (nextMsg.side === "other") {
        setTyping(true);

        setTimeout(() => {
          setTyping(false);
          setMessages((prev) => [...prev, nextMsg]);
          index++;
          playNext();
        }, 1500); // typing delay
      } else {
        // "me" messages appear instantly
        setMessages((prev) => [...prev, nextMsg]);
        index++;

        setTimeout(playNext, 1100);
      }
    };

    setTimeout(playNext, 1000);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, typing]);

  return (
    <section className="pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight text-[var(--foreground)]"
          >
            Your personal memory assistant{" "}
            <span className="text-[var(--color-primary)]">on WhatsApp.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-5 text-[var(--text-dim)] text-lg"
          >
            Save notes, reminders, IDs, files, tasks — Memorae remembers
            everything and delivers it back exactly when you need.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-8 flex gap-4"
          >
            <button className="px-6 py-3 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-white font-medium shadow hover:scale-[1.02] transition">
              Start on WhatsApp
            </button>

            <button className="px-6 py-3 rounded-lg 
              bg-[var(--color-card)] 
              text-[var(--text-main)]
              border border-[var(--color-border)] 
              shadow hover:bg-[var(--color-lightgray)] transition">
              Watch Demo
            </button>
          </motion.div>
        </div>

        {/* RIGHT — LIVE WHATSAPP CHAT SIMULATION */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.55 }}
          className="flex justify-center"
        >
          <div className="phone p-4 relative">

            {/* Notch */}
            <div className="w-full flex justify-center">
              <div className="w-16 h-1.5 rounded-full bg-[var(--text-dim)]/40" />
            </div>

            {/* Chat Screen */}
            <div
              ref={chatRef}
              className="mt-4 bg-[var(--color-card)] rounded-xl 
                border border-[var(--color-border)]
                h-[620px] p-4 overflow-y-auto shadow-inner flex flex-col gap-3 scroll-smooth"
            >
              <div className="text-xs mx-auto text-[var(--text-dim)] my-2">
                Today • 10:24 AM
              </div>

              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className={`flex ${m.side === "me" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`chat-bubble ${m.side === "me" ? "chat-me" : "chat-other"}`}>
                    {m.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing Animation */}
              {typing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="chat-bubble chat-other flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--text-dim)] animate-pulse"></span>
                    <span className="w-2 h-2 rounded-full bg-[var(--text-dim)] animate-pulse delay-150"></span>
                    <span className="w-2 h-2 rounded-full bg-[var(--text-dim)] animate-pulse delay-300"></span>
                    <span className="ml-2 text-xs text-[var(--text-dim)]">typing...</span>
                  </div>
                </motion.div>
              )}

              {/* Spacer */}
              <div className="flex-grow" />

              {/* Bottom input (fake) */}
              <div className="flex items-center gap-3 mt-auto">
                <input
                  className="flex-1 border border-[var(--color-border)]
                    rounded-full px-4 py-2 text-sm 
                    bg-[var(--color-card)] text-[var(--text-main)]"
                  placeholder="Type a message…"
                  readOnly
                />
                <button className="px-4 py-2 rounded-full bg-[var(--color-primary)] text-white">
                  ➤
                </button>
              </div>

            </div>

            {/* Glow */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--color-primary)]/20 blur-3xl rounded-full"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
