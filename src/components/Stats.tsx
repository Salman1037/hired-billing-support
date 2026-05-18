export default function Stats() {
  return (
    <section className="block">
      <div className="container">
        <div className="block-head fade-in">
          <div className="eyebrow">By the numbers</div>
          <h2 className="display">What it looks like <em>after 90 days.</em></h2>
        </div>
        <div className="stats-row fade-in">
          <div className="stat-block">
            <div className="figure">+27<span className="unit">%</span></div>
            <div className="desc">Average collections lift within the first quarter of full RCM engagement.</div>
          </div>
          <div className="stat-block">
            <div className="figure">22<span className="unit">d</span></div>
            <div className="desc">Average days in AR for active clients — down from a 47-day baseline.</div>
          </div>
          <div className="stat-block">
            <div className="figure">98<span className="unit">%</span></div>
            <div className="desc">First-pass clean-claim rate across all submitted claims, all specialties.</div>
          </div>
          <div className="stat-block">
            <div className="figure">60<span className="unit">%</span></div>
            <div className="desc">Lower operating cost versus building the equivalent in-house team.</div>
          </div>
        </div>
      </div>
    </section>
  );
}