import "./globals.css";

export const metadata = {
  title: "Memorae — WhatsApp Memory Assistant",
  description:
    "Save notes, reminders, IDs, files, tasks — Memorae remembers everything and delivers when you need.",
  openGraph: {
    title: "Memorae — WhatsApp Memory Assistant",
    description:
      "Your personal memory assistant on WhatsApp. Save reminders, notes, IDs instantly.",
    url: "https://your-deployment.vercel.app",
    images: [
      {
        url: "/memorae_preview.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Memorae — WhatsApp Memory Assistant",
    description: "Your WhatsApp assistant that remembers everything for you.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-display bg-[var(--bg-soft)] text-[var(--text-main)] transition-colors duration-300">

        {/* Background global glow */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-[var(--color-primary)]/20 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-[var(--color-accent)]/25 blur-[150px] rounded-full"></div>
        </div>

        {/* Wrapper for page content */}
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  );
}
