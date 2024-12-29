import { BiUpArrowAlt } from "react-icons/bi";
import BlogPost from "../../components/BlogPost/BlogPost";
import ChoosePlan from "../../components/ChoosePlan/ChoosePlan";
import DesignWithMind from "../../components/DesignWithMind/DesignWithMind";
import Footer from "../../components/Footer/Footer";
import FrequentQus from "../../components/FrequentQus/FrequentQus";
import Hero from "../../components/Hero/Hero";
import NavBar from "../../components/NavBar/NavBar";
import StageReport from "../../components/StageReport/StageReport";
import StartProject from "../../components/StartProject/StartProject";
import Swipper from "../../components/Swipper/Swipper";
import TeamMembers from "../../components/TeamMembers/TeamMembers";
import ConversationFlow from "../../ConversationFlow/ConversationFlow";

const HomePage = () => {
  return (
    <div className="container relative" id="top">
      <NavBar />
      <Hero />
      <DesignWithMind />
      <ConversationFlow />
      <StageReport />
      <Swipper />
      <TeamMembers />
      <ChoosePlan />
      <FrequentQus />
      <BlogPost />
      <StartProject />
      <Footer />

      <div className="fixed bottom-5 right-10 z-50">
        <a href="#top">
          <button className="">
            <BiUpArrowAlt className="bg-blue-500 p-1 w-8 h-8 rounded-md text-white" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
