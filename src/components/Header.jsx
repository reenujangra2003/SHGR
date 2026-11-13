
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "What We Do", href: "#services" },
  { name: "Our Genres", href: "#genres" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
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
          <a href="#collaborate" className="custom-header-cta">
            <span>Partner With Us</span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>

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

        <a
          href="#collaborate"
          className="custom-mobile-cta"
          onClick={closeMenu}
        >
          Partner With Us
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </header>
  );
}
