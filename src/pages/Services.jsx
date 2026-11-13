
import {
  ArrowRight,
  ArrowUpRight,
  Lightbulb,
  FileText,
  ClipboardList,
  Clapperboard,
  Scissors,
  Send,
  Search,
  Film,
  Users,
  CalendarDays,
  Camera,
  MonitorPlay,
} from "lucide-react";

import "../css/Services.css";

const services = [
  {
    number: "01",
    title: "Development",
    subtitle: "Where every story begins.",
    description:
      "We shape ideas into well-developed stories and build a strong creative foundation for every project.",
    icon: Lightbulb,
    items: [
      "Idea and concept development",
      "Script, screenplay and dialogue development",
      "Story bible and series outline",
      "Research and subject consultation",
      "Project packaging for partners and platforms",
    ],
  },
  {
    number: "02",
    title: "Pre-Production",
    subtitle: "Planning every detail.",
    description:
      "We bring together the people, resources and planning required to move a creative vision towards production.",
    icon: ClipboardList,
    items: [
      "Budgeting and financial planning",
      "Scheduling and production planning",
      "Casting and talent coordination",
      "Location scouting and permissions",
      "Crew hiring and equipment planning",
    ],
  },
  {
    number: "03",
    title: "Production",
    subtitle: "Bringing the vision to life.",
    description:
      "We coordinate the on-ground execution of each project with structured workflows and attention to detail.",
    icon: Clapperboard,
    items: [
      "Line production and set management",
      "Production coordination and logistics",
      "Daily reporting and cost control",
      "Safety and compliance on set",
    ],
  },
  {
    number: "04",
    title: "Post-Production",
    subtitle: "Crafting the final experience.",
    description:
      "We refine every frame, sound and visual element to bring the story together into its final form.",
    icon: Scissors,
    items: [
      "Editing and assembly",
      "Music, background score and sound design",
      "Visual effects and colour grading",
      "Subtitling and quality control",
    ],
  },
  {
    number: "05",
    title: "Delivery & Release Support",
    subtitle: "Preparing stories for audiences.",
    description:
      "We support the final preparation of content for platforms, broadcasters, festivals and distribution channels.",
    icon: Send,
    items: [
      "Platform-ready and broadcast-ready deliverables",
      "Trailers, teasers and promotional content",
      "Festival and distribution coordination",
    ],
  },
];



export default function Services() {
  return (
    <main className="custom-services-page">

      {/* HERO */}
      <section className="custom-services-hero">
        <div className="container">
          <div className="custom-services-hero-content">
            <span className="custom-services-eyebrow">
              WHAT WE BRING TO THE SCREEN
            </span>

            <h1>
              From the First Idea
              <span> to the Final Frame.</span>
            </h1>

            <p>
              Every production takes a story through multiple stages.
              We bring creative development, planning and production
              execution together to shape stories for the screen.
            </p>

            <a href="#services-detail" className="custom-services-hero-link">
              EXPLORE OUR SERVICES
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="custom-services-hero-footer">
            <span>DEVELOPMENT</span>
            <span className="custom-services-hero-dot" />
            <span>PRODUCTION</span>
            <span className="custom-services-hero-dot" />
            <span>POST-PRODUCTION</span>
            <span className="custom-services-hero-dot" />
            <span>RELEASE</span>
          </div>
        </div>
      </section>

      {/* SERVICES IN DETAIL */}
      <section
        className="custom-services-detail"
        id="services-detail"
      >
        <div className="container">
          <div className="custom-services-section-heading">
            <div>
              <span className="custom-services-eyebrow">
                SERVICES IN DETAIL
              </span>
              <h2>
                Every Stage.
                <span> Thoughtfully Managed.</span>
              </h2>
            </div>

            <p>
              From developing the initial concept to preparing the final
              deliverables, each stage contributes to a well-executed
              production.
            </p>
          </div>

          <div className="custom-services-list">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  className="custom-services-item"
                  key={service.number}
                >
                  <div className="custom-services-item-number">
                    {service.number}
                  </div>

                  <div className="custom-services-item-main">
                    <div className="custom-services-item-heading">
                      <span>{service.subtitle}</span>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </div>

                  <div className="custom-services-item-details">
                    <div className="custom-services-item-icon">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>

                    <ul>
                      {service.items.map((item) => (
                        <li key={item}>
                          <span className="custom-services-check" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="custom-services-item-watermark">
                    {service.number}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}
