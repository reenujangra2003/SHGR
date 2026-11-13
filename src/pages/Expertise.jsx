
import {
  ArrowUpRight,
  BookOpen,
  ShieldCheck,
  Heart,
  Clapperboard,
  Music2,
  Users,
  Film,
  Tv,
  Video,
  Play,
  Sparkles,
} from "lucide-react";

import "../css/Expertise.css";

const devotionalApproach = [
  {
    icon: BookOpen,
    title: "Research-led Scripts",
    description:
      "Stories are built from authentic sources, traditions and the guidance of subject experts.",
  },
  {
    icon: Users,
    title: "Cultural & Spiritual Consultation",
    description:
      "Sensitive subjects are reviewed with knowledgeable advisors before and during production.",
  },
  {
    icon: ShieldCheck,
    title: "Respectful Treatment",
    description:
      "Sacred figures, rituals and symbols are portrayed with dignity and understanding.",
  },
  {
    icon: Music2,
    title: "Cinematic Quality",
    description:
      "Music, locations, costume and design support the emotional and spiritual tone of the story.",
  },
  {
    icon: Heart,
    title: "Universal Appeal",
    description:
      "Stories are told so audiences of every age and background can connect with them.",
  },
];

const fictionGenres = [
  "Family & Relationship Dramas",
  "Social & Contemporary Stories",
  "Inspirational & Coming-of-Age Narratives",
  "Mystery, Thriller & Suspense",
  "Short Films & Anthology Formats",
];

const formats = [
  {
    number: "01",
    icon: Film,
    title: "Feature Films",
    description:
      "Theatrical and platform releases in devotional and fiction genres.",
  },
  {
    number: "02",
    icon: Tv,
    title: "Web Series",
    description:
      "Multi-episode series created for OTT and digital platforms.",
  },
  {
    number: "03",
    icon: Play,
    title: "Limited Series",
    description:
      "Story-driven series with a defined, compact run.",
  },
  {
    number: "04",
    icon: Video,
    title: "Short Films",
    description:
      "Festival-ready and platform-ready short stories.",
  },
  {
    number: "05",
    icon: Sparkles,
    title: "Devotional Shorts",
    description:
      "Spiritual and heritage content for digital audiences.",
  },
  {
    number: "06",
    icon: Clapperboard,
    title: "Documentary-style Content",
    description:
      "Informative and heritage-based storytelling.",
  },
];

export default function Expertise() {
  return (
    <main className="custom-expertise">

      {/* HERO */}
      <section className="custom-expertise-hero">
        <div className="container">
          <div className="custom-expertise-hero-content">
            <span className="custom-expertise-eyebrow">
              OUR CREATIVE EXPERTISE
            </span>

            <h1>
              Stories with
              <span> Purpose & Perspective.</span>
            </h1>

            <p>
              From devotional cinema rooted in India's cultural heritage
              to fiction driven by human emotions, we explore stories
              that deserve to be experienced on screen.
            </p>

            <a href="#expertise-domains" className="custom-expertise-link">
              EXPLORE OUR EXPERTISE
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="custom-expertise-hero-bottom">
            <span>DEVOTIONAL CINEMA</span>
            <span className="custom-expertise-dot" />
            <span>FICTION STORYTELLING</span>
            <span className="custom-expertise-dot" />
            <span>FILM & DIGITAL CONTENT</span>
          </div>
        </div>
      </section>

      {/* DEVOTIONAL CINEMA */}
      <section
        className="custom-expertise-devotional"
        id="expertise-domains"
      >
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-5">
              <div className="custom-expertise-image-wrap">
                <img
                  src={`${process.env.PUBLIC_URL}/images/p3.webp`}
                  alt="Cinematic visual representing devotional storytelling"
                />
                <div className="custom-expertise-image-label">
                  <span>01 / OUR STORYTELLING</span>
                  <strong>Devotional Cinema</strong>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="custom-expertise-content">
                <span className="custom-expertise-eyebrow">
                  FAITH • CULTURE • HERITAGE
                </span>

                <h2>
                  Devotional Cinema:
                  <span> Our Approach</span>
                </h2>

                <p className="custom-expertise-lead">
                  Devotional storytelling demands more than good visuals.
                  It demands accuracy, sensitivity and trust.
                </p>

                <div className="custom-expertise-approach">
                  {devotionalApproach.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        className="custom-expertise-approach-item"
                        key={item.title}
                      >
                        <div className="custom-expertise-approach-icon">
                          <Icon size={19} />
                        </div>

                        <div>
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                        </div>

                        <span className="custom-expertise-item-number">
                          0{index + 1}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="custom-expertise-themes">
                  <span>THEMES WE EXPLORE</span>
                  <p>
                    Lives of saints and spiritual masters, devotional
                    legends, pilgrimage and sacred places, faith and human
                    transformation, and values-based family stories.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FICTION STORYTELLING */}
      <section className="custom-expertise-fiction">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-6 order-lg-1 order-2">
              <div className="custom-expertise-fiction-content">
                <span className="custom-expertise-eyebrow">
                  HUMAN STORIES • REAL EMOTIONS
                </span>

                <h2>
                  Fiction Storytelling:
                  <span> Our Approach</span>
                </h2>

                <p className="custom-expertise-lead">
                  Our fiction slate focuses on stories with emotional
                  truth and strong characters.
                </p>

                <div className="custom-expertise-genre-list">
                  {fictionGenres.map((genre, index) => (
                    <div className="custom-expertise-genre" key={genre}>
                      <span>0{index + 1}</span>
                      <h3>{genre}</h3>
                      <ArrowUpRight size={18} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-6 order-lg-2 order-1">
              <div className="custom-expertise-fiction-image">
                <img
                  src={`${process.env.PUBLIC_URL}/images/p2.avif`}
                  alt="Cinematic fiction storytelling"
                />
                <div className="custom-expertise-fiction-caption">
                  <span>02 / OUR STORYTELLING</span>
                  <strong>Fiction & Drama</strong>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section className="custom-expertise-formats">
        <div className="container">
          <div className="custom-expertise-formats-heading">
            <div>
              <span className="custom-expertise-eyebrow">
                FROM STORIES TO SCREENS
              </span>
              <h2>
                Formats <span>We Create.</span>
              </h2>
            </div>

            <p>
              Different stories deserve different formats. We explore
              multiple forms of film and digital storytelling.
            </p>
          </div>

          <div className="row g-0 custom-expertise-format-grid">
            {formats.map((item) => {
              const Icon = item.icon;

              return (
                <div className="col-lg-4 col-md-6" key={item.number}>
                  <div className="custom-expertise-format-card">
                    <div className="custom-expertise-format-top">
                      <span>{item.number}</span>
                      <Icon size={25} />
                    </div>

                    <h3>{item.title}</h3>
                    <p>{item.description}</p>

                    <div className="custom-expertise-format-line" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}
