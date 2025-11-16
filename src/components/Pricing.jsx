
"use client"
export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">
          Simple Pricing
        </h2>

        <p className="mt-3 text-[var(--text-dim)] max-w-lg mx-auto">
          Start free. Upgrade anytime for more features.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">

          {/* Free Plan */}
          <div className="p-8 rounded-2xl shadow-soft border border-[var(--color-border)] bg-[var(--color-card)] transition">
            <h3 className="text-2xl font-semibold text-[var(--foreground)]">Free</h3>

            <p className="mt-2 text-[var(--text-dim)]">
              Basic features for everyone
            </p>

            <div className="text-4xl font-extrabold mt-6 text-[var(--foreground)]">₹0</div>

            <ul className="mt-6 space-y-2 text-[var(--text-dim)]">
              <li>✔ Save unlimited notes</li>
              <li>✔ Basic reminders</li>
              <li>✔ Secure storage</li>
            </ul>

            <button className="mt-8 w-full py-3 rounded-lg bg-[var(--color-lightgray)] hover:bg-[var(--color-border)] text-[var(--foreground)] transition">
              Start Free
            </button>
          </div>

          {/* Pro Plan */}
          <div className="p-8 rounded-2xl shadow-xl 
                          bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]
                          text-white">

            <h3 className="text-2xl font-semibold text-white">Pro</h3>

            <p className="mt-2 text-white/90">
              Advanced features for power users
            </p>

            <div className="text-4xl font-extrabold mt-6 text-white">₹199/mo</div>

            <ul className="mt-6 space-y-2 text-white">
              <li>✔ Smart recurring reminders</li>
              <li>✔ Priority support</li>
              <li>✔ Faster responses</li>
              <li>✔ Extra cloud storage</li>
            </ul>

            <button className="mt-8 w-full py-3 rounded-lg 
                               bg-white text-black font-semibold 
                               hover:opacity-90 transition">
              Upgrade to Pro
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
