export default function Compliance() {
  return (
    <section className="block warm">
      <div className="container">
        <div className="compliance fade-in">
          <div>
            <div className="eyebrow">Security & compliance</div>
            <h2 className="display" style={{ marginTop: 20 }}>Built for healthcare. <em>Auditable by design.</em></h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--ink-mute)", marginTop: 24, maxWidth: 560 }}>
              We operate to HIPAA standards across our entire stack — workstations, networks, communications, and access controls. Every team member is BAA-bound, background-checked, and trained on PHI handling before they touch your data.
            </p>
            <a href="#" className="btn btn-ghost" style={{ marginTop: 32 }}>Read the security overview →</a>
          </div>
          <div className="compliance-badges">
            <div className="badge">
              <div className="badge-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <h5>HIPAA Compliant</h5>
                <p>Full administrative, physical, technical safeguards.</p>
              </div>
            </div>
            <div className="badge">
              <div className="badge-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div>
                <h5>SOC 2 Aligned</h5>
                <p>Trust service criteria mapped across operations.</p>
              </div>
            </div>
            <div className="badge">
              <div className="badge-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
              </div>
              <div>
                <h5>Encrypted End-to-End</h5>
                <p>At rest, in transit, in storage. AES-256.</p>
              </div>
            </div>
            <div className="badge">
              <div className="badge-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
              </div>
              <div>
                <h5>Vetted Personnel</h5>
                <p>Background-checked. BAA-bound. Continuously audited.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}