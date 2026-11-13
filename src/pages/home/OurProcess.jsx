
import { ArrowUpRight } from "lucide-react";

import "../../css/OurProcess.css";

const processSteps = [
  {
    number: "01",
    title: "Concept & Script Development",
    description: "We shape the idea, story and screenplay.",
    detail: "IDEA TO SCREENPLAY",
  },
  {
    number: "02",
    title: "Planning & Pre-Production",
    description:
      "Budgeting, casting, locations, crew and scheduling.",
    detail: "PREPARATION & PLANNING",
  },
  {
    number: "03",
    title: "Production",
    description:
      "Disciplined shoot management with quality control on set.",
    detail: "BRINGING STORIES TO LIFE",
  },
  {
    number: "04",
    title: "Post-Production",
    description:
      "Editing, music, sound design, colour grading and finishing.",
    detail: "CRAFTING THE FINAL CUT",
  },
  {
    number: "05",
    title: "Delivery & Distribution",
    description:
      "Platform-ready delivery and release support.",
    detail: "READY FOR THE AUDIENCE",
  },
];

export default function OurProcess() {
  return (
    <section className="custom-process-section" id="process">
      <div className="container">

        {/* Section Heading */}
        <div className="custom-process-heading">
          <div className="custom-process-heading-main">
            <span className="custom-process-eyebrow">
              <i></i>
              HOW WE WORK
            </span>

            <h2>
              From First Thought
              <br />
              <em>To Final Frame.</em>
            </h2>
          </div>

          <p>
            Every meaningful production follows a thoughtful process.
            We bring creative vision and professional execution together
            at every stage.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="custom-process-timeline">
          <div className="custom-process-progress">
            <span></span>
          </div>

          <div className="custom-process-steps">
            {processSteps.map((step) => (
              <article
                className="custom-process-step"
                key={step.number}
              >
                <div className="custom-process-step-marker">
                  <span>{step.number}</span>
                </div>

                <div className="custom-process-step-content">
                  <span className="custom-process-stage">
                    {step.detail}
                  </span>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="custom-process-footer">
          <span>SHGR PRODUCTION APPROACH</span>

          <div className="custom-process-footer-line"></div>

          <p>
            <strong>ONE PROCESS.</strong> FIVE STAGES.
            <em> ONE CREATIVE VISION.</em>
          </p>

          <a
            href="#collaborate"
            aria-label="Collaborate with SHGR Entertainment"
          >
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}
