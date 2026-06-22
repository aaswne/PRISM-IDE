import "./upgrade.css"
export default function UpgradePage() {
  return (
    <main className="upgrade-page">
      <section className="upgrade-hero">
        <span className="badge">⚡ Prism Pro</span>

        <h1>Upgrade your coding workflow</h1>

        <p>
          Unlock cloud sync, premium themes, AI assistance, and unlimited
          projects for your Prism IDE.
        </p>
      </section>

      <section className="pricing-card">
        <div className="pricing-top">
          <h2>Pro Plan</h2>
          <span>Best value</span>
        </div>

        <div className="price">
          ₹299 <small>/ month</small>
        </div>

        <ul>
          <li>✅ Unlimited projects</li>
          <li>✅ Cloud file sync</li>
          <li>✅ AI code helper</li>
          <li>✅ Premium themes</li>
          <li>✅ Priority support</li>
        </ul>

        <button>Upgrade Now</button>

        <p className="note">Cancel anytime. No hidden charges.</p>
      </section>
    </main>
  );
}