
import {
  ArrowRight,
  Flower2,
  Clapperboard,
  MonitorPlay,
} from "lucide-react";
import { Link } from "react-router-dom";

import "../../css/About.css";

const values = [
  {
    icon: Flower2,
    title: "Devotional Cinema",
    description:
      "Stories rooted in India's spiritual heritage and timeless values.",
  },
  {
    icon: Clapperboard,
    title: "Fiction Storytelling",
    description:
      "Engaging, character-driven stories that reflect real human emotions.",
  },
  {
    icon: MonitorPlay,
    title: "Web Series",
    description:
      "High-quality, impactful series for today's digital audiences.",
  },
];

export default function About() {
  return (
    <section className="custom-about" id="about">
      <div className="container">

        {/* Main About Content */}
        <div className="custom-about-main">

          {/* Production Image */}
          <div className="custom-about-visual">
            <div className="custom-about-image-accent"></div>

            <div className="custom-about-image-frame">
              <img
                src={`${process.env.PUBLIC_URL}/images/about.webp`}
                alt="Film production crew working behind the camera on a shoot"
              />
            </div>

            <div className="custom-about-image-bottom-line"></div>
          </div>

          {/* About Text */}
          <div className="custom-about-content">
            <div className="custom-about-eyebrow">
              <span></span>
              ABOUT SHGR ENTERTAINMENT
            </div>

            <h2>
              A Production House
              <br />
              Built on <span>Meaningful Stories.</span>
            </h2>

            <p>
              SHGR Entertainment is a film and web series production
              house based in the Delhi NCR region. We create devotional
              and fiction content that connects with audiences through
              strong stories, cultural depth and high production values.
            </p>

            <p>
              We believe the strongest stories are those that touch
              the heart and stay with the viewer long after the screen
              goes dark. Our focus is on <strong>devotional cinema</strong>
              {" "}that celebrates India's spiritual heritage and
              {" "}<strong>fiction storytelling</strong> that entertains,
              engages and reflects real emotion.
            </p>

            <p>
              Our approach is simple: begin with a strong story,
              back it with a skilled team, and produce it with care
              at every stage, from concept to final delivery. We work
              closely with writers, directors, technicians and
              distribution partners so that every project is executed
              to a professional standard.
            </p>

            <Link to="/about-us" className="custom-about-link">
              Discover Our Approach
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Creative Focus */}
        <div className="custom-about-values">
          <div className="custom-about-values-heading">
            <span>OUR CREATIVE FOCUS</span>
            <h3>What Defines Our Stories</h3>
          </div>

          <div className="custom-about-values-list">
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <div className="custom-about-value" key={item.title}>
                  <div className="custom-about-value-icon">
                    <Icon size={34} strokeWidth={1.6} />
                  </div>

                  <div className="custom-about-value-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

       

      </div>
    </section>
  );
}
