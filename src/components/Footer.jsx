
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Send,
  ArrowUp,
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
      {/* Top CTA */}
      <div className="custom-footer-top">
        <div className="container">
          <div className="custom-footer-cta">
            <div>
              <span>HAVE A STORY TO TELL?</span>
              <h2>
                Let's Create Something <strong>Meaningful.</strong>
              </h2>
            </div>

            <a href="#collaborate" className="custom-footer-cta-button">
              COLLABORATE WITH US
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="custom-footer-main">
        <div className="container">
          <div className="row g-5">

            {/* Brand */}
            <div className="col-lg-3 col-md-6">
              <div className="custom-footer-brand">
                <a href="#home" className="custom-footer-logo">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/logo.png`}
                    alt="SHGR Entertainment"
                  />
                </a>

                <h3>SHGR Entertainment</h3>

                <p>
                  A new-generation Indian film and web series production
                  house creating devotional and fiction stories rooted
                  in culture, emotion and craft.
                </p>

                <div className="custom-footer-tagline">
                  STORIES THAT INSPIRE.
                  <br />
                  CINEMA THAT ENDURES.
                </div>

                <div className="custom-footer-socials">
                  <a href="#" aria-label="Instagram">
                    <FaInstagram size={17} />
                  </a>
                  <a href="#" aria-label="Facebook">
                    <FaFacebook size={17} />
                  </a>
                  <a href="#" aria-label="YouTube">
                    <FaYoutube size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6">
              <div className="custom-footer-column">
                <h4>Quick Links</h4>
                <span className="custom-footer-heading-line"></span>

                <ul>
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>
                        <ArrowUpRight size={13} />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Details */}
            <div className="col-lg-4 col-md-6">
              <div className="custom-footer-column custom-footer-contact">
                <h4>Get In Touch</h4>
                <span className="custom-footer-heading-line"></span>

                <div className="custom-footer-contact-item">
                  <div className="custom-footer-contact-icon">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <span>REGISTERED OFFICE</span>
                    <p>
                      545, Arun Vihar, Sector 37,
                      Noida, Gautam Budh Nagar,
                      Uttar Pradesh – 201301
                    </p>
                  </div>
                </div>

                <div className="custom-footer-contact-item">
                  <div className="custom-footer-contact-icon">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <span>DELHI OFFICE</span>
                    <p>
                      171, First Floor, AGCR Enclave,
                      Delhi – 110092
                    </p>
                  </div>
                </div>

                <div className="custom-footer-contact-item">
                  <div className="custom-footer-contact-icon">
                    <Phone size={17} />
                  </div>

                  <div>
                    <span>CONTACT PERSON</span>
                    <p>Shashi Kulshreshtha</p>
                    <a href="tel:+919868116252">
                      +91 98681 16252
                    </a>
                  </div>
                </div>

                <div className="custom-footer-contact-item">
                  <div className="custom-footer-contact-icon">
                    <Mail size={17} />
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

            {/* Contact Form */}
            <div className="col-lg-3 col-md-6">
              <div className="custom-footer-form-wrapper">
                <h4>Send Us a Message</h4>
                <p>
                  Have an idea, proposal or collaboration opportunity?
                  Write to us.
                </p>

                {submitted && (
                  <div className="custom-footer-success">
                    Your form is valid. Connect the backend to submit
                    your enquiry.
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
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

                  <div className="custom-footer-input-group">
                    <textarea
                      name="message"
                      rows="3"
                      placeholder="Your Message *"
                      value={form.message}
                      onChange={handleChange}
                    ></textarea>
                    {errors.message && <small>{errors.message}</small>}
                  </div>

                  <button type="submit" className="custom-footer-submit">
                    SEND MESSAGE
                    <Send size={15} />
                  </button>
                </form>
              </div>
            </div>

          </div>

          {/* Bottom Footer */}
          <div className="custom-footer-bottom">
            <p>
              © {currentYear} <strong>SHGR Entertainment.</strong>
              {" "}All Rights Reserved.
            </p>

            <p>Crafted with a passion for meaningful storytelling.</p>

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
