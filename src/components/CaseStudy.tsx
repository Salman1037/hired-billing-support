export default function CaseStudy() {
  return (
    <section className="block warm" id="cases">
      <div className="container">
        <div className="block-head fade-in">
          <div className="eyebrow">Case study</div>
          <h2 className="display">A 4-physician primary care group, <em>after 6 months.</em></h2>
        </div>
        <div className="case-card fade-in">
          <div className="case-body">
            <div className="eyebrow">Primary care · 4 providers · Texas</div>
            <h3>From 47 days in AR and burnout, to a calmer practice and 31% more revenue.</h3>
            <p>
              The practice was running on two in-house billers, a stretched-thin front desk, and a $180k AR backlog. We embedded a 3-person remote team: one biller, one AR specialist, one verification VA. We took over the AR aging report on day one.
            </p>
            <p>By month six: AR days under 25, denials cut in half, the in-house team redeployed to patient experience, and the lead physician home for dinner.</p>
            <a href="#" className="btn btn-light">Read the full case →</a>
          </div>
          <div className="case-metrics">
            <div className="case-metric">
              <div className="v">+31<span className="unit">%</span></div>
              <div className="k">Monthly collections lift</div>
            </div>
            <div className="case-metric">
              <div className="v">-47<span className="unit">%</span></div>
              <div className="k">Denial rate reduction</div>
            </div>
            <div className="case-metric">
              <div className="v">22<span className="unit">d</span></div>
              <div className="k">Days in AR (from 47)</div>
            </div>
            <div className="case-metric">
              <div className="v">$112<span className="unit">k</span></div>
              <div className="k">AR recovered in 90 days</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}