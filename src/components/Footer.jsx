import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Send,
  ArrowUp,
  Film,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

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

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[+]?[\d\s()-]{7,18}$/.test(form.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Please enter your message.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Connect your backend/API here before showing success.
    // Example: await contactAPI.submit(form);

    console.log("Contact form data:", form);
    setSubmitted(true);
    setForm(initialForm);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="custom-footer" id="contact">
      {/* Main Brand Banner */}
      <div className="custom-footer-banner">
        <div className="container">
          <div className="custom-footer-banner-inner">
            <div className="custom-footer-banner-content">
              <span className="custom-footer-overline">
                BEHIND EVERY FRAME, THERE IS A STORY
              </span>

              <h2>
                Every Great Story
                <br />
                Begins With <span>An Idea.</span>
              </h2>

              <p>
                Let's bring meaningful stories to life through creativity,
                collaboration and cinema.
              </p>

              <a href="#collaborate" className="custom-footer-banner-btn">
                START A CONVERSATION
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="custom-footer-banner-visual">
              <div className="custom-footer-film-circle">
                <Film size={65} strokeWidth={1} />
                <span>SHGR</span>
                <small>ENTERTAINMENT</small>
              </div>

              <span className="custom-footer-visual-caption">
                STORIES THAT STAY WITH YOU
              </span>
            </div>

            <span className="custom-footer-banner-number">SHGR.</span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="custom-footer-main">
        <div className="container">
          <div className="custom-footer-main-grid">
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
                A new-generation Indian film and web series production house
                creating devotional and fiction stories rooted in culture,
                emotion and craft.
              </p>

              <div className="custom-footer-socials">
                <button
                  type="button"
                  aria-label="Instagram link"
                  disabled
                >
                  <FaInstagram size={17} />
                </button>

                <button
                  type="button"
                  aria-label="Facebook link"
                  disabled
                >
                  <FaFacebook size={17} />
                </button>

                <button
                  type="button"
                  aria-label="YouTube link"
                  disabled
                >
                  <FaYoutube size={18} />
                </button>
              </div>
            </div>

            {/* Navigation */}
            <div className="custom-footer-navigation">
              <div className="custom-footer-section-heading">
                <span>EXPLORE</span>
                <h4>Discover SHGR</h4>
              </div>

              <ul>
                {quickLinks.map((link, index) => (
                  <li key={link.label}>
                    <a href={link.href}>
                      <span className="custom-footer-link-number">
                        0{index + 1}
                      </span>
                      {link.label}
                      <ArrowUpRight size={14} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Form */}
            <div className="custom-footer-inquiry">
              <div className="custom-footer-section-heading">
                <span>LET'S CONNECT</span>
                <h4>Have a Story in Mind?</h4>
              </div>

              <p>
                Share your idea, proposal or collaboration opportunity with our
                team.
              </p>

              {submitted && (
                <div className="custom-footer-success">
                  Your form is valid. Connect the backend to submit your
                  enquiry.
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="custom-footer-form-row">
                  <div className="custom-footer-input-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={form.name}
                      onChange={handleChange}
                    />
                    {errors.name && <small>{errors.name}</small>}
                  </div>

                  <div className="custom-footer-input-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      value={form.email}
                      onChange={handleChange}
                    />
                    {errors.email && <small>{errors.email}</small>}
                  </div>
                </div>

                <div className="custom-footer-form-row">
                  <div className="custom-footer-input-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      value={form.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && <small>{errors.phone}</small>}
                  </div>

                  <div className="custom-footer-input-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject *"
                      value={form.subject}
                      onChange={handleChange}
                    />
                    {errors.subject && <small>{errors.subject}</small>}
                  </div>
                </div>

                <div className="custom-footer-input-group">
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Tell us about your idea *"
                    value={form.message}
                    onChange={handleChange}
                  />
                  {errors.message && <small>{errors.message}</small>}
                </div>

                <button type="submit" className="custom-footer-submit">
                  SEND YOUR ENQUIRY
                  <Send size={15} />
                </button>
              </form>
            </div>
          </div>

          {/* Office Details */}
          <div className="custom-footer-offices">
            <div className="custom-footer-office-title">
              <span>FIND US</span>
              <h4>Our Offices</h4>
            </div>

            <div className="custom-footer-office-item">
              <div className="custom-footer-office-icon">
                <MapPin size={19} />
              </div>

              <div>
                <span>REGISTERED OFFICE</span>
                <p>
                  545, Arun Vihar, Sector 37, Noida, Gautam Budh Nagar, Uttar
                  Pradesh – 201301
                </p>
              </div>
            </div>

            <div className="custom-footer-office-item">
              <div className="custom-footer-office-icon">
                <MapPin size={19} />
              </div>

              <div>
                <span>DELHI OFFICE</span>
                <p>171, First Floor, AGCR Enclave, Delhi – 110092</p>
              </div>
            </div>

            <div className="custom-footer-office-item custom-footer-phone">
              <div className="custom-footer-office-icon">
                <Phone size={19} />
              </div>

              <div>
                <span>CONTACT US</span>
                <p>Shashi Kulshreshtha</p>
                <a href="tel:+919868116252">+91 98681 16252</a>
              </div>
            </div>

            <div className="custom-footer-office-item">
              <div className="custom-footer-office-icon">
                <Mail size={19} />
              </div>

              <div>
                <span>EMAIL ADDRESS</span>
                <p className="custom-footer-email-placeholder">
                  Official email to be added
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="custom-footer-bottom">
        <div className="container">
          <div className="custom-footer-bottom-inner">
            <p>
              © {currentYear} <strong>SHGR Entertainment.</strong> All Rights
              Reserved.
            </p>

            <span className="custom-footer-bottom-tagline">
              MADE FOR STORIES. BUILT ON CRAFT.
            </span>

            <a href="#home" className="custom-footer-back-top">
              BACK TO TOP
              <ArrowUp size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
