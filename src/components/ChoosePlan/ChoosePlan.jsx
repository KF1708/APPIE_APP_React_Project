import Toggle from "../shared/toggle";
import Plan from "./Plan";

const ChoosePlan = () => {
  return (
    <div className="container bg-slate-200 px-12 py-28">
      <div className="text-center">
        <h1 className=" font-extrabold text-5xl">Choose your Plan</h1>
        <p className="pt-5 pb-10">
          Different layouts and styles for team sections.
        </p>
        <div className="place-content-center flex mb-14 gap-4">
          <h3 className=" text-lg font-medium"> Monthly</h3>
          <Toggle />
          <h3 className=" text-lg font-medium">Annualy</h3>
        </div>
      </div>
      <Plan />
    </div>
  );
};

export default ChoosePlan;
