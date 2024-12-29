import { FaCheck } from "react-icons/fa";
import { TbCurrencyDollar } from "react-icons/tb";

const Plan = () => {
  return (
    <div>
      <div className="flex gap-14 m-5">
        <div
          data-aos="fade-right"
          className="choose-section-one  bg-white px-14 py-14 rounded-md relative shadow-2xl"
        >
          <h2 className="font-medium text-xl mb-5">Fresh</h2>
          <div className="flex ">
            <TbCurrencyDollar className="text-3xl" />
            <h4 className=" ">
              <span className="font-extrabold text-5xl">04</span> /month
            </h4>
          </div>
          <h2 className=" mt-5 mb-4 border-b-2 pb-10">
            Get your 14 day free trial
          </h2>

          <h2 className="flex font-semibold mr-10 mt-10 ">
            <div className="bg-green-200 text-green-400 rounded-full w-6 h-6 center mr-3">
              <FaCheck className="text-xs" />
            </div>
            60-day chat history
          </h2>
          <h2 className="flex mt-4 font-medium mb-4">
            <div className="bg-green-200 text-green-400 rounded-full w-6 h-6 center mr-3">
              <FaCheck className="text-xs" />
            </div>
            15 GB cloud storage
          </h2>

          <button className="plan-btn p-4 px-8 border-2 rounded-md mt-5 font-medium">
            Choose plan
          </button>
        </div>

        <div
          data-aos="fade-up"
          className="choose-section-middle bg-white px-14 py-14 rounded-md relative shadow-2xl "
        >
          <h1 className="absolute -top-4 right-10 p-1 px-3  text-white font-medium bg bg-red-500 shadow-lg shadow-red-500/50 rounded-2xl">
            {" "}
            Most Popular
          </h1>
          <h2 className="font-medium text-xl mb-5">Sweet</h2>
          <div className="flex ">
            <TbCurrencyDollar className="text-3xl" />
            <h4 className=" ">
              <span className="font-extrabold text-5xl">16</span> /month
            </h4>
          </div>
          <h2 className="mt-5 mb-4 border-b-2 pb-10">
            Billed $276 per website annually.
          </h2>

          <h2 className="flex font-semibold mr-10 mt-10">
            <div className="bg-green-200 text-red-400 rounded-full w-6 h-6 center mr-3">
              <FaCheck className="text-xs" />
            </div>
            60-day chat history
          </h2>
          <h2 className="flex mt-4 font-medium mr-10">
            <div className="bg-green-200 text-red-400 rounded-full w-6 h-6 center mr-3">
              <FaCheck className="text-xs" />
            </div>
            50 GB cloud storagee
          </h2>

          <h2 className="flex mt-4 font-medium mr-10 mb-4">
            <div className="bg-green-200 text-red-400 rounded-full w-6 h-6 center mr-3">
              <FaCheck className="text-xs" />
            </div>
            24/7 Support
          </h2>

          <button className="bg-red-500 text-white p-4 px-8 border-2 rounded-md mt-5 font-medium">
            Choose plan
          </button>
        </div>

        <div
          data-aos="fade-left"
          className="choose-section-last bg-white px-14 py-14 rounded-md relative shadow-2xl"
        >
          <h2 className="font-medium text-xl mb-5">Juicy</h2>
          <div className="flex ">
            <TbCurrencyDollar className="text-3xl" />
            <h4 className=" ">
              <span className="font-extrabold text-5xl">27</span> /month
            </h4>
          </div>
          <h2 className="mt-5 mb-4 border-b-2 pb-10">
            Billed $276 per website annually.
          </h2>

          <h2 className="flex font-semibold mr-10 mt-10">
            <div className="bg-green-200 text-green-400 rounded-full w-6 h-6 center mr-3">
              <FaCheck className="text-xs" />
            </div>
            60-day chat history
          </h2>
          <h2 className="flex mt-4 font-medium">
            <div className="bg-green-200 text-green-400 rounded-full w-6 h-6 center mr-3">
              <FaCheck className="text-xs" />
            </div>
            Data security
          </h2>

          <h2 className="flex mt-4 font-medium">
            <div className="bg-green-200 text-green-400 rounded-full w-6 h-6 center mr-3">
              <FaCheck className="text-xs" />
            </div>
            100 GB cloud storage
          </h2>

          <h2 className="flex mt-4 font-medium">
            <div className="bg-green-200 text-green-400 rounded-full w-6 h-6 center mr-3">
              <FaCheck className="text-xs" />
            </div>
            24/7 Support
          </h2>

          <button className="plan-btn p-4 px-8 border-2 rounded-md mt-10 font-medium">
            Choose plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
