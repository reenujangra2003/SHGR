
import { useState } from "react";
import {
  ArrowUpRight,
  Handshake,
  MonitorPlay,
  Film,
  Building2,
  Landmark,
  Users,
  Upload,
  Send,
  CheckCircle2,
} from "lucide-react";

import "../css/Partner.css";

const partnerTypes = [
  {
    icon: Handshake,
    number: "01",
    title: "Co-producers & Financiers",
    description:
      "Participate in well-planned devotional and fiction projects.",
  },
  {
    icon: MonitorPlay,
    number: "02",
    title: "OTT Platforms & Broadcasters",
    description:
      "Collaborate on original and commissioned content.",
  },
  {
    icon: Film,
    number: "03",
    title: "Distributors",
    description:
      "Bring our films to wider audiences.",
  },
  {
    icon: Landmark,
    number: "04",
    title: "Temples, Trusts & Cultural Institutions",
    description:
      "Develop content rooted in heritage and tradition.",
  },
  {
    icon: Building2,
    number: "05",
    title: "Government & Institutional Bodies",
    description:
      "Create films for cultural and public-interest programmes.",
  },
  {
    icon: Users,
    number: "06",
    title: "Creators & Talent",
    description:
      "Join our network of writers, directors, actors and technicians.",
  },
];

const careerRoles = [
  "Writer",
  "Assistant Director",
  "Editor",
  "Cinematographer",
  "Production Manager",
  "Designer",
  "Intern",
  "Other",
];

export default function PartnerForm() {
  const [formType, setFormType] = useState("Partnership Enquiry");
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleFormTypeChange = (event) => {
    setFormType(event.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    // Connect your backend/API or email service here.
    // formData contains the submitted fields and uploaded file.
    console.log("Partner enquiry:", Object.fromEntries(formData.entries()));

    setSubmitted(true);
    event.currentTarget.reset();
    setFileName("");
  };

  return (
    <main className="custom-partner-page">

      {/* HERO */}
      <section className="custom-partner-hero">
        <div className="container">
          <div className="custom-partner-hero-content">
            <span className="custom-partner-eyebrow">
              PARTNERSHIPS & COLLABORATIONS
            </span>

            <h1>
              Great Stories
              <span> Begin With Great Partnerships.</span>
            </h1>

            <p>
              We believe meaningful cinema is built through shared vision,
              creative collaboration and the right partnerships. Let's
              explore what we can create together.
            </p>

            <a href="#partner-opportunities" className="custom-partner-hero-link">
              EXPLORE OPPORTUNITIES
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="custom-partner-hero-footer">
            <span>CREATIVE PARTNERSHIPS</span>
            <span className="custom-partner-dot" />
            <span>PRODUCTION COLLABORATIONS</span>
            <span className="custom-partner-dot" />
            <span>CAREER OPPORTUNITIES</span>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP OPPORTUNITIES */}
      <section
        className="custom-partner-opportunities"
        id="partner-opportunities"
      >
        <div className="container">
          <div className="custom-partner-section-heading">
            <div>
              <span className="custom-partner-eyebrow">
                LET'S WORK TOGETHER
              </span>

              <h2>
                Who We Welcome
                <span> As Partners.</span>
              </h2>
            </div>

            <p>
              We are open to collaborations with individuals and
              organisations who share our interest in meaningful
              storytelling and quality content.
            </p>
          </div>

          <div className="row g-0 custom-partner-grid">
            {partnerTypes.map((partner) => {
              const Icon = partner.icon;

              return (
                <div className="col-lg-4 col-md-6" key={partner.number}>
                  <article className="custom-partner-card">
                    <div className="custom-partner-card-top">
                      <span>{partner.number}</span>
                      <Icon size={27} strokeWidth={1.5} />
                    </div>

                    <h3>{partner.title}</h3>
                    <p>{partner.description}</p>

                    <a
                      href="#partner-enquiry"
                      className="custom-partner-card-link"
                      onClick={() => setFormType("Partnership Enquiry")}
                      aria-label={`Enquire about ${partner.title}`}
                    >
                      DISCUSS A PARTNERSHIP
                      <ArrowUpRight size={16} />
                    </a>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section className="custom-partner-form-section" id="partner-enquiry">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <div className="custom-partner-form-intro">
                <span className="custom-partner-eyebrow">
                  START A CONVERSATION
                </span>

                <h2>
                  Let's Create
                  <span> Something Meaningful.</span>
                </h2>

                <p>
                  Tell us a little about yourself, your organisation or
                  your creative interests. Our team can take the
                  conversation forward.
                </p>

                <div className="custom-partner-form-contact">
                  <span>CAREERS & GENERAL ENQUIRIES</span>
                  <strong>Email address to be added</strong>
                  <small>
                    Please replace this placeholder with the official
                    SHGR Entertainment email.
                  </small>
                </div>

                <div className="custom-partner-form-quote">
                  <span>SHGR ENTERTAINMENT</span>
                  <p>
                    Stories That Inspire.
                    <br />
                    Cinema That Endures.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <form
                className="custom-partner-form"
                id="custom-partner-enquiry-form"
                onSubmit={handleSubmit}
              >
                <div className="custom-partner-form-heading">
                  <div>
                    <span>ENQUIRY FORM</span>
                    <h3>Tell Us About Your Interest</h3>
                  </div>

                  <Send size={24} />
                </div>

                <div className="custom-partner-form-type">
                  <label htmlFor="custom-partner-form-type">
                    I AM INTERESTED IN
                  </label>

                  <select
                    id="custom-partner-form-type"
                    name="enquiryType"
                    value={formType}
                    onChange={handleFormTypeChange}
                  >
                    <option>Partnership Enquiry</option>
                    <option>Career Application</option>
                  </select>
                </div>

                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="custom-partner-field">
                      <label htmlFor="partner-name">FULL NAME *</label>
                      <input
                        type="text"
                        id="partner-name"
                        name="name"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="custom-partner-field">
                      <label htmlFor="partner-email">EMAIL ADDRESS *</label>
                      <input
                        type="email"
                        id="partner-email"
                        name="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="custom-partner-field">
                      <label htmlFor="partner-phone">PHONE NUMBER</label>
                      <input
                        type="tel"
                        id="partner-phone"
                        name="phone"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="custom-partner-field">
                      <label htmlFor="partner-organisation">
                        ORGANISATION / COMPANY
                      </label>
                      <input
                        type="text"
                        id="partner-organisation"
                        name="organisation"
                        placeholder="Company or organisation"
                      />
                    </div>
                  </div>

                  {formType === "Career Application" && (
                    <div className="col-12">
                      <div className="custom-partner-field">
                        <label htmlFor="partner-role">ROLE APPLIED FOR *</label>
                        <select
                          id="partner-role"
                          name="role"
                          required
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select your preferred role
                          </option>
                          {careerRoles.map((role) => (
                            <option value={role} key={role}>
                              {role}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}

                  <div className="col-12">
                    <div className="custom-partner-field">
                      <label htmlFor="partner-message">
                        {formType === "Career Application"
                          ? "INTRODUCE YOURSELF *"
                          : "TELL US ABOUT YOUR PROPOSAL *"}
                      </label>

                      <textarea
                        id="partner-message"
                        name="message"
                        rows="5"
                        placeholder={
                          formType === "Career Application"
                            ? "Share your experience, skills and interests..."
                            : "Tell us about your organisation, project or collaboration idea..."
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="custom-partner-upload">
                      <label htmlFor="partner-attachment">
                        <Upload size={19} />
                        <span>
                          <strong>
                            {formType === "Career Application"
                              ? "Upload CV / Portfolio"
                              : "Attach Portfolio / Proposal"}
                          </strong>
                          <small>PDF, DOC, DOCX or image files</small>
                        </span>
                      </label>

                      <input
                        type="file"
                        id="partner-attachment"
                        name="attachment"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        onChange={(event) =>
                          setFileName(event.target.files?.[0]?.name || "")
                        }
                      />

                      {fileName && (
                        <span className="custom-partner-file-name">
                          {fileName}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="custom-partner-submit"
                    >
                      SUBMIT YOUR ENQUIRY
                      <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>

                {submitted && (
                  <div className="custom-partner-success" role="status">
                    <CheckCircle2 size={19} />
                    <p>
                      Your form has been validated. Connect the form to
                      your backend or email service to receive submissions.
                    </p>
                  </div>
                )}

                <p className="custom-partner-form-note">
                  * Required fields. Please ensure your contact details
                  and uploaded documents are correct.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
