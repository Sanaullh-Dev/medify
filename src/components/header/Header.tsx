import { Link, useLocation } from "react-router-dom";
import logoSvg from "../../assets/logo.svg";
import "./Header.css";
import { UIButton } from "../../ui-kit";

export const Header: React.FC = () => {
  const location = useLocation();

  const menus: any = [
    { name: "Find Doctors", path: "/" },
    { name: "Hospitals", path: "/hospitals" },
    { name: "Medicines", path: "/" },
    { name: "Surgeries", path: "/" },
    { name: "Software for Providers", path: "/" },
    { name: "Facilities", path: "/" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" className="logo-link">
            <img src={logoSvg} alt="Medify Logo" />
            <span className="logo-text">Medify</span>
          </Link>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <nav className="nav">
            <ul className="nav-list">
              {menus.map((menu, index: number) => (
                <li key={index} className="nav-item">
                  <Link
                    to={menu.path}
                    className={`nav-link ${
                      isActive(menu.path) ? "active" : ""
                    }`}
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
              {/* <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${isActive("/") ? "active" : ""}`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/doctors"
                className={`nav-link ${isActive("/doctors") ? "active" : ""}`}
              >
                Find Doctors
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/hospitals"
                className={`nav-link ${isActive("/hospitals") ? "active" : ""}`}
              >
                Hospitals
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/appointments"
                className={`nav-link ${
                  isActive("/appointments") ? "active" : ""
                }`}
              >
                My Bookings
              </Link>
            </li> */}
            </ul>
          </nav>
          <UIButton
            onClick={() => console.log("Button clicked!")}
            className={undefined}
          >
            My Bookings
          </UIButton>
        </div>
      </div>
    </header>
  );
};
