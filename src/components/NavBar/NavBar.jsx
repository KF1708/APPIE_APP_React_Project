import { FaChevronDown } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <div className="navbar sticky top-0 z-50 shadow-md container px-12">
      <div className="navbar-section">
        <div className="navbar-half">
          <img src="../public/images/logo.png" alt="logo" />
          <h3 className="makealign">
            Home <FaChevronDown className="icon" />
          </h3>
          <h3 className="makealign">
            Mega Menu
            <FaChevronDown className="icon" />
          </h3>
          <h3 className="makealign">
            Pages <FaChevronDown className="icon" />
          </h3>

          <h3 className="makealign">
            Shop <FaChevronDown className="icon" />
          </h3>
          <h3 className="makealign">
            News <FaChevronDown className="icon" />
          </h3>
        </div>

        <div className="navbar-half">
          <h3 className="makealign">
            <IoPersonOutline className="icon-p" />
            Login
          </h3>
          <Link to="/" style={{ textDecoration: "none" }}>
            <p className="navbar-p">Get Started</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
