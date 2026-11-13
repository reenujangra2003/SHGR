
import {
  Flower2,
  Clapperboard,
  Layers3,
  Handshake,
  ArrowUpRight,
} from "lucide-react";

import "../../css/VisionMission.css";

const missionPoints = [
  {
    icon: Flower2,
    title: "Honour Our Roots",
    description:
      "Celebrate faith, culture and timeless values with sensitivity and respect.",
  },
  {
    icon: Clapperboard,
    title: "Create Impactful Content",
    description:
      "Develop original, engaging and well-crafted fiction and devotional cinema.",
  },
  {
    icon: Layers3,
    title: "Work with Excellence",
    description:
      "Maintain high production standards, transparency and timely delivery.",
  },
  {
    icon: Handshake,
    title: "Grow Together",
    description:
      "Build lasting partnerships with creators, platforms, broadcasters and investors.",
  },
];

export default function VisionMission() {
  return (
    <section className="custom-vision-mission" id="vision-mission">
      <div className="container">

        {/* Section Heading */}
        <div className="custom-vm-heading">
          <span className="custom-vm-eyebrow">
            <i></i>
            OUR PURPOSE &amp; DIRECTION
            <i></i>
          </span>

          <h2>
            What We <em>Believe In.</em>
          </h2>
        </div>

        {/* Vision and Mission Layout */}
        <div className="custom-vm-layout">

          {/* Vision Panel */}
          <div className="custom-vm-vision-panel">
            <div className="custom-vm-vision-image">
              <img
                src={`${process.env.PUBLIC_URL}/images/about.webp`}
                alt="Film crew working on a cinematic production set"
              />
            </div>

            <div className="custom-vm-vision-overlay">
              <div className="custom-vm-vision-label">
                <span>OUR VISION</span>
                <i></i>
              </div>

              <h3>
                Creating Stories That
                <em> Connect Generations.</em>
              </h3>

              <p>
                To be a trusted name in Indian entertainment, known
                for authentic devotional storytelling and high-quality
                fiction that connects with audiences across generations.
              </p>

              <div className="custom-vm-vision-bottom">
                <span>SHGR ENTERTAINMENT</span>
                <ArrowUpRight size={20} />
              </div>
            </div>
          </div>

          {/* Mission Panel */}
          <div className="custom-vm-mission-panel">
            <div className="custom-vm-mission-heading">
              <div className="custom-vm-mission-label">
                <span>OUR MISSION</span>
                <i></i>
              </div>

              <h3>
                Purpose Behind
                <em> Every Frame.</em>
              </h3>
            </div>

            <div className="custom-vm-mission-list">
              {missionPoints.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div className="custom-vm-mission-item" key={item.title}>
                    <div className="custom-vm-mission-icon">
                      <Icon size={27} strokeWidth={1.6} />
                    </div>

                    <div className="custom-vm-mission-divider"></div>

                    <div className="custom-vm-mission-copy">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="custom-vm-mission-footer">
              <span>OUR COMMITMENT TO EVERY STORY</span>
              <div></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
