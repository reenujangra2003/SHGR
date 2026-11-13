
import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Our Expertise", href: "/our-expertise" },
  { name: "Our Services", href: "/our-services" },
  { name: "Our Team", href: "/our-team" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="custom-header py-3">
      <div className="custom-header-container container">

        {/* Logo */}
        <a href="#home" className="custom-header-logo" onClick={closeMenu}>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="SHGR Entertainment"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="custom-desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
        </nav>

        {/* Header CTA */}
        <div className="custom-header-actions">
          <Link to="/partner-form" className="custom-header-cta">
            <span>Partner With Us</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>

          {/* Mobile Toggle */}
          <button
            className={`custom-menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`custom-mobile-nav ${menuOpen ? "show" : ""}`}>
        {navLinks.map((link, index) => (
          <a
            key={link.name}
            href={link.href}
            style={{ "--nav-index": index }}
            onClick={closeMenu}
          >
            <span>{link.name}</span>
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        ))}

        <Link
          to="/partner-form"
          className="custom-mobile-cta"
          onClick={closeMenu}
        >
          Partner With Us
          <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </header>
  );
}
