const HeroTwo = () => {
  return (
    <div
      data-aos="fade-down"
      className=" flex-1 hero-image center relative p-10"
    >
      <img
        className="hero-image-circle absolute z-10 scale-125"
        src="../public/images/solid-circle-png-thumb16.png"
        alt="solid-circle"
      />
      <img
        className="hero-image-thumb-1 z-20"
        src="../public/images/hero-thumb-1.png"
        alt="hero-thumb-1"
      />
      <img
        className="hero-image-thumb-2 absolute z-30 right-0"
        src="../public/images/hero-thumb-2.png"
        alt="hero-thumb-2"
      />
    </div>
  );
};

export default HeroTwo;
