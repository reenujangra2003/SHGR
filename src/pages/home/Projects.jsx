
import {
  Film,
  Clapperboard,
  MonitorPlay,
  ArrowUpRight,
  Clock3,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Project Title",
    genre: "Devotional",
    format: "Feature Film",
    icon: Film,
  },
  {
    number: "02",
    title: "Project Title",
    genre: "Fiction",
    format: "Web Series",
    icon: MonitorPlay,
  },
  {
    number: "03",
    title: "Project Title",
    genre: "Devotional / Fiction",
    format: "Feature Film / Web Series",
    icon: Clapperboard,
  },
];

export default function Projects() {
  return (
    <section className="custom-projects-section py-5" id="projects">
      <div className="container">
        <div className="custom-projects-heading">
          <span className="custom-projects-eyebrow">
            <span></span>
            OUR CREATIVE PORTFOLIO
            <span></span>
          </span>

          <h2>
            Stories Taking <span>Shape.</span>
          </h2>
        </div>

        <div className="custom-projects-feature">
          <div className="custom-projects-feature-content">
            <span className="custom-projects-feature-label">
              <span className="custom-projects-live-dot"></span>
              CURRENTLY IN DEVELOPMENT
            </span>

            <h3>
              New Stories.
              <br />
              <span>New Possibilities.</span>
            </h3>

            <p>
              We are developing a slate of devotional and fiction projects
              across feature film and web series formats. Details will be
              announced soon.
            </p>

            <div className="custom-projects-feature-bottom">
              <Sparkles size={18} />
              <span>STORIES THAT INSPIRE. CINEMA THAT ENDURES.</span>
            </div>
          </div>

          <div className="custom-projects-feature-visual">
            <div className="custom-projects-visual-circle custom-projects-circle-one"></div>
            <div className="custom-projects-visual-circle custom-projects-circle-two"></div>

            <div className="custom-projects-film-icon">
              <Clapperboard size={64} strokeWidth={1} />
            </div>

            <span className="custom-projects-visual-top">
              THE NEXT CHAPTER
            </span>

            <span className="custom-projects-visual-bottom">
              COMING TO LIFE
            </span>
          </div>
        </div>

        <div className="custom-projects-list-heading">
          <div>
            <span>THE UPCOMING SLATE</span>
            <h3>Projects In Development</h3>
          </div>

          <span className="custom-projects-count">
            03 <small>PROJECTS</small>
          </span>
        </div>

        <div className="row g-4">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <div className="col-lg-4 col-md-6" key={project.number}>
                <article className="custom-project-card">
                  <div className="custom-project-poster">
                    <span className="custom-project-number">
                      {project.number}
                    </span>

                    <div className="custom-project-poster-art">
                      <div className="custom-project-poster-circle"></div>
                      <Icon size={47} strokeWidth={1} />
                    </div>

                    <span className="custom-project-poster-brand">
                      SHGR ENTERTAINMENT
                    </span>

                    <div className="custom-project-status">
                      <Clock3 size={13} />
                      IN DEVELOPMENT
                    </div>
                  </div>

                  <div className="custom-project-details">
                    <span className="custom-project-label">
                      {project.genre}
                    </span>

                    <h4>{project.title}</h4>

                    <div className="custom-project-meta">
                      <span>GENRE</span>
                      <strong>{project.genre}</strong>
                    </div>

                    <div className="custom-project-meta">
                      <span>FORMAT</span>
                      <strong>{project.format}</strong>
                    </div>

                    <div className="custom-project-card-footer">
                      <span>DETAILS COMING SOON</span>
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        <div className="custom-projects-bottom">
          <p>More stories are taking shape behind the scenes.</p>
          <span>WATCH THIS SPACE</span>
        </div>
      </div>
    </section>
  );
}
