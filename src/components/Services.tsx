export default function Services() {
  return (
    <section className="block" id="services">
      <div className="container">
        <div className="block-head fade-in">
          <div className="eyebrow">What we operate</div>
          <h2 className="display">The full operational <em>stack</em>.</h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--ink-mute)", marginTop: 24, maxWidth: 640 }}>
            Pick the layers you need. Run one service, or hand us the entire back office. Every engagement is shaped around your specialty, EHR, and growth stage.
          </p>
        </div>

        <div className="services-grid fade-in">
          <div className="service-cell">
            <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 3v18h18" />
              <path d="M7 14l4-4 4 4 5-5" />
            </svg>
            <h4>Revenue Cycle Management</h4>
            <p>End-to-end ownership of your collections — coding, claim submission, AR follow-up, denials, payment posting, patient billing. One team, one accountable scorecard.</p>
            <a href="#" className="arrow-link">Explore RCM <span className="arrow">→</span></a>
          </div>
          <div className="service-cell">
            <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 3" />
            </svg>
            <h4>AR Recovery & Follow-Up</h4>
            <p>We hunt aging claims — 30, 60, 90, 120+ days. Payer calls, status checks, resubmissions, appeals. Most clients see AR days drop below 30 within 90 days.</p>
            <a href="#" className="arrow-link">AR services <span className="arrow">→</span></a>
          </div>
          <div className="service-cell">
            <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 11l3 3 7-7" />
              <path d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h9" />
            </svg>
            <h4>Medical Billing</h4>
            <p>Specialty-trained coders and billers. CPT, ICD-10, HCPCS, modifier accuracy. Clean-claim submission as a discipline, not an afterthought.</p>
            <a href="#" className="arrow-link">Billing services <span className="arrow">→</span></a>
          </div>
          <div className="service-cell">
            <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>
            <h4>Prior Authorization</h4>
            <p>Pre-cert submission, payer follow-up, peer-to-peer prep. We shorten time-to-approval and stop the auth bottleneck from holding up patient care.</p>
            <a href="#" className="arrow-link">Prior auth <span className="arrow">→</span></a>
          </div>
          <div className="service-cell">
            <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <path d="M3 10h18" />
            </svg>
            <h4>Insurance Verification</h4>
            <p>Real-time eligibility and benefits checks before the patient walks in. Co-pays, deductibles, coverage limits — clarified, documented, in the chart.</p>
            <a href="#" className="arrow-link">Verification <span className="arrow">→</span></a>
          </div>
          <div className="service-cell">
            <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20 7l-8 8-4-4" />
              <path d="M14 3h7v7" />
              <path d="M21 14v5a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h5" />
            </svg>
            <h4>Virtual Medical Assistants</h4>
            <p>Charting support, message triage, refill management, referrals, lab follow-up. A clinical extension of the provider — quiet, accurate, always there.</p>
            <a href="#" className="arrow-link">Virtual MAs <span className="arrow">→</span></a>
          </div>
          <div className="service-cell">
            <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0122 16.92z" />
            </svg>
            <h4>Front Desk Support</h4>
            <p>Phones answered. Patients greeted (virtually). Schedules managed. We absorb the noise so your in-clinic team can focus on the patient in front of them.</p>
            <a href="#" className="arrow-link">Front desk <span className="arrow">→</span></a>
          </div>
          <div className="service-cell">
            <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M3 10h18M8 2v4M16 2v4M8 14h2M14 14h2M8 18h2M14 18h2" />
            </svg>
            <h4>Scheduling & Coordination</h4>
            <p>Appointment scheduling, reminders, recall, no-show recovery. We protect the calendar — the single most expensive asset in your practice.</p>
            <a href="#" className="arrow-link">Scheduling <span className="arrow">→</span></a>
          </div>
          <div className="service-cell">
            <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 01-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
            <h4>Healthcare Operations Mgmt</h4>
            <p>For larger practices: an operations lead embedded in your team. Workflows, dashboards, KPIs, vendor management. The COO-layer you don&apos;t have yet.</p>
            <a href="#" className="arrow-link">Operations <span className="arrow">→</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}