export default function Workflow() {
  return (
    <section className="block dark" id="workflow">
      <div className="container">
        <div className="workflow fade-in">
          <div>
            <div className="eyebrow">The AI + human advantage</div>
            <h2 className="display" style={{ marginTop: 20 }}>AI does the lifting. <em>People do the thinking.</em></h2>
            <p className="lede">
              We pair trained healthcare specialists with AI-assisted workflows. Eligibility checks, claim scrubs, and denial categorization happen in seconds. Specialists focus on the work that actually requires a human — payer escalations, complex appeals, and patient relationships.
            </p>
            <ul className="workflow-points">
              <li>
                <span className="num">01</span>
                <div className="txt">
                  <strong>Automated eligibility & scrubbing</strong>
                  <span>Every claim is validated against payer rules before submission. First-pass rate above 98%.</span>
                </div>
              </li>
              <li>
                <span className="num">02</span>
                <div className="txt">
                  <strong>AI-triaged denials</strong>
                  <span>Denials are categorized, prioritized, and routed to the right specialist queue within minutes — not weeks.</span>
                </div>
              </li>
              <li>
                <span className="num">03</span>
                <div className="txt">
                  <strong>Human-led appeals</strong>
                  <span>Trained appeals specialists write payer-specific responses. Higher overturn rates, less staff time.</span>
                </div>
              </li>
              <li>
                <span className="num">04</span>
                <div className="txt">
                  <strong>Real-time visibility</strong>
                  <span>You see everything we see — KPIs, queues, payments, denials — in a shared dashboard.</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="workflow-diagram">
            <div className="wd-layer l1">
              <div className="wl-tag">— LAYER 01 / INTAKE</div>
              <div className="wl-name">Eligibility · Auth · Demographics</div>
            </div>
            <div className="wd-connector c1"></div>
            <div className="wd-layer l2">
              <div className="wl-tag">— LAYER 02 / AI SCRUB</div>
              <div className="wl-name">Claim validation · Payer rules</div>
            </div>
            <div className="wd-connector c2"></div>
            <div className="wd-layer l3">
              <div className="wl-tag">— LAYER 03 / SPECIALIST QUEUE</div>
              <div className="wl-name">Triaged · Routed · Tracked</div>
            </div>
            <div className="wd-connector c3"></div>
            <div className="wd-layer l4">
              <div className="wl-tag">— LAYER 04 / HUMAN JUDGMENT</div>
              <div className="wl-name">Appeals · Calls · Resolution</div>
            </div>
            <div className="wd-output">
              <div className="ot">— OUTCOME</div>
              <div className="on">Faster reimbursement. Cleaner books.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}