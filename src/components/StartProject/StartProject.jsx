const StartProject = () => {
  return (
    <div className="container bg-slate-50 px-12 py-24">
      <div data-aos="fade-down" className="start-section px-16 flex">
        <div className="py-20 pl-4">
          <h1 className="text-5xl font-bold text-white">
            Start your project
            <br />
            with appie.
          </h1>
          <p className="text-white my-5">
            We will email you only about this product.
          </p>
          <div className="">
            <input
              type="text"
              placeholder="Your email"
              className="pl-4 py-3 pr-36 rounded-lg"
            />
            <button className="bg-black text-white m-4 px-5 py-3 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
        <div className=" mt-12 ml-24">
          <img src="/images/project-thumb.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default StartProject;
