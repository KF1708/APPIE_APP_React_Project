import { useState } from "react";

const Toggle = () => {
  const [toggled, setToggled] = useState(false);
  return (
    <div className="flex justify-center items-center">
      <button
        className={`toggle-btn ${toggled ? "toggled" : ""} rounded-2xl`}
        onClick={() => setToggled(!toggled)}
      >
        <div className="thumb rounded-full"></div>
      </button>
    </div>
  );
};

export default Toggle;
