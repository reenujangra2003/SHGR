
import { ArrowUpRight } from "lucide-react";

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
    <section className="custom-process-section py-5" id="process">
      <div className="container">
        <div className="custom-process-heading">
          <span className="custom-process-eyebrow">
            <span></span>
            HOW WE WORK
            <span></span>
          </span>

          <h2>
            From First Thought <span>To Final Frame.</span>
          </h2>

          <p>
            Every meaningful production follows a thoughtful process.
            We bring creative vision and professional execution together
            at every stage.
          </p>
        </div>

        <div className="custom-process-timeline">
          <div className="custom-process-track"></div>

          <div className="row g-4">
            {processSteps.map((step) => (
              <div
                className="col-lg custom-process-column"
                key={step.number}
              >
                <article className="custom-process-step">
                  <div className="custom-process-step-top">
                    <span className="custom-process-number">
                      {step.number}
                    </span>

                    <span className="custom-process-stage">
                      {step.detail}
                    </span>
                  </div>

                  <div className="custom-process-step-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>

                  <div className="custom-process-step-bottom">
                    <span>SHGR ENTERTAINMENT</span>
                    <ArrowUpRight size={17} />
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="custom-process-footer">
          <div className="custom-process-footer-line"></div>

          <p>
            <span>ONE PROCESS.</span> FIVE STAGES.{" "}
            <strong>ONE CREATIVE VISION.</strong>
          </p>

          <div className="custom-process-footer-line"></div>
        </div>
      </div>
    </section>
  );
}



// import {
//   ArrowUpRight,
// } from "lucide-react";

// const processSteps = [
//   {
//     number: "01",
//     title: "Concept & Script Development",
//     description: "We shape the idea, story and screenplay.",
//     detail: "IDEA TO SCREENPLAY",

//   },
//   {
//     number: "02",
//     title: "Planning & Pre-Production",
//     description:
//       "Budgeting, casting, locations, crew and scheduling.",
//     detail: "PREPARATION & PLANNING",

//   },
//   {
//     number: "03",
//     title: "Production",
//     description:
//       "Disciplined shoot management with quality control on set.",
//     detail: "BRINGING STORIES TO LIFE",

//   },
//   {
//     number: "04",
//     title: "Post-Production",
//     description:
//       "Editing, music, sound design, colour grading and finishing.",
//     detail: "CRAFTING THE FINAL CUT",
//   },
//   {
//     number: "05",
//     title: "Delivery & Distribution",
//     description:
//       "Platform-ready delivery and release support.",
//     detail: "READY FOR THE AUDIENCE",
//   },
// ];

// export default function OurProcess() {
//   return (
//     <section className="custom-process-section py-5" id="process">
//       <div className="container">
//         <div className="custom-process-heading">
//           <span className="custom-process-eyebrow">
//             <span></span>
//             HOW WE WORK
//             <span></span>
//           </span>

//           <h2>
//             From First Thought <span>To Final Frame.</span>
//           </h2>

//           <p>
//             Every meaningful production follows a thoughtful process.
//             We bring creative vision and professional execution together
//             at every stage.
//           </p>
//         </div>

//         <div className="custom-process-timeline">
//           <div className="custom-process-track"></div>

//           <div className="row g-4">
//             {processSteps.map((step) => {
//               const Icon = step.icon;

//               return (
//                 <div className="col-lg custom-process-column" key={step.number}>
//                   <article className="custom-process-step">
//                     <div className="custom-process-step-top">
//                       <span className="custom-process-number">
//                         {step.number}
//                       </span>
//                       <span className="custom-process-stage">
//                         {step.detail}
//                       </span>
//                     </div>

//                     <div className="custom-process-step-content">
//                       <h3>{step.title}</h3>
//                       <p>{step.description}</p>
//                     </div>

//                     <div className="custom-process-step-bottom">
//                       <span>SHGR ENTERTAINMENT</span>
//                       <ArrowUpRight size={17} />
//                     </div>
//                   </article>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         <div className="custom-process-footer">
//           <div className="custom-process-footer-line"></div>
//           <p>
//             <span>ONE PROCESS.</span> FIVE STAGES. <strong>ONE CREATIVE VISION.</strong>
//           </p>
//           <div className="custom-process-footer-line"></div>
//         </div>
//       </div>
//     </section>
//   );
// }
