export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#0A1628" strokeWidth="0.5" opacity="0.08" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="hero-grain"></div>
      </div>
      <div className="ticker-line top">
        <span className="ticker-track">
          RCM · AR RECOVERY · CREDENTIALING · PRIOR AUTHORIZATION · ELIGIBILITY · DENIAL MANAGEMENT · VIRTUAL ASSISTANTS · FRONT DESK · SCHEDULING · CHARGE ENTRY · PAYMENT POSTING · PATIENT COORDINATION · RCM · AR RECOVERY · CREDENTIALING · PRIOR AUTHORIZATION · ELIGIBILITY · DENIAL MANAGEMENT · VIRTUAL ASSISTANTS · FRONT DESK · SCHEDULING · CHARGE ENTRY · PAYMENT POSTING · PATIENT COORDINATION ·
        </span>
      </div>
      <div className="hero-inner">
        <div>
          <div className="eyebrow reveal reveal-1">Operational infrastructure for healthcare</div>
          <h1 className="display reveal reveal-2">
            Your practice should grow <em>without</em> the   <span className="underline-word">operational chaos.</span>
          </h1>
          <p className="lede reveal reveal-3">
            Hired Billing Support is the remote team behind growing practices — RCM specialists, billers, AR experts, and virtual medical assistants embedded into your workflow. So you can stop firefighting and start practicing.
          </p>
          <div className="hero-actions reveal reveal-4">
            <a href="#cta" className="btn btn-primary">
              Book a discovery call
              <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#services" className="btn btn-text">See what we do →</a>
          </div>

          <div className="hero-meta reveal reveal-5">
            <div className="hero-meta-item">
              <span className="num">98<span style={{ color: "var(--signal)" }}>%</span></span>
              <span className="lbl">Clean-claim rate</span>
            </div>
            <div className="hero-meta-item">
              <span className="num">22<span style={{ color: "var(--signal)" }}>d</span></span>
              <span className="lbl">Avg. days in AR</span>
            </div>
            <div className="hero-meta-item">
              <span className="num">$1.2<span style={{ color: "var(--signal)" }}>M+</span></span>
              <span className="lbl">Recovered for clients in &apos;25</span>
            </div>
          </div>
        </div>
        <div className="reveal reveal-4" style={{ animationDelay: "0.5s" }}>
          <div className="hero-card">
            <div className="hero-card-header">
              <span className="label"><span className="live-dot"></span>LIVE · CLIENT WORKSPACE</span>
              <span className="label" style={{ fontVariantNumeric: "tabular-nums" }}>14 MAY · 09:42</span>
            </div>
            <div className="stat-grid">
              <div className="stat-cell">
                <div className="v">$47,820 <span className="delta">▲</span></div>
                <div className="k">Collections this week</div>
              </div>
              <div className="stat-cell">
                <div className="v">186</div>
                <div className="k">Claims submitted</div>
              </div>
              <div className="stat-cell">
                <div className="v">12 <span className="delta" style={{ color: "#D64545" }}>⚠</span></div>
                <div className="k">Denials flagged for appeal</div>
              </div>
              <div className="stat-cell">
                <div className="v">98.2%</div>
                <div className="k">First-pass clean rate</div>
              </div>
            </div>
            <div className="activity-feed">
              <div className="activity-feed-title">— Team activity</div>
              <div className="feed-row"><span>Maya · Posted 34 payments (Aetna ERA)</span><span className="feed-tag">+ $8,420</span></div>
              <div className="feed-row"><span>Jordan · Resolved 6 denied claims</span><span className="feed-tag">+ $2,180</span></div>
              <div className="feed-row"><span>Sara · Verified eligibility for tomorrow&apos;s schedule</span><span className="feed-tag">28 patients</span></div>
              <div className="feed-row"><span>Ali · Obtained 4 prior auths (orthopedic)</span><span className="feed-tag">approved</span></div>
            </div>
          </div>
        </div>
      </div>
      <div className="ticker-line bot">
        <span className="ticker-track">
          HIPAA COMPLIANT · SOC 2 ALIGNED · US TIME-ZONE COVERAGE · EHR-AGNOSTIC · ATHENA · ECW · KAREO · DRCHRONO · ADVANCEDMD · NEXTGEN · EPIC · CERNER · HIPAA COMPLIANT · SOC 2 ALIGNED · US TIME-ZONE COVERAGE · EHR-AGNOSTIC · ATHENA · ECW · KAREO · DRCHRONO · ADVANCEDMD · NEXTGEN · EPIC · CERNER ·
        </span>
      </div>
    </section>
  );
}