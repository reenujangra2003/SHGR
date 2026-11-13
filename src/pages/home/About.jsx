
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Heart,
  Clapperboard,
} from "lucide-react";

const values = [
  {
    number: "01",
    icon: <Heart size={21} />,
    title: "Devotional Cinema",
    description:
      "Celebrating India's spiritual heritage through meaningful storytelling.",
  },
  {
    number: "02",
    icon: <Clapperboard size={21} />,
    title: "Fiction Storytelling",
    description:
      "Stories that entertain, engage and reflect real human emotions.",
  },
  {
    number: "03",
    icon: <Sparkles size={21} />,
    title: "Professional Craft",
    description:
      "Strong stories, skilled teams and care at every stage of production.",
  },
];

export default function About() {
  return (
    <section className="custom-about py-5" id="about">

      <div className="container">

        {/* Main About Content */}
        <div className="custom-about-main">

          {/* Left Visual */}
          <div className="custom-about-visual">

            <div className="custom-about-image-frame">
              <img
                src={`${process.env.PUBLIC_URL}/images/about.webp`}
                alt="Indian heritage architecture representing SHGR Entertainment"
              />

              <div className="custom-about-image-overlay"></div>

              <div className="custom-about-image-caption">
                <span>OUR PHILOSOPHY</span>
                <h3>
                  Every Story Deserves to Be Told With Purpose.
                </h3>
              </div>
            </div>

            <div className="custom-about-image-decoration"></div>

            <div className="custom-about-side-label">
              CULTURE · EMOTION · CRAFT
            </div>

          </div>

          {/* Right Content */}
          <div className="custom-about-content">

            <div className="custom-about-content-tag">
              
              ABOUT SHGR ENTERTAINMENT
            </div>

            <h3>
              Stories That Touch
              <span> The Heart.</span>
            </h3>

            <p>
              SHGR Entertainment is a production house based in the
              Delhi NCR region, dedicated to creating meaningful
              films and web series for audiences across India and beyond.
            </p>

            <p>
              We believe the strongest stories are those that touch
              the heart and stay with the viewer long after the screen
              goes dark. Our focus is on{" "}
              <strong>devotional cinema</strong> that celebrates India's
              spiritual heritage and{" "}
              <strong>fiction storytelling</strong> that entertains,
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

            <a href="#collaborate" className="custom-about-link">
              Discover Our Approach
              <ArrowUpRight size={17} />
            </a>

          </div>

        </div>

        {/* Creative Focus */}
        <div className="custom-about-values">

          <div className="custom-about-values-heading">
            <span>OUR CREATIVE FOCUS</span>
            <h3>What Defines Our Stories</h3>
          </div>

          <div className="row g-4">

            {values.map((item) => (
              <div className="col-lg-4 col-md-4" key={item.number}>
                <div className="custom-about-value-card">

                  <div className="custom-about-value-top">
                    <span>{item.number}</span>

                    <div className="custom-about-value-icon">
                      {item.icon}
                    </div>
                  </div>

                  <h4>{item.title}</h4>

                  <p>{item.description}</p>

                  <div className="custom-about-value-line"></div>

                </div>
              </div>
            ))}

          </div>

        </div>

        {/* Vision Banner */}
        <div className="custom-about-vision">

          <div>
            <span>OUR VISION</span>

            <h3>
              Stories That Inspire.
              <span> Cinema That Endures.</span>
            </h3>
          </div>

          <a href="#contact" aria-label="Contact SHGR Entertainment">
            <ArrowRight size={22} />
          </a>

        </div>

      </div>

    </section>
  );
}
