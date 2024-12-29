import { FaArrowRightLong } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

const BlogPost = () => {
  return (
    <div className="container bg-slate-50 px-10 py-28">
      <div>
        <h1 className="text-center font-bold text-5xl my-5">
          Latest blog posts
        </h1>
        <p className="text-center font-normal text-lg mb-12">
          Different layouts and styles for team sections.
        </p>
        <div data-aos="zoom-in-up" className=" flex gap-10">
          <div className="group">
            <div className="h-[350px] overflow-hidden rounded-lg">
              <img
                src="/images/blog-1.jpg"
                alt="blog-1"
                className="group-hover:scale-105 transition duration-100 hover:rounded-xl"
              />
            </div>
            <div className="flex mt-5 mb-1">
              <p className=" text-sm text-slate-600">March 10, 2022</p>
              <GoDotFill className="mt-1 p-1 text-blue-600" />
              <p className=" text-sm text-slate-600">Saas & App</p>
            </div>
            <div className="block-title">
              <h3 className="text-2xl font-semibold cursor-pointer hover:text-blue-600 ">
                Introducing New Apps Design for
                <br /> our iOS App
              </h3>
              <button className="flex mt-3 cursor-pointer font-semibold hover:text-blue-600">
                Learn More <FaArrowRightLong className="mt-1 pt-1 pl-1 ml-2" />
              </button>
            </div>
          </div>

          <div data-aos="zoom-in-up" className="group">
            <div className="h-[350px] overflow-hidden rounded-xl">
              <img
                src="/images/blog-2.jpg"
                alt="blog-2"
                className="group-hover:scale-105 transition duration-100"
              />
            </div>
            <div className="flex mt-5 mb-1">
              <p className=" text-sm text-slate-600">March 10, 2022</p>
              <GoDotFill className="mt-1 p-1 text-blue-600" />
              <p className=" text-sm text-slate-600">Saas & App</p>
            </div>
            <div className="block-title">
              <h3 className="text-2xl font-semibold cursor-pointer hover:text-blue-600 ">
                How to bring Dolce to your <br /> company
              </h3>
              <button className="flex mt-3 cursor-pointer font-semibold hover:text-blue-600">
                Learn More <FaArrowRightLong className="mt-1 pt-1 pl-1 ml-2" />
              </button>
            </div>
          </div>

          <div data-aos="zoom-in-up" className="group">
            <div className="h-[350px] overflow-hidden rounded-xl">
              <img
                src="/images/blog-3.jpg"
                alt="blog-3"
                className="group-hover:scale-105 transition duration-100"
              />
            </div>
            <div className="flex mt-5 mb-1">
              <p className=" text-sm text-slate-600">March 10, 2022</p>
              <GoDotFill className="mt-1 p-1 text-blue-600" />
              <p className=" text-sm text-slate-600">Saas & App</p>
            </div>
            <div className="block-title">
              <h3 className="text-2xl font-semibold cursor-pointer hover:text-blue-600 ">
                17 Effective Ways to Monetize
                <br /> Mobile Apps
              </h3>
              <button className="flex mt-3 cursor-pointer font-semibold hover:text-blue-600">
                Learn More <FaArrowRightLong className="mt-1 pt-1 pl-1 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
