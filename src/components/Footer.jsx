
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  ArrowUp,
  Send,
} from "lucide-react";
import "../css/Footer.css";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "What We Do", href: "#services" },
  { label: "Our Genres", href: "#genres" },
  { label: "Why SHGR", href: "#why-shgr" },
  { label: "Our Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Collaborate", href: "#collaborate" },
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function Footer() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSubmitted(false);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Enter your name.";
    if (!form.email.trim()) {
      newErrors.email = "Enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Enter your phone number.";
    } else if (!/^[+]?[\d\s()-]{7,18}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid phone number.";
    }

    if (!form.subject.trim()) newErrors.subject = "Enter a subject.";
    if (!form.message.trim()) newErrors.message = "Enter your message.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Connect your contact API here.
    console.log("Contact form data:", form);

    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <footer className="custom-footer" id="contact">
      <div className="container">

        {/* Contact CTA */}
        <div className="custom-footer-top">
          <div>
            <span className="custom-footer-label">LET'S CONNECT</span>
            <h2>
              Have a story to tell?
              <br />
              <em>Let's talk.</em>
            </h2>
          </div>

          <a href="#collaborate" className="custom-footer-top-link">
            COLLABORATE WITH US
            <ArrowUpRight size={18} />
          </a>
        </div>

        {/* Footer columns */}
        <div className="custom-footer-grid">

          {/* Brand */}
          <div className="custom-footer-brand">
            <a href="#home" className="custom-footer-logo">
              <img
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="SHGR Entertainment"
              />
            </a>

            <h3>
              Stories That Inspire.
              <br />
              <span>Cinema That Endures.</span>
            </h3>

            <p>
              An Indian film and web series production house
              creating devotional and fiction stories rooted
              in culture, emotion and craft.
            </p>
          </div>

          {/* Links */}
          <div className="custom-footer-links">
            <h4>Explore</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="custom-footer-contact">
            <h4>Contact & Offices</h4>

            <div className="custom-footer-contact-item">
              <MapPin size={18} />
              <div>
                <span>REGISTERED OFFICE</span>
                <p>
                  545, Arun Vihar, Sector 37, Noida,
                  Gautam Budh Nagar, Uttar Pradesh – 201301
                </p>
              </div>
            </div>

            <div className="custom-footer-contact-item">
              <MapPin size={18} />
              <div>
                <span>DELHI OFFICE</span>
                <p>
                  171, First Floor, AGCR Enclave,
                  Delhi – 110092
                </p>
              </div>
            </div>

            <div className="custom-footer-contact-item">
              <Phone size={18} />
              <div>
                <span>CONTACT PERSON</span>
                <p>Shashi Kulshreshtha</p>
                <a href="tel:+919868116252">+91 98681 16252</a>
              </div>
            </div>

            <div className="custom-footer-contact-item">
              <Mail size={18} />
              <div>
                <span>EMAIL</span>
                <p>Email details to be added</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="custom-footer-form">
            <h4>Send an Enquiry</h4>
            <p>Have a proposal or collaboration idea? Write to us.</p>

            {submitted && (
              <div className="custom-footer-success" role="status">
                Details validated. Connect your API to submit the enquiry.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="custom-footer-form-row">
                <div className="custom-footer-field">
                  <input
                    type="text"
                    name="name"
                    aria-label="Your name"
                    placeholder="Your Name *"
                    value={form.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && <small>{errors.name}</small>}
                </div>

                <div className="custom-footer-field">
                  <input
                    type="email"
                    name="email"
                    aria-label="Email address"
                    placeholder="Email Address *"
                    value={form.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && <small>{errors.email}</small>}
                </div>
              </div>

              <div className="custom-footer-form-row">
                <div className="custom-footer-field">
                  <input
                    type="tel"
                    name="phone"
                    aria-label="Phone number"
                    placeholder="Phone Number *"
                    value={form.phone}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.phone)}
                  />
                  {errors.phone && <small>{errors.phone}</small>}
                </div>

                <div className="custom-footer-field">
                  <input
                    type="text"
                    name="subject"
                    aria-label="Subject"
                    placeholder="Subject *"
                    value={form.subject}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.subject)}
                  />
                  {errors.subject && <small>{errors.subject}</small>}
                </div>
              </div>

              <div className="custom-footer-field">
                <textarea
                  name="message"
                  rows="3"
                  aria-label="Your message"
                  placeholder="Your Message *"
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && <small>{errors.message}</small>}
              </div>

              <button type="submit" className="custom-footer-submit">
                SEND ENQUIRY
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="custom-footer-bottom">
          <p>
            © {new Date().getFullYear()} <strong>SHGR Entertainment.</strong>
            {" "}All Rights Reserved.
          </p>

          <span>MADE FOR STORIES. BUILT ON CRAFT.</span>

          <a href="#home">
            BACK TO TOP <ArrowUp size={15} />
          </a>
        </div>

      </div>
    </footer>
  );
}
