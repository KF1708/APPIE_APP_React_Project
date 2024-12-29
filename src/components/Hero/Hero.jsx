import HeroOne from "./HeroOne";
import HeroTwo from "./HeroTwo";

const Hero = () => {
  return (
    <div className=" hero flex overflow-x-hidden items-center container px-12">
      <HeroOne />
      <HeroTwo />
    </div>
  );
};

export default Hero;
