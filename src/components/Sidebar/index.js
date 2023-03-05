import "./index.scss";
import LogoS from "../../assets/images/logo-oold.png"; // changed logo-s to logo-old
import codechefLogo from "../../assets/images/codechef.png";
import LogoSubtitle from "../../assets/images/Abed_logo_white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faUser,
  faEnvelope,
  faScrewdriverWrench,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const iconColour = "#4d4d4e";
  const activeColour = "#ffd700";
  const path = window.location.pathname;

  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoS} alt="Logo" />
          <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
        </Link>
        <nav>
          <NavLink
            exact="true"
            activeclassname="active"
            onClick={(e) => setMobileMenuOpen(!mobileMenuOpen)}
            to="/"
          >
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>

          <NavLink
            activeclassname="active"
            className="skills-link"
            to="/skills"
          >
            <FontAwesomeIcon icon={faScrewdriverWrench} color="#4d4d4e" />
          </NavLink>

          <NavLink
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/abed-nassar-62b6bb199/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#b9b9b9" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/AbedIronman"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} color="#b9b9b9" />
            </a>
          </li>
        </ul>
      </div>

      <div className="nav-bar-phone">
        <Link className="logo" to="/">
          <img src={LogoS} alt="Logo" />
          <img className="sub-logo" src={LogoSubtitle} alt="abed" />
        </Link>
        <FontAwesomeIcon
          icon={mobileMenuOpen ? faClose : faBars}
          color="#ffd700"
          size="3x"
          style={{ marginRight: "15px", cursor: "pointer", zIndex: "3" }}
          onClick={(e) => {
            setMobileMenuOpen(!mobileMenuOpen);
          }}
        />

        <div
          className={`hamburger-menu-${mobileMenuOpen ? "visible" : "hidden"}`}
        >
          {mobileMenuOpen && (
            <>
              <NavLink
                exact="true"
                activeclassname="active"
                onClick={(e) => {
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                to="/"
              >
                <FontAwesomeIcon
                  icon={faHome}
                  color={path === "/" ? activeColour : iconColour}
                  size="2x"
                />
              </NavLink>
              <NavLink
                activeclassname="active"
                onClick={(e) => {
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                className="about-link"
                to="/about"
              >
                <FontAwesomeIcon
                  icon={faUser}
                  color={path === "/about" ? activeColour : iconColour}
                  size="2x"
                />
              </NavLink>

              <NavLink
                activeclassname="active"
                onClick={(e) => {
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                className="skills-link"
                to="/skills"
              >
                <FontAwesomeIcon
                  icon={faScrewdriverWrench}
                  color={path === "/skills" ? activeColour : iconColour}
                  size="2x"
                />
              </NavLink>

              <NavLink
                activeclassname="active"
                onClick={(e) => {
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                className="contact-link"
                to="/contact"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  color={path === "/contact" ? activeColour : iconColour}
                  size="2x"
                />
              </NavLink>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
