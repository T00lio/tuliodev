import { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Menu from "../../assets/icons/menu.png";
import { GITHUB_URL, LINKEDIN_URL, MENU_ITEMS } from "../../Constants";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="header-container">
      <Navbar expand="lg" className="p-4">
        <NavbarBrand href="/">
          <h1 className="navbar-title">tuliosalvatierra.com</h1>
        </NavbarBrand>

        <nav className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {MENU_ITEMS.map((item, index) => (
              <li className="listItem" key={`header-${index}`}>
                <a href={item.url} onClick={toggleMenu} className="nav-link">
                  <img src={item.icon} alt={item.title} className="icon" />
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="social-icons">
            <a href={LINKEDIN_URL}>
              <LinkedInIcon sx={{ fontSize: 30, color: "#fff" }} />
            </a>

            <a href={GITHUB_URL}>
              <GitHubIcon sx={{ fontSize: 30, color: "#fff" }} />
            </a>
          </div>
        </nav>

        <button
          className="navbar-toggler custom-toggler flex"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon">
            <image src={Menu}></image>
          </span>
        </button>
      </Navbar>
    </div>
  );
}

export default Header;
