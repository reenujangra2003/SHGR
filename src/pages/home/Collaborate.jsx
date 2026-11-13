
import {
  Clapperboard,
  Wallet,
  MonitorPlay,
  PenTool,
  Landmark,
} from "lucide-react";
import "../../css/Collaborate.css";

const partnerships = [
  {
    number: "01",
    title: "Producers & Co-Producers",
    description:
      "Build meaningful projects through creative and production partnerships.",
    icon: Clapperboard,
  },
  {
    number: "02",
    title: "Investors & Financiers",
    description:
      "Explore opportunities to support original film and series projects.",
    icon: Wallet,
  },
  {
    number: "03",
    title: "OTT Platforms & Distributors",
    description:
      "Connect with us for platform, broadcast and distribution opportunities.",
    icon: MonitorPlay,
  },
  {
    number: "04",
    title: "Writers, Directors & Creative Talent",
    description:
      "Bring fresh ideas, stories and creative perspectives to the table.",
    icon: PenTool,
  },
  {
    number: "05",
    title: "Government & Institutional Bodies",
    description:
      "Explore collaborations that support meaningful cultural storytelling.",
    icon: Landmark,
  },
];

export default function Collaborate() {
  return (
    <section className="custom-collaborate-section" id="collaborate">
      <div className="container">

        <div className="custom-collaborate-top">
          <div className="custom-collaborate-heading">
            <span className="custom-collaborate-eyebrow">
              <span></span> COLLABORATE WITH SHGR
            </span>

            <h2>
              Great stories
              <br />
              <em>bring people together.</em>
            </h2>
          </div>

          <div className="custom-collaborate-intro">
            <p>
              We believe that meaningful entertainment is created
              through shared ideas, creative thinking and strong
              professional partnerships.
            </p>
            <p>
              Whether you are a filmmaker, investor, platform or
              creative professional, let's explore what we can
              create together.
            </p>

            
          </div>
        </div>

        <div className="custom-collaborate-main">

          <div className="custom-collaborate-grid">
            {partnerships.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="custom-collaborate-card"
                  key={item.number}
                >
                  <div className="custom-collaborate-card-top">
                    <span className="custom-collaborate-number">
                      {item.number}
                    </span>

                    <div className="custom-collaborate-card-icon">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <div className="custom-collaborate-card-line"></div>
                </article>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
