import StageOne from "./StageOne";

const StageReport = () => {
  return (
    <div className="flex overflow-x-hidden items-center container pl-12 py-28 bg-slate-200">
      <div className="flex gap-10">
        <StageOne />
        <img
          src="/images/traffic-thumb.png"
          alt="traffic-thumb"
          data-aos="fade-left"
          className="stage-img mt-20"
        />
      </div>
    </div>
  );
};

export default StageReport;
