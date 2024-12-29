import { FaGooglePlay } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io5";

const HeroOne = () => {
  return (
    <div className=" flex-1">
      <div className="hero-section">
        <h3 className="">Welcome To Appie</h3>
        <h1 className="">
          Manage it all, in this <br /> all new system.
        </h1>
        <p>
          Hanky panky lavatory up the duff jolly good cack brolly <br /> is
          chinwag zonked happy days sloshed.
        </p>
        <div className="hero-btn">
          <button className="hero-btn-ios">
            <IoLogoApple /> Download for iOS
          </button>
          <button className="hero-btn-android">
            <FaGooglePlay /> Download for Android
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroOne;
