
import {
  Eye,
  Target,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";


const missionPoints = [
  "Honour faith, culture and values with sensitivity and respect.",
  "Develop original, engaging and well-crafted fiction.",
  "Maintain professional standards, transparency and timely delivery.",
  "Build lasting partnerships with creators, platforms, broadcasters and investors.",
];

export default function VisionMission() {
  return (
    <section className="custom-vision-mission py-5">
      <div className="container">

        {/* Section Heading */}
         <div className="custom-projects-heading">
          <span className="custom-projects-eyebrow">
            <span></span>
           OUR PURPOSE & DIRECTION
            <span></span>
          </span>

          <h2>
            What We <span>Believe In.</span>
          </h2>
        </div>
       

        {/* Vision Mission Cards */}
        <div className="row g-4">

          {/* Vision Card */}
          <div className="col-lg-6">
            <div className="custom-vm-card custom-vm-vision">

              <div className="custom-vm-card-top">
                <div className="custom-vm-icon">
                  <Eye size={27} strokeWidth={1.6} />
                </div>

                <span className="custom-vm-number">01</span>
              </div>

              <div className="custom-vm-card-content">
                <span className="custom-vm-label">OUR VISION</span>

                <h3>
                  Creating Stories That
                  <em> Connect Generations.</em>
                </h3>

                <p>
                  To be a trusted name in Indian entertainment,
                  known for authentic devotional storytelling and
                  high-quality fiction that connects with audiences
                  across generations.
                </p>
              </div>

              <div className="custom-vm-card-footer">
                <div className="custom-vm-line"></div>
                <ArrowUpRight size={21} />
              </div>

              <div className="custom-vm-watermark">
                <Eye size={150} />
              </div>

            </div>
          </div>

          {/* Mission Card */}
          <div className="col-lg-6">
            <div className="custom-vm-card custom-vm-mission">

              <div className="custom-vm-card-top">
                <div className="custom-vm-icon">
                  <Target size={27} strokeWidth={1.6} />
                </div>

                <span className="custom-vm-number">02</span>
              </div>

              <div className="custom-vm-card-content">
                <span className="custom-vm-label">OUR MISSION</span>

                <h3>
                  Purpose Behind
                  <em> Every Frame.</em>
                </h3>

                <ul>
                  {missionPoints.map((point, index) => (
                    <li key={index}>
                      <Sparkles size={15} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="custom-vm-card-footer">
                <div className="custom-vm-line"></div>
                <ArrowUpRight size={21} />
              </div>

              <div className="custom-vm-watermark">
                <Target size={150} />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
