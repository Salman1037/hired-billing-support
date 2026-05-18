import Link from "next/link";

export default function Nav() {
  return (
    <nav className="top" id="nav">
      <div className="nav-inner">
        <Link href="#" className="logo">
          <span className="logo-mark"></span>
          <span>Hired<em style={{ fontStyle: "italic", fontWeight: 400 }}> Billing </em>Support</span>
        </Link>
        <ul className="nav-links">
          <li><Link href="#services">Services</Link></li>
          <li><Link href="#approach">Approach</Link></li>
          <li><Link href="#workflow">AI + Human</Link></li>
          <li><Link href="#cases">Case Studies</Link></li>
          <li><Link href="#faq">FAQ</Link></li>
        </ul>
        <div className="nav-cta">
          <Link href="#cta" className="btn btn-primary">
            Book a discovery call
            <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}