import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import FooterTwo from "./FooterTwo";

const FooterOne = () => {
  return (
    <div className="mb-20">
      <div className="flex gap-36">
        <div>
          <img src="/images/logo.png" alt="log-img" className="my-5" />
          <h3 className="text-slate-600 text-bse">
            Appie WordPress is theme is the last
            <br /> theme you will ever have.
          </h3>
          <button className="flex mt-3 cursor-pointer font-semibold">
            Read More <FaArrowRightLong className="mt-1 pt-1 pl-1 ml-2" />
          </button>
          <div className="flex gap-5 mt-9">
            <FaFacebookF className="footer-one-icon bg-slate-50 text-black w-8 h-8 p-2 rounded-md" />
            <FaTwitter className="footer-one-icon bg-slate-50 text-black w-8 h-8 p-2 rounded-md" />
            <FaPinterestP className="footer-one-icon bg-slate-50 text-black w-8 h-8 p-2 rounded-md" />
            <FaLinkedinIn className="footer-one-icon bg-slate-50 text-black w-8 h-8 p-2 rounded-md" />
          </div>
        </div>

        <FooterTwo />
      </div>
    </div>
  );
};

export default FooterOne;
