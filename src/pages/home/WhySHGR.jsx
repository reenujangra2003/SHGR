
import {
  BookOpen,
  Landmark,
  ClipboardList,
  Handshake,
  Eye,
  BadgeCheck,
  ArrowUpRight,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Story-First Approach",
    description:
      "Every project begins with a strong script and a clear creative vision.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Cultural Authenticity",
    description:
      "Research and respect guide how we treat devotional and traditional subjects.",
    icon: Landmark,
  },
  {
    number: "03",
    title: "Professional Production Standards",
    description:
      "Structured planning, budgeting and scheduling at every stage.",
    icon: ClipboardList,
  },
  {
    number: "04",
    title: "Collaborative Partnerships",
    description:
      "We work closely with directors, writers, artists, technicians and financiers.",
    icon: Handshake,
  },
  {
    number: "05",
    title: "Transparent Execution",
    description:
      "Clear communication, defined timelines and accountability throughout.",
    icon: Eye,
  },
  {
    number: "06",
    title: "Quality Delivery",
    description:
      "Content prepared to broadcast and platform specifications.",
    icon: BadgeCheck,
  },
];

export default function WhySHGR() {
  return (
    <section className="custom-why-section py-5" id="why-shgr">
      <div className="custom-why-decoration custom-why-decoration-one"></div>
      <div className="custom-why-decoration custom-why-decoration-two"></div>

      <div className="container">
        <div className="custom-why-heading">
          <span className="custom-why-eyebrow">
            <span></span>
            THE SHGR DIFFERENCE
            <span></span>
          </span>

          <h2>
            Why Choose <span>SHGR Entertainment?</span>
          </h2>

          <p>
            A thoughtful approach to storytelling, backed by creative
            collaboration, professional discipline and a commitment to quality.
          </p>
        </div>

        <div className="row g-4 custom-why-grid">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div className="col-lg-4 col-md-6" key={reason.number}>
                <article className="custom-why-card">
                  <div className="custom-why-card-top">
                    <span className="custom-why-number">
                      {reason.number}
                    </span>

                    <div className="custom-why-icon">
                      <Icon size={23} strokeWidth={1.6} />
                    </div>
                  </div>

                  <h3>{reason.title}</h3>

                  <p>{reason.description}</p>

                  <div className="custom-why-card-bottom">
                    <span>OUR COMMITMENT</span>
                    <ArrowUpRight size={18} />
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        <div className="custom-why-footer">
          <div className="custom-why-footer-mark">
            <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" className="w-100 h-auto" />
            {/* <span>SHGR</span>
            <span>ENTERTAINMENT</span> */}
          </div>

          <div className="custom-why-footer-content">
            <span>OUR PROMISE</span>
            <h3>Creative Vision. Professional Execution.</h3>
          </div>

          <a href="#collaborate" className="custom-why-footer-link">
            WORK WITH US
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
