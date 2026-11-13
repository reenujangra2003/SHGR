
import {
  ArrowUpRight,
  Clapperboard,
  Camera,
  PenTool,
  Film,
  Music2,
  Palette,
  Users,
  Quote,
} from "lucide-react";

import "../css/Team.css";

const creativeRoles = [
  {
    icon: PenTool,
    title: "Writers",
    description: "Developing stories, screenplays and dialogues.",
  },
  {
    icon: Clapperboard,
    title: "Directors",
    description: "Shaping the creative vision of every project.",
  },
  {
    icon: Camera,
    title: "Cinematographers",
    description: "Bringing stories to life through visuals.",
  },
  {
    icon: Film,
    title: "Editors",
    description: "Crafting the final narrative through editing.",
  },
  {
    icon: Music2,
    title: "Composers",
    description: "Creating music and sound that support each story.",
  },
  {
    icon: Palette,
    title: "Designers",
    description: "Building the visual world of a production.",
  },
];

export default function Team() {
  return (
    <main className="custom-team-page">

      {/* HERO */}
      <section className="custom-team-hero">
        <div className="container">
          <div className="custom-team-hero-content">
            <span className="custom-team-eyebrow">
              THE PEOPLE BEHIND THE STORIES
            </span>

            <h1>
              Creative Minds.
              <span> One Shared Vision.</span>
            </h1>

            <p>
              Meaningful cinema is built through collaboration.
              Meet the leadership and creative network behind
              SHGR Entertainment.
            </p>

            <a href="#team-leadership" className="custom-team-hero-link">
              MEET OUR TEAM
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="custom-team-hero-footer">
            <span>VISION</span>
            <span className="custom-team-dot" />
            <span>CREATIVITY</span>
            <span className="custom-team-dot" />
            <span>COLLABORATION</span>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="custom-team-leadership" id="team-leadership">
        <div className="container">
          <div className="custom-team-section-heading">
            <span className="custom-team-eyebrow">LEADERSHIP</span>
            <h2>
              A Vision That
              <span> Leads the Way.</span>
            </h2>
          </div>

          <div className="custom-team-founder">
            <div className="custom-team-founder-visual">
              <div className="custom-team-founder-frame">
                <div className="custom-team-founder-initials">
                  <span>S</span>
                  <span>K</span>
                </div>

                <div className="custom-team-founder-visual-caption">
                  <span>SHGR ENTERTAINMENT</span>
                  <strong>Leadership</strong>
                </div>
              </div>

              <span className="custom-team-founder-index">01</span>
            </div>

            <div className="custom-team-founder-content">
              <span className="custom-team-founder-label">
                FOUNDER / DIRECTOR*
              </span>

              <h3>Shashi Kulshreshtha</h3>

              <p className="custom-team-founder-intro">
                The leadership behind SHGR Entertainment's vision
                and creative direction.
              </p>

              <div className="custom-team-bio-placeholder">
                <span>LEADERSHIP BIOGRAPHY</span>
                <p>
                  Add a short biography covering professional background,
                  creative vision and role in the company.
                </p>
              </div>

              <p className="custom-team-designation-note">
                *Designation to be confirmed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CREATIVE TEAM */}
      <section className="custom-team-creative">
        <div className="container">
          <div className="custom-team-creative-heading">
            <div>
              <span className="custom-team-eyebrow">
                CREATIVE & PRODUCTION TEAM
              </span>

              <h2>
                Great Stories
                <span> Are Never Made Alone.</span>
              </h2>
            </div>

            <p>
              We work with a growing network of writers, directors,
              cinematographers, editors, composers, designers and
              production professionals, brought together for each
              project according to its needs.
            </p>
          </div>

          <div className="row g-0 custom-team-roles">
            {creativeRoles.map((role, index) => {
              const Icon = role.icon;

              return (
                <div className="col-lg-4 col-md-6" key={role.title}>
                  <article className="custom-team-role-card">
                    <div className="custom-team-role-top">
                      <span>0{index + 1}</span>
                      <Icon size={25} strokeWidth={1.5} />
                    </div>

                    <h3>{role.title}</h3>
                    <p>{role.description}</p>

                    <div className="custom-team-role-line" />
                  </article>
                </div>
              );
            })}
          </div>

          <div className="custom-team-network-note">
            <Users size={22} strokeWidth={1.5} />

            <p>
              Our creative and production network grows with every project,
              bringing together the right talent for every story.
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDER'S NOTE */}
      <section className="custom-team-founder-note">
        <div className="container">
          <div className="custom-team-note-inner">
            <div className="custom-team-note-label">
              <span className="custom-team-eyebrow">
                A MESSAGE FROM OUR FOUNDER
              </span>

              <Quote size={42} strokeWidth={1.2} />
            </div>

            <div className="custom-team-note-content">
              <h2>
                A belief in stories
                <span> that bring us together.</span>
              </h2>

              <blockquote>
                “Cinema has the power to comfort, to inspire and to bring
                families together. At SHGR Entertainment, our aim is to
                create films and series that carry meaning and are made
                with honesty and care. We are building this company step
                by step, with a commitment to quality in every frame and
                respect for every story we tell. We invite writers,
                creators and partners who share this belief to walk
                with us.”
              </blockquote>

              <div className="custom-team-note-author">
                <span />
                <div>
                  <strong>Shashi Kulshreshtha</strong>
                  <small>Founder / Director*</small>
                </div>
              </div>

              <p className="custom-team-note-disclaimer">
                *Designation to be confirmed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="custom-team-closing">
        <div className="container">
          <span className="custom-team-eyebrow">
            BUILT THROUGH COLLABORATION
          </span>

          <h2>
            Every Story Begins
            <span> With People.</span>
          </h2>

          <a href="#contact" className="custom-team-closing-link">
            WORK WITH US
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

    </main>
  );
}
