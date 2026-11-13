
import { useState } from "react";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  ChevronDown,
  Film,
  CheckCircle2,
} from "lucide-react";

import "../css/Contact.css";

const faqs = [
  {
    question: "What kind of content does SHGR Entertainment produce?",
    answer:
      "We produce devotional films, fiction films and web series, along with short-form and episodic content.",
  },
  {
    question: "Do you accept scripts from new writers?",
    answer:
      "Yes. Please follow the submission guidelines on this page.",
  },
  {
    question: "Do you work on commissioned or co-produced projects?",
    answer:
      "Yes. We are open to commissioned work, co-productions and partnerships.",
  },
  {
    question: "Where are you located?",
    answer:
      "We have offices in Noida (Uttar Pradesh) and Delhi.",
  },
  {
    question: "How can I contact the team?",
    answer:
      "Use the contact form on this page or call +91 98681 16252.",
  },
];

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    // Connect this data to your backend or email service.
    console.log("Contact enquiry:", Object.fromEntries(formData.entries()));

    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <main className="custom-contact-page">

      {/* HERO */}
      <section className="custom-contact-hero">
        <div className="container">
          <div className="custom-contact-hero-content">
            <span className="custom-contact-eyebrow">
              GET IN TOUCH WITH SHGR
            </span>

            <h1>
              Let's Start
              <span> a Conversation.</span>
            </h1>

            <p>
              Have a story, project idea or collaboration in mind?
              We'd love to hear from you. Connect with our team and
              let's explore the possibilities together.
            </p>

            <a href="#contact-form" className="custom-contact-hero-link">
              SEND AN ENQUIRY
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="custom-contact-hero-footer">
            <span>PROJECT ENQUIRIES</span>
            <span className="custom-contact-dot" />
            <span>PARTNERSHIPS</span>
            <span className="custom-contact-dot" />
            <span>GENERAL QUERIES</span>
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="custom-contact-information">
        <div className="container">
          <div className="custom-contact-section-heading">
            <span className="custom-contact-eyebrow">
              CONNECT WITH US
            </span>

            <h2>
              We'd Be Glad
              <span> to Hear From You.</span>
            </h2>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="custom-contact-info-card">
                <div className="custom-contact-info-icon">
                  <Phone size={23} />
                </div>

                <span>CALL OUR TEAM</span>
                <h3>Let's Talk</h3>

                <a href="tel:+919868116252">
                  +91 98681 16252
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="custom-contact-info-card">
                <div className="custom-contact-info-icon">
                  <Mail size={23} />
                </div>

                <span>EMAIL ENQUIRIES</span>
                <h3>Write to Us</h3>

                <p className="custom-contact-email-placeholder">
                  Official email to be added
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="custom-contact-info-card">
                <div className="custom-contact-info-icon">
                  <MessageCircle size={23} />
                </div>

                <span>START A DISCUSSION</span>
                <h3>Share Your Idea</h3>

                <a href="#contact-form">
                  Send an Enquiry
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE LOCATIONS */}
      <section className="custom-contact-offices">
        <div className="container">
          <div className="custom-contact-offices-heading">
            <div>
              <span className="custom-contact-eyebrow">
                FIND US
              </span>

              <h2>
                Our Office
                <span> Locations.</span>
              </h2>
            </div>

            <p>
              Connect with SHGR Entertainment at our offices in
              Noida and Delhi.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-6">
              <div className="custom-contact-office-card">
                <div className="custom-contact-office-top">
                  <span>01 / REGISTERED OFFICE</span>
                  <MapPin size={23} />
                </div>

                <h3>Noida</h3>

                <p>
                  545, Arun Vihar, Sector 37,
                  <br />
                  Noida, Gautam Budh Nagar,
                  <br />
                  Uttar Pradesh – 201301.
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=545+Arun+Vihar+Sector+37+Noida+201301"
                  target="_blank"
                  rel="noreferrer"
                  className="custom-contact-map-link"
                >
                  VIEW LOCATION
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="custom-contact-office-card">
                <div className="custom-contact-office-top">
                  <span>02 / DELHI OFFICE</span>
                  <MapPin size={23} />
                </div>

                <h3>Delhi</h3>

                <p>
                  171, First Floor, AGCR Enclave,
                  <br />
                  Delhi – 110092.
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=171+AGCR+Enclave+Delhi+110092"
                  target="_blank"
                  rel="noreferrer"
                  className="custom-contact-map-link"
                >
                  VIEW LOCATION
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="custom-contact-form-section" id="contact-form">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-5">
              <div className="custom-contact-form-intro">
                <span className="custom-contact-eyebrow">
                  YOUR NEXT STORY STARTS HERE
                </span>

                <h2>
                  Tell Us What
                  <span> You're Thinking.</span>
                </h2>

                <p>
                  Whether you have a project proposal, a creative
                  collaboration idea or a general question, share
                  the details with us.
                </p>

                <div className="custom-contact-form-points">
                  <div>
                    <CheckCircle2 size={18} />
                    <span>Project and production enquiries</span>
                  </div>

                  <div>
                    <CheckCircle2 size={18} />
                    <span>Partnership and co-production proposals</span>
                  </div>

                  <div>
                    <CheckCircle2 size={18} />
                    <span>Creative and career opportunities</span>
                  </div>
                </div>

                <div className="custom-contact-direct">
                  <span>DIRECT CONTACT</span>

                  <a href="tel:+919868116252">
                    +91 98681 16252
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <form
                className="custom-contact-form"
                onSubmit={handleSubmit}
              >
                <div className="custom-contact-form-heading">
                  <div>
                    <span>CONTACT FORM</span>
                    <h3>Send Us a Message</h3>
                  </div>

                  <Send size={24} />
                </div>

                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="custom-contact-field">
                      <label htmlFor="contact-name">FULL NAME *</label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="custom-contact-field">
                      <label htmlFor="contact-email">EMAIL ADDRESS *</label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="custom-contact-field">
                      <label htmlFor="contact-phone">PHONE NUMBER</label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="custom-contact-field">
                      <label htmlFor="contact-subject">SUBJECT *</label>
                      <select
                        id="contact-subject"
                        name="subject"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          Select enquiry type
                        </option>
                        <option value="General Enquiry">
                          General Enquiry
                        </option>
                        <option value="Project Proposal">
                          Project Proposal
                        </option>
                        <option value="Partnership">
                          Partnership
                        </option>
                        <option value="Career">
                          Career Opportunities
                        </option>
                        <option value="Script Submission">
                          Script Submission
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="custom-contact-field">
                      <label htmlFor="contact-message">
                        YOUR MESSAGE *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows="5"
                        placeholder="Tell us how we can help..."
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="custom-contact-submit"
                    >
                      SEND YOUR MESSAGE
                      <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>

                {submitted && (
                  <div className="custom-contact-success" role="status">
                    <CheckCircle2 size={19} />
                    <p>
                      Form validated successfully. Connect your backend
                      or email service to receive this enquiry.
                    </p>
                  </div>
                )}

                <p className="custom-contact-form-note">
                  * Required fields. Please provide accurate contact details.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="custom-contact-faq" id="faqs">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4">
              <div className="custom-contact-faq-intro">
                <span className="custom-contact-eyebrow">
                  GOOD TO KNOW
                </span>

                <h2>
                  Frequently
                  <span> Asked Questions.</span>
                </h2>

                <p>
                  Find answers to some common questions about our
                  content, submissions, partnerships and contact details.
                </p>

                <a href="#contact-form">
                  STILL HAVE A QUESTION?
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="custom-contact-faq-list">
                {faqs.map((faq, index) => (
                  <div
                    className={`custom-contact-faq-item ${
                      activeFaq === index ? "active" : ""
                    }`}
                    key={faq.question}
                  >
                    <button
                      type="button"
                      className="custom-contact-faq-question"
                      aria-expanded={activeFaq === index}
                      onClick={() =>
                        setActiveFaq(activeFaq === index ? -1 : index)
                      }
                    >
                      <span className="custom-contact-faq-number">
                        0{index + 1}
                      </span>

                      <span>{faq.question}</span>

                      <ChevronDown size={20} />
                    </button>

                    {activeFaq === index && (
                      <div className="custom-contact-faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
