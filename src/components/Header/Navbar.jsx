import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const location = useLocation();
  const activeBox = useRef();

  const navItems = [
    { label: "Home", link: "/home" },
    { label: "Skills", link: "/Skills" },
    { label: "Works", link: "/Projects" },
    { label: "Portfolio", link: "/Portfolio" },
    { label: "Referals", link: "/Referals" },
    { label: "Contact", link: "/Contact", className: "md:hidden" },
  ];

  // Adjust active box position based on current path
  useEffect(() => {
    const activeLink = document.querySelector(".nav-link.active");
    if (activeLink && activeBox.current) {
      const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = activeLink;
      activeBox.current.style.top = `${offsetTop}px`;
      activeBox.current.style.left = `${offsetLeft}px`;
      activeBox.current.style.width = `${offsetWidth}px`;
      activeBox.current.style.height = `${offsetHeight}px`;
    }
  }, [location]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const activeLink = document.querySelector(".nav-link.active");
      if (activeLink && activeBox.current) {
        const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = activeLink;
        activeBox.current.style.top = `${offsetTop}px`;
        activeBox.current.style.left = `${offsetLeft}px`;
        activeBox.current.style.width = `${offsetWidth}px`;
        activeBox.current.style.height = `${offsetHeight}px`;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, className = "" }, key) => {
        const isActive =
          location.pathname === link ||
          (link === "/home" && location.pathname === "/");

        return (
          <Link
            key={key}
            to={link}
            className={`nav-link ${className} ${isActive ? "active" : ""}`}
          >
            {label}
          </Link>
        );
      })}

      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
