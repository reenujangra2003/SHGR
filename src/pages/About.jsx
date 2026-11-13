
import {
  Heart,
  ShieldCheck,
  Clapperboard,
  Handshake,
  Scale,
} from "lucide-react";

import "../css/About.css";

const coreValues = [
  {
    number: "01",
    title: "Reverence",
    description:
      "We handle faith, tradition and sacred subjects with care and research.",
    icon: Heart,
  },
  {
    number: "02",
    title: "Integrity",
    description:
      "We keep our word on budgets, timelines and creative commitments.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Craft",
    description:
      "We invest in strong writing, skilled technicians and finished quality.",
    icon: Clapperboard,
  },
  {
    number: "04",
    title: "Collaboration",
    description:
      "We treat writers, directors, artists, crew and partners as co-creators.",
    icon: Handshake,
  },
  {
    number: "05",
    title: "Responsibility",
    description:
      "We aim to make content that families can watch together.",
    icon: Scale,
  },
];

export default function About() {
  return (
    <main className="shgr-aboutmain ">

      {/* About Hero */}
      <section className="shgr-aboutmain-hero">
        <div className="container">
          <div className="shgr-aboutmain-hero-content">
            <span className="shgr-aboutmain-eyebrow">
              ABOUT SHGR ENTERTAINMENT
            </span>

            <h1>
              Stories with purpose.<em>Made with conviction.</em>
            </h1>

            <p>
              Every story has a voice. We believe in bringing meaningful
              stories to the screen with sincerity, creativity and craft.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="shgr-aboutmain-story">
        <div className="container">
          <div className="shgr-aboutmain-story-grid">

            <div className="shgr-aboutmain-story-heading">
              <span className="shgr-aboutmain-section-label">
                01 / OUR STORY
              </span>

              <h2>
                Every culture carries stories
                <em> worth telling well.</em>
              </h2>

              <span className="shgr-aboutmain-heading-line"></span>
            </div>

            <div className="shgr-aboutmain-story-content">
              <p className="shgr-aboutmain-story-lead">
                Every culture carries stories that deserve to be told well.
                India’s spiritual traditions, saints, folk legends and
                everyday human dramas are among the richest sources of
                cinema in the world.
              </p>

              <p>
                SHGR Entertainment was founded to bring these stories to
                the screen with sincerity and craft. We are a new-generation
                production house built on a clear belief: a film should
                respect its subject, its audience and the people who make it.
              </p>

              <p>
                We are at the start of our journey, and we approach every
                project with the focus, discipline and humility of a team
                that intends to earn its reputation one film at a time.
              </p>

              <div className="shgr-aboutmain-story-signature">
                <span></span>
                <strong>SHGR ENTERTAINMENT</strong>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="shgr-aboutmain-values">
        <div className="container">

          <div className="shgr-aboutmain-values-heading">
            <div>
              <span className="shgr-aboutmain-section-label">
                02 / WHAT GUIDES US
              </span>

              <h2>
                Our Core <em>Values.</em>
              </h2>
            </div>

            <p>
              The principles that shape our creative decisions,
              our relationships and the way we bring stories to life.
            </p>
          </div>

          <div className="shgr-aboutmain-values-list">
            {coreValues.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  className="shgr-aboutmain-value-item"
                  key={value.number}
                >
                  <span className="shgr-aboutmain-value-number">
                    {value.number}
                  </span>

                  <div className="shgr-aboutmain-value-icon">
                    <Icon size={23} strokeWidth={1.5} />
                  </div>

                  <h3>{value.title}</h3>

                  <p>{value.description}</p>
                </article>
              );
            })}
          </div>

        </div>
      </section>

    </main>
  );
}
