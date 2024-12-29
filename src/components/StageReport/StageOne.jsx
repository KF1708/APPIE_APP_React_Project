import { GoArrowRight } from "react-icons/go";
import { HiCheck } from "react-icons/hi";

const StageOne = () => {
  return (
    <div>
      <div>
        <h3 className="font-medium text-lg mb-2 text-blue-600">Traffic</h3>
        <h1 className=" font-extrabold text-5xl mb-4">
          Stage reporting with
          <br />
          50k queries.
        </h1>
        <p>
          He nicked it tickety boo harry the cras bargy chap mush spiffing{" "}
          <br /> spend a penny the full monty burke butty.
        </p>
      </div>
      <div className="flex gap-24 mt-8">
        <div>
          <div className="stage-section flex pt-5">
            <HiCheck className="stage-section-icon bg-gradient-to-r from-blue-300 to-blue-500 rounded-full" />
            <div className="pl-4">
              <h2 className="text-2xl font-bold">Carefully designed</h2>
              <p>
                Mucker plastered bugger all
                <br /> mate morish are.
              </p>
            </div>
          </div>
          <div className="stage-section flex pt-5">
            <HiCheck className="stage-section-icon bg-gradient-to-r from-green-300 to-green-500 rounded-full" />
            <div className="pl-4">
              <h2 className="text-2xl font-bold">Seamless Sync</h2>
              <p>
                Mucker plastered bugger all
                <br /> mate morish are.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="stage-section flex pt-5">
            <HiCheck className="stage-section-icon bg-gradient-to-r from-red-300 to-red-500 rounded-full" />
            <div className="pl-4">
              <h2 className="text-2xl font-bold">Choose a App</h2>
              <p>
                Mucker plastered bugger all
                <br /> mate morish are.
              </p>
            </div>
          </div>
          <div className="stage-section flex pt-5">
            <HiCheck className="stage-section-icon bg-gradient-to-r from-purple-300 to-purple-500 rounded-full" />
            <div className="pl-4">
              <h2 className="text-2xl font-bold">User Interactive</h2>
              <p>
                Mucker plastered bugger all
                <br /> mate morish are.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className=" flex gap-3 p-3 cursor-pointer px-10 stage-btn mt-8 border border-gray-300 font-medium rounded-md">
        Learn More
        <GoArrowRight className="mt-1" />
      </button>
    </div>
  );
};

export default StageOne;
