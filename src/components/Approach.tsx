export default function Approach() {
  return (
    <section className="block warm" id="approach">
      <div className="container">
        <div className="block-head fade-in">
          <div className="eyebrow">A different model</div>
          <h2 className="display">Not outsourcing. <em>Operational infrastructure.</em></h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--ink-mute)", marginTop: 24, maxWidth: 640 }}>
            We don&apos;t sell hours. We embed trained healthcare specialists directly into your workflow — operating inside your EHR, your communication tools, and your standards. You get the throughput of a 12-person back office without hiring one.
          </p>
        </div>

        <div className="approach-grid fade-in">
          <div className="approach-card feature">
            <span className="approach-num">— 01 / EMBEDDED TEAMS</span>
            <h3 className="display">A back office that <em>shows up</em> on Monday morning.</h3>
            <p>Pre-vetted billers, AR specialists, virtual assistants, and front desk talent — onboarded into your EHR, your SOPs, and your standards. They report to you. They feel like yours. Because operationally, they are.</p>
            <div className="approach-illust">
              <svg width="100%" height="100%" viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.9 }}>
                <g fill="none" stroke="#00C896" strokeWidth="1">
                  <circle cx="80" cy="70" r="22" />
                  <circle cx="160" cy="70" r="22" />
                  <circle cx="240" cy="70" r="22" />
                  <circle cx="320" cy="70" r="22" />
                  <line x1="102" y1="70" x2="138" y2="70" strokeDasharray="3 3" />
                  <line x1="182" y1="70" x2="218" y2="70" strokeDasharray="3 3" />
                  <line x1="262" y1="70" x2="298" y2="70" strokeDasharray="3 3" />
                </g>
                <g fontFamily="JetBrains Mono" fontSize="9" fill="#FAF7F2" opacity="0.7" textAnchor="middle">
                  <text x="80" y="108">RCM</text>
                  <text x="160" y="108">AR</text>
                  <text x="240" y="108">VA</text>
                  <text x="320" y="108">FRONT</text>
                </g>
                <g fontFamily="Fraunces" fontSize="12" fill="#FAF7F2" textAnchor="middle">
                  <text x="80" y="74">M</text>
                  <text x="160" y="74">J</text>
                  <text x="240" y="74">S</text>
                  <text x="320" y="74">A</text>
                </g>
              </svg>
            </div>
          </div>

          <div className="approach-card">
            <span className="approach-num">— 02 / AI + HUMAN</span>
            <h3 className="display">AI does the lifting. <em>Humans do the judgment.</em></h3>
            <p>Eligibility checks, claim scrubbing, denial categorization — automated. The complex appeals, payer calls, and patient conversations — handled by trained specialists.</p>
          </div>

          <div className="approach-card">
            <span className="approach-num">— 03 / RCM, NOT HOURS</span>
            <h3 className="display">A percentage model. <em>Aligned incentives.</em></h3>
            <p>For full RCM engagements, we charge a percentage of collections. We only win when you do — and we don&apos;t get paid for claims that don&apos;t.</p>
          </div>

          <div className="approach-card">
            <span className="approach-num">— 04 / SCALES WITH YOU</span>
            <h3 className="display">Add capacity in <em>days</em>, not quarters.</h3>
            <p>Open a new location? Doubled patient volume? We scale your team within a week — without W-2s, benefits, recruiting cycles, or hiring risk.</p>
          </div>
        </div>
      </div>
    </section>
  );
}