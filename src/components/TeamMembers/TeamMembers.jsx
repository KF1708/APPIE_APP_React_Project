import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

const TeamMembers = () => {
  return (
    <div className="container bg-slate-50 px-12 py-28">
      <div className="text-center">
        <h1 className=" font-bold text-5xl">Meet our Team Members</h1>
        <p className="mt-5 mb-14 text-slate-700">
          Different layouts and styles for team sections.
        </p>
      </div>
      <div data-aos="fade-up" className="flex gap-10">
        <div className=" text-center object-cover">
          <div className="bg-blue-600 relative overflow-hidden">
            <img
              src="/images/team-1.jpg"
              alt="team-1"
              className="object-cover-img"
            />
            <div className="absolute left-0 bottom-8 w-full">
              <div className=" flex justify-center gap-4 items-center w-full m-2 team-icons">
                <FaFacebookF className="w-7 h-7 p-1 text-lg text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
                <FaTwitter className="w-7 h-7 p-1 text-lg text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
                <FaPinterestP className="w-7 h-7 p-1 text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
              </div>
            </div>
          </div>
          <h2 className="mt-10 font-medium text-xl">Benjamin Evalent</h2>
          <p className="text-gray-500">CEO-Founder</p>
        </div>
        <div className=" text-center object-cover">
          <div className="bg-blue-600 relative overflow-hidden">
            <img
              src="/images/team-2.jpg"
              alt="team-1"
              className="object-cover-img"
            />
            <div className="absolute left-0 bottom-8 w-full">
              <div className=" flex justify-center gap-4 items-center w-full m-2 team-icons">
                <FaFacebookF className="w-7 h-7 p-1 text-lg text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
                <FaTwitter className="w-7 h-7 p-1 text-lg text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
                <FaPinterestP className="w-7 h-7 p-1 text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
              </div>
            </div>
          </div>
          <h2 className="mt-10 font-medium text-xl">Benjamin Evalent</h2>
          <p className="text-gray-500">CEO-Founder</p>
        </div>
        <div className=" text-center object-cover">
          <div className="bg-blue-600 relative overflow-hidden">
            <img
              src="/images/team-3.jpg"
              alt="team-1"
              className="object-cover-img"
            />
            <div className="absolute left-0 bottom-8 w-full">
              <div className=" flex justify-center gap-4 items-center w-full m-2 team-icons">
                <FaFacebookF className="w-7 h-7 p-1 text-lg text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
                <FaTwitter className="w-7 h-7 p-1 text-lg text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
                <FaPinterestP className="w-7 h-7 p-1 text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
              </div>
            </div>
          </div>
          <h2 className="mt-10 font-medium text-xl">Benjamin Evalent</h2>
          <p className="text-gray-500">CEO-Founder</p>
        </div>
        <div className=" text-center object-cover">
          <div className="bg-blue-600 relative overflow-hidden">
            <img
              src="/images/team-4.jpg"
              alt="team-1"
              className="object-cover-img"
            />
            <div className="absolute left-0 bottom-8 w-full">
              <div className=" flex justify-center gap-4 items-center w-full m-2 team-icons">
                <FaFacebookF className="w-7 h-7 p-1 text-lg text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
                <FaTwitter className="w-7 h-7 p-1 text-lg text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
                <FaPinterestP className="w-7 h-7 p-1 text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
              </div>
            </div>
          </div>
          <h2 className="mt-10 font-medium text-xl">Benjamin Evalent</h2>
          <p className="text-gray-500">CEO-Founder</p>
        </div>
      </div>
      <button className=" place-self-center flex gap-3 p-3 cursor-pointer px-10 stage-btn mt-14 border border-gray-300 font-medium rounded-md">
        View all Members
        <GoArrowRight className="mt-1" />
      </button>
    </div>
  );
};

export default TeamMembers;
