
import {
  ArrowRight,
  ArrowUpRight,
  Film,
  ArrowDown,
} from "lucide-react";
import { Link } from "react-router-dom";

import "../../css/Hero.css"

export default function Hero() {
  return (
    <section className="custom-hero py-5" id="home">

      {/* Decorative Background */}
      <div className="custom-hero-decoration"></div>
      <div className="custom-hero-glow"></div>

      <div className="container">

        {/* Hero Content */}
        <div className="custom-hero-container">

          {/* Left Content */}
          <div className="custom-hero-content">

            <div className="custom-hero-eyebrow">
              <span className="custom-hero-eyebrow-line"></span>
              <span>SHGR ENTERTAINMENT</span>
            </div>

            <h1>
              Stories That
              <span className="custom-hero-highlight"> Inspire.</span>
              <br />
              Cinema That
              <span className="custom-hero-highlight"> Endures.</span>
            </h1>

            <p className="custom-hero-description">
              SHGR Entertainment is a film and web series production
              house creating devotional and fiction content rooted
              in culture, emotion and craft.
            </p>

            <div className="custom-hero-buttons">
              <Link to='/our-services' className="custom-hero-primary-btn">
                Explore Our Services
                <ArrowRight size={17} strokeWidth={2} />
              </Link>

              <Link to="/partner-form" className="custom-hero-secondary-btn">
                Partner With Us
                <ArrowUpRight size={17} strokeWidth={2} />
              </Link>
            </div>

            {/* Genre Labels */}
            <div className="custom-hero-genres">
              <span>DEVOTIONAL CINEMA</span>
              <span className="custom-hero-dot"></span>
              <span>FICTION STORYTELLING</span>
              <span className="custom-hero-dot"></span>
              <span>WEB SERIES</span>
            </div>

          </div>

          {/* Right Visual */}
          <div className="custom-hero-visual">

            <div className="custom-hero-image-frame">
              <div className="custom-hero-image">
                <img
                  src={`${process.env.PUBLIC_URL}/images/hero.webp`}
                  alt="Indian heritage architecture representing cinematic storytelling"
                />
              </div>

              <div className="custom-hero-image-border"></div>
              <div className="custom-hero-image-corner"></div>
            </div>

            {/* Floating Heritage Label */}
            <div className="custom-hero-floating-card">
              <div className="custom-hero-card-icon">
                <Film size={23} strokeWidth={1.8} />
              </div>

              <div>
                <span>OUR CREATIVE VISION</span>
                <h4>Stories With Meaning</h4>
              </div>
            </div>

            <div className="custom-hero-vertical-text">
              CULTURE · EMOTION · CRAFT
            </div>

          </div>

        </div>

        {/* Bottom Decorative Strip */}
        <div className="custom-hero-bottom">
          <span>THE ART OF MEANINGFUL STORYTELLING</span>

          <div className="custom-hero-bottom-line"></div>

          <a href="#about">
            DISCOVER OUR STORY
            <ArrowDown size={15} strokeWidth={2} />
          </a>
        </div>

      </div>

    </section>
  );
}
