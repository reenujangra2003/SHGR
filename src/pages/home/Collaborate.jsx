
import {
  Clapperboard,
  Handshake,
  Wallet,
  MonitorPlay,
  PenTool,
  Landmark,
  ArrowUpRight,
  Mail,
} from "lucide-react";

const partnerships = [
  {
    number: "01",
    title: "Producers & Co-Producers",
    description: "Build meaningful projects through creative and production partnerships.",
    icon: Clapperboard,
  },
  {
    number: "02",
    title: "Investors & Financiers",
    description: "Explore opportunities to support original film and series projects.",
    icon: Wallet,
  },
  {
    number: "03",
    title: "OTT Platforms & Distributors",
    description: "Connect with us for platform, broadcast and distribution opportunities.",
    icon: MonitorPlay,
  },
  {
    number: "04",
    title: "Writers, Directors & Creative Talent",
    description: "Bring fresh ideas, stories and creative perspectives to the table.",
    icon: PenTool,
  },
  {
    number: "05",
    title: "Government & Institutional Bodies",
    description: "Explore collaborations that support meaningful cultural storytelling.",
    icon: Landmark,
  },
];

export default function Collaborate() {
  return (
    <section className="custom-collaborate-section" id="collaborate">
      <div className="container">
        <div className="custom-collaborate-wrapper">
          <div className="custom-collaborate-left">
            <span className="custom-collaborate-eyebrow">
              <span></span>
              LET'S WORK TOGETHER
            </span>

            <div className="custom-collaborate-decoration">
              <Handshake size={34} strokeWidth={1.3} />
            </div>

            <h2>
              Collaborate
              <br />
              With <span>Us.</span>
            </h2>

            <p>
              If you have a story, a script or a project in mind,
              we would be glad to hear from you. Let's bring meaningful
              ideas to life through creative collaboration.
            </p>

            <div className="custom-collaborate-cta">
              <span>LET'S CREATE SOMETHING</span>
              <h3>Meaningful Together.</h3>

              <a href="#contact" className="custom-collaborate-button">
                START A CONVERSATION
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="custom-collaborate-brand">
              <span>SHGR ENTERTAINMENT</span>
              <span>STORIES THAT INSPIRE. CINEMA THAT ENDURES.</span>
            </div>
          </div>

          <div className="custom-collaborate-right">
            <div className="custom-collaborate-right-heading">
              <span>WHO WE WELCOME</span>
              <h3>Let's Build Something Together.</h3>
              <p>
                We welcome conversations with people and organisations
                who share a passion for meaningful storytelling.
              </p>
            </div>

            <div className="custom-collaborate-list">
              {partnerships.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="custom-collaborate-item" key={item.number}>
                    <span className="custom-collaborate-item-number">
                      {item.number}
                    </span>

                    <div className="custom-collaborate-item-icon">
                      <Icon size={21} strokeWidth={1.6} />
                    </div>

                    <div className="custom-collaborate-item-content">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>

                    <ArrowUpRight
                      className="custom-collaborate-item-arrow"
                      size={19}
                    />
                  </div>
                );
              })}
            </div>

            <div className="custom-collaborate-note">
              <Mail size={19} />
              <span>
                Have an idea or proposal? <strong>We'd love to hear from you.</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
