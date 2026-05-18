export default function FinalCTA() {
  return (
    <section className="final-cta" id="cta">
      <div className="final-cta-glow"></div>
      <div className="cta-inner">
        <div className="eyebrow" style={{ justifyContent: "center", color: "rgba(250,247,242,0.55)" }}>Let&apos;s talk</div>
        <h2 className="display">More patient care. <em>Less administrative burden.</em></h2>
        <p>Book a 30-minute discovery call. We&apos;ll audit your current operations and show you exactly where time and revenue are leaking — no pitch, no obligation.</p>
        <div className="actions">
          <a href="#" className="btn btn-light">
            Book a discovery call
            <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#" className="btn btn-ghost" style={{ color: "var(--paper)", borderColor: "rgba(250,247,242,0.3)" }}>Request an RCM audit</a>
        </div>
      </div>
    </section>
  );
}