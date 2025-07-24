import { Link } from "react-router-dom";
import logoSvg from "../../assets/logo.svg";
import "./Header.css";
import { UIButton } from "../../ui-kit";
import { routePaths, useAppLocation, useAppNavigation } from "../../router/hooks";

export const Header: React.FC = () => {
  const { isCurrentPath } = useAppLocation();
  const { goTo } = useAppNavigation();

  const menus = [
    { name: "Find Doctors", path: routePaths.findDoctors, is_active: isCurrentPath(routePaths.findDoctors) },
    { name: "Hospitals", path: routePaths.hospitals, is_active: isCurrentPath(routePaths.hospitals) },
    { name: "Medicines", path: "/", is_active: false },
    { name: "Surgeries", path: "/", is_active: false },
    { name: "Software for Providers", path: "/", is_active: false },
    { name: "Facilities", path: "/", is_active: false },
  ];

  const handleMyBookingsClick = () => {
    goTo(routePaths.myBookings);
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
        <div className="header-nav">
          <nav className="nav">
            <ul className="nav-list">
              {menus.map((menu, index: number) => (
                <li key={index + "_menu_item"} className="nav-item">
                  <Link
                    to={menu.path}
                    className={`nav-link ${menu.is_active ? "active" : ""}`}
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <UIButton
            onClick={handleMyBookingsClick}
            className="header-button"
          >
            My Bookings
          </UIButton>
        </div>
      </div>
    </header>
  );
};
