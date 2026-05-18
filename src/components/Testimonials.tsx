export default function Testimonials() {
  return (
    <section className="block">
      <div className="container">
        <div className="block-head fade-in">
          <div className="eyebrow">In their own words</div>
          <h2 className="display">From physicians who got their <em>evenings back.</em></h2>
        </div>
        <div className="testi-wrap fade-in">
          <div className="testi">
            <div className="testi-quote">
              The first month, our AR dropped 30%. The second month, I stopped charting at home. I didn&apos;t realize how much operational noise was bleeding into my clinical day until it was gone.
            </div>
            <div className="testi-attr">
              <div className="testi-avatar">RP</div>
              <div>
                <div className="testi-name">Dr. Ravi Patel</div>
                <div className="testi-role">Internal Medicine · Houston, TX</div>
              </div>
            </div>
          </div>
          <div className="testi">
            <div className="testi-quote">
              We hired and lost three billers in two years. HBS gave us a team in eleven days. They know our payers better than our last in-house person did — and they&apos;re never out sick.
            </div>
            <div className="testi-attr">
              <div className="testi-avatar">SM</div>
              <div>
                <div className="testi-name">Sandra Mireles</div>
                <div className="testi-role">Practice Manager · Behavioral Health Group</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}