export default function FAQ() {
  return (
    <section className="block" id="faq">
      <div className="container">
        <div className="block-head fade-in" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>Frequently asked</div>
          <h2 className="display">Questions <em>we hear often.</em></h2>
        </div>
        <div className="faq-list fade-in">
          <details className="faq" open>
            <summary>How is this different from a typical VA or outsourcing company?<span className="toggle">+</span></summary>
            <div className="faq-body">VAs sell hours. We deliver outcomes. Our team is healthcare-trained — not generalist — and embedded directly into your EHR and SOPs. For RCM, we work on a percentage-of-collections model, meaning we only get paid when you do. You&apos;re hiring an operational system, not a contractor.</div>
          </details>
          <details className="faq">
            <summary>Which EHRs and PM systems do you work in?<span className="toggle">+</span></summary>
            <div className="faq-body">We&apos;re EHR-agnostic. Active client work spans Athenahealth, eClinicalWorks, Kareo, AdvancedMD, DrChrono, NextGen, Practice Fusion, Epic, and Cerner. If you&apos;re on something newer or niche, we&apos;ll learn it during onboarding.</div>
          </details>
          <details className="faq">
            <summary>How fast can a team be live?<span className="toggle">+</span></summary>
            <div className="faq-body">Most engagements go live within 10–14 business days. That includes vetting, EHR access provisioning, SOP intake, BAA execution, and a phased takeover so nothing falls through the cracks during transition.</div>
          </details>
          <details className="faq">
            <summary>How are you HIPAA compliant?<span className="toggle">+</span></summary>
            <div className="faq-body">Every team member operates from a controlled workstation with enforced access policies, end-to-end encryption, no local storage of PHI, and continuous monitoring. We sign a BAA, complete role-based training quarterly, and align our administrative, physical, and technical safeguards to HIPAA and SOC 2 trust criteria.</div>
          </details>
          <details className="faq">
            <summary>What does pricing look like?<span className="toggle">+</span></summary>
            <div className="faq-body">For full Revenue Cycle Management: percentage of net collections (typically 3–7% depending on specialty and volume). For dedicated remote staff (VA, front desk, AR-only): flat monthly per seat. No long-term contracts — we earn renewals month over month.</div>
          </details>
          <details className="faq">
            <summary>Can we start with just one service?<span className="toggle">+</span></summary>
            <div className="faq-body">Yes. Most clients start with one bottleneck — usually AR recovery or insurance verification — and expand once they see the throughput. You&apos;re never locked into the full stack.</div>
          </details>
          <details className="faq">
            <summary>Will the team really feel like ours?<span className="toggle">+</span></summary>
            <div className="faq-body">Yes. Your team uses your email domain, joins your standups, follows your SOPs, and reports to your practice manager. To your patients, they&apos;re staff. To us, they&apos;re accountable to outcomes you define.</div>
          </details>
        </div>
      </div>
    </section>
  );
}