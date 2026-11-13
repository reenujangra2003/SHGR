
import { ArrowUpRight } from "lucide-react";
import "../../css/Projects.css";

const projects = [
  {
    number: "01",
    title: "Devotional Cinema",
    category: "DEVOTIONAL",
    format: "FEATURE FILM",
    description:
      "Stories inspired by faith, spiritual heritage and the timeless values of Indian culture.",
    image: `${process.env.PUBLIC_URL}/images/p1.jpg`,
    alt: "Indian heritage architecture in a cinematic setting",
  },
  {
    number: "02",
    title: "Fiction & Drama",
    category: "FICTION",
    format: "WEB SERIES",
    description:
      "Emotion-driven narratives exploring human relationships, society and contemporary life.",
    image: `${process.env.PUBLIC_URL}/images/p2.avif`,
    alt: "Cinematic fiction and drama storytelling scene",
  },
  {
    number: "03",
    title: "Stories for the Screen",
    category: "ORIGINAL CONTENT",
    format: "FILM & SERIES",
    description:
      "A creative space for distinctive stories developed with imagination, purpose and craft.",
    image: `${process.env.PUBLIC_URL}/images/p3.webp`,
    alt: "Professional film camera on a production set",
  },
];

export default function Projects() {
  return (
    <section className="custom-projects" id="projects">
      <div className="container">
        <div className="custom-projects-heading">
          <div>
            <span className="custom-projects-eyebrow">
              <span></span> OUR CREATIVE PORTFOLIO
            </span>

            <h2>
              Stories made
              <br />
              <em>to be remembered.</em>
            </h2>
          </div>

          <div className="custom-projects-intro">
            <span className="custom-projects-intro-label">
              THE SHGR VISION
            </span>
            <p>
              Every memorable screen experience begins with a story worth
              telling. We are building a creative slate across devotional
              cinema and fiction storytelling.
            </p>
          </div>
        </div>

        <div className="custom-projects-grid">
          {projects.map((project) => (
            <article className="custom-project-card" key={project.number}>
              <div className="custom-project-image">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                />
                <span className="custom-project-image-number">
                  {project.number}
                </span>
              </div>

              <div className="custom-project-card-content">
                <div className="custom-project-meta">
                  <span>{project.category}</span>
                  <span>{project.format}</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="custom-project-card-footer">
                  <span>SHGR ENTERTAINMENT</span>
                  <span className="custom-project-arrow">
                    <ArrowUpRight size={19} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="custom-projects-bottom">
          <div>
            <span>BEHIND EVERY FRAME, THERE IS A STORY.</span>
            <h3>
              Let's create something
              <em> meaningful.</em>
            </h3>
          </div>

          <a href="#collaborate" className="custom-projects-cta">
            WORK WITH US <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
