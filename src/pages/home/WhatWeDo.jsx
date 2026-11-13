
import {
  Clapperboard,
  MonitorPlay,
  Sparkles,
  Drama,
  PenTool,
  Film,
  ArrowUpRight,
} from "lucide-react";


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
    <section className="custom-services py-5" id="services">

      <div className="container">

        {/* Section Heading */}
         <div className="custom-projects-heading">
          <span className="custom-projects-eyebrow">
            <span></span>
        WHAT WE DO
            <span></span>
          </span>

          <h2>
              Bringing Stories <span>To Life.</span>
          </h2>
        </div>
      

        {/* Services Grid */}
        <div className="row g-4">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div className="col-lg-4 col-md-6" key={service.number}>

                <div className="custom-service-card">

                  {/* Card Header */}
                  <div className="custom-service-card-top">

                    <div className="custom-service-icon">
                      <Icon size={25} strokeWidth={1.7} />
                    </div>

                    <span className="custom-service-number">
                      {service.number}
                    </span>

                  </div>

                  {/* Card Content */}
                  <div className="custom-service-card-content">

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                  </div>

                  

                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom Statement */}
        <div className="custom-services-bottom">

          <span>FROM CONCEPT TO FINAL DELIVERY</span>

          <div className="custom-services-bottom-line"></div>

          <a href="#collaborate">
            LET'S COLLABORATE
            <ArrowUpRight size={16} />
          </a>

        </div>

      </div>

    </section>
  );
}
