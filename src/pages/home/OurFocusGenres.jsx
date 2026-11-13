
import { ArrowUpRight, Play, Sparkles, Clapperboard } from "lucide-react";

const genres = [
  {
    number: "01",
    title: "Devotional Films",
    subtitle: "FAITH • CULTURE • SPIRITUALITY",
    description:
      "Spiritual stories carry a timeless place in Indian culture. We develop devotional films that present faith, devotion and wisdom with depth, cultural accuracy and cinematic quality, so they resonate with families and audiences of all ages.",
    image: `${process.env.PUBLIC_URL}/images/genre1.webp`,
    icon: Sparkles,
    imageLabel: "STORIES ROOTED IN FAITH",
  },
  {
    number: "02",
    title: "Fiction Films & Series",
    subtitle: "EMOTION • CHARACTERS • STORYTELLING",
    description:
      "We create original fiction built on strong characters, emotional truth and well-structured storytelling, suited to theatrical, television and OTT audiences.",
    image: `${process.env.PUBLIC_URL}/images/genre2.webp`,
    icon: Clapperboard,
    imageLabel: "STORIES THAT CONNECT",
  },
];

export default function OurFocusGenres() {
  return (
    <section className="custom-genres-section" id="genres">
      <div className="container">
        <div className="custom-genres-heading">
          <span className="custom-genres-eyebrow">
            <span></span>
            OUR CREATIVE DIRECTION
            <span></span>
          </span>

          <h2>
            Our Focus <span>Genres</span>
          </h2>

          <p>
            Two creative worlds. One commitment to meaningful storytelling.
            Exploring stories that inspire, entertain and connect with audiences.
          </p>
        </div>

        <div className="row g-4 custom-genres-grid">
          {genres.map((genre) => {
            const Icon = genre.icon;

            return (
              <div className="col-lg-6" key={genre.number}>
                <article className="custom-genre-card">
                  <div className="custom-genre-image-wrap">
                    <img
                      src={genre.image}
                      alt={genre.title}
                      className="custom-genre-image"
                    />

                    <div className="custom-genre-image-overlay"></div>

                    <div className="custom-genre-image-top">
                      <span className="custom-genre-number">
                        {genre.number}
                      </span>
                      <span className="custom-genre-image-label">
                        {genre.imageLabel}
                      </span>
                    </div>

                    <div className="custom-genre-image-bottom">
                      <div className="custom-genre-icon">
                        <Icon size={23} strokeWidth={1.6} />
                      </div>
                      <span>{genre.subtitle}</span>
                    </div>
                  </div>

                  <div className="custom-genre-content">
                    <div className="custom-genre-content-top">
                      <div>
                        <span className="custom-genre-small-label">
                          OUR GENRE
                        </span>
                        <h3>{genre.title}</h3>
                      </div>

                      <div className="custom-genre-arrow">
                        <ArrowUpRight size={23} />
                      </div>
                    </div>

                    <p>{genre.description}</p>

                    <div className="custom-genre-footer">
                      <span>SHGR ENTERTAINMENT</span>
                      <span className="custom-genre-footer-line"></span>
                      <Play size={13} fill="currentColor" />
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
