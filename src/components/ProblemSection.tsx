export default function ProblemSection() {
  return (
    <section className="block">
      <div className="container">
        <div className="block-head fade-in">
          <div className="eyebrow">The state of practice operations</div>
          <h2 className="display">Your doctors are charting after hours. <em>Again.</em></h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--ink-mute)", marginTop: 24, maxWidth: 640 }}>
            Even in the age of AI, providers are drowning. The cost of running a practice has never been higher — and the people you&apos;ve hired to fix it are burning out too.
          </p>
        </div>

        <div className="pain-ledger fade-in">
          <div className="pain-row">
            <div className="pn">01</div>
            <div className="ptitle">Front desk is overwhelmed</div>
            <div className="pdesc">Phones don&apos;t stop. Verifications pile up. No-shows go uncalled. Schedules leak revenue.</div>
            <div className="pstat">+34% call volume</div>
          </div>
          <div className="pain-row">
            <div className="pn">02</div>
            <div className="ptitle">Claims are aging</div>
            <div className="pdesc">Claims sit in 60+ buckets. AR keeps growing. Cash flow is unpredictable.</div>
            <div className="pstat">$1 in $4 lost</div>
          </div>
          <div className="pain-row">
            <div className="pn">03</div>
            <div className="ptitle">Denials are increasing</div>
            <div className="pdesc">Payer rules shift weekly. Coding errors slip through. Appeals never get filed.</div>
            <div className="pstat">~18% denial rate</div>
          </div>
          <div className="pain-row">
            <div className="pn">04</div>
            <div className="ptitle">Staff costs are rising</div>
            <div className="pdesc">W-2s, benefits, turnover, training, PTO. Salaries outpacing reimbursement, every year.</div>
            <div className="pstat">+11% YoY overhead</div>
          </div>
          <div className="pain-row">
            <div className="pn">05</div>
            <div className="ptitle">Doctors are doing admin</div>
            <div className="pdesc">Charting after hours. Chasing prior auths. Doing the work two people should be doing.</div>
            <div className="pstat">2 hrs / day lost</div>
          </div>
          <div className="pain-row">
            <div className="pn">06</div>
            <div className="ptitle">Hiring is broken</div>
            <div className="pdesc">90 days to fill a billing seat. 6 months to train. 14 months to lose them.</div>
            <div className="pstat">$22k cost / hire</div>
          </div>
        </div>
      </div>
    </section>
  );
}