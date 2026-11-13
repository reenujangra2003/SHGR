
import {
  Clapperboard,
  MonitorPlay,
  Sparkles,
  Drama,
  PenTool,
  Film,
  ArrowUpRight,
} from "lucide-react";

import "../../css/WhatWeDo.css";

const services = [
  {
    number: "01",
    icon: Clapperboard,
    title: "Film Production",
    description:
      "Feature films and short films, from script development to post-production, with a focus on devotional and fiction genres.",
  },
  {
    number: "02",
    icon: MonitorPlay,
    title: "Web Series & Episodic Content",
    description:
      "Original series designed for OTT platforms, television and digital audiences, with strong narratives and consistent production quality.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Devotional & Spiritual Content",
    description:
      "Films and series based on saints, sacred traditions, mythology and spiritual journeys, told with authenticity and reverence.",
  },
  {
    number: "04",
    icon: Drama,
    title: "Fiction & Drama",
    description:
      "Emotionally engaging stories across drama, family, social and contemporary themes.",
  },
  {
    number: "05",
    icon: PenTool,
    title: "Development & Pre-Production",
    description:
      "Concept development, script and screenplay support, budgeting, scheduling, casting and location planning.",
  },
  {
    number: "06",
    icon: Film,
    title: "Production & Post-Production Management",
    description:
      "End-to-end execution, including crew, equipment, shooting, editing, sound, colour and final delivery.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="custom-services" id="services">
      <div className="container">

        {/* Section Heading */}
        <div className="custom-services-heading">
          <div className="custom-services-heading-left">
            <span className="custom-services-eyebrow">
              <i></i>
              WHAT WE DO
            </span>

            <h2>
              Bringing Stories
              <br />
              <em>To Life.</em>
            </h2>
          </div>

          <p className="custom-services-intro">
            From the first idea to the final frame, we bring together
            creative thinking, production expertise and careful execution
            to create meaningful screen experiences.
          </p>
        </div>

        {/* Services List */}
        <div className="custom-services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="custom-service-item" key={service.number}>
                <div className="custom-service-item-top">
                  <span className="custom-service-number">
                    {service.number}
                  </span>

                  <Icon
                    className="custom-service-item-icon"
                    size={25}
                    strokeWidth={1.5}
                  />
                </div>

                <div className="custom-service-item-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <span className="custom-service-item-line"></span>
              </article>
            );
          })}
        </div>

       

      </div>
    </section>
  );
}
