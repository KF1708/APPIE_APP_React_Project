import { useState } from "react";
import { items } from "../mocks/mocks-items";

const ConversationFlow = () => {
  const [currentItem, setCurrentItem] = useState("Settings");

  const isActive = (name) => {
    return currentItem === name ? " bg-blue-600" : "bg-gray-300";
  };

  const isActiveTitle = (name) => {
    return currentItem === name ? "text-blue-600" : "";
  };

  const changeState = (name) => {
    setCurrentItem(name);
  };

  const isActiveBorder = (name) => {
    return currentItem === name ? "text-white border-blue-600" : "";
  };

  const isActiveContent = (name) => {
    return currentItem === name ? "block" : "hidden";
  };

  return (
    <div className="container bg-slate-100 px-10 py-28">
      <div className="flex gap-8">
        <div className="flow-header my-40">
          {items.map(({ id, name, icon: Icon }) => (
            <div key={id} className="">
              <h3
                onClick={() => changeState(name)}
                className={`font-semibold text-lg text-slate-600 gap-4 p-2 flex pr-20 border-r-4  ${isActiveBorder(
                  name
                )}`}
              >
                <Icon
                  className={`flow-icon p-2 rounded-full ${isActive(name)}`}
                />
                <span
                  className={`${isActiveTitle(name)} flow-header-name flex-1`}
                >
                  {name}
                </span>
              </h3>
            </div>
          ))}
        </div>

        <div className="flow-section">
          {items.map(({ id, name, image, title, details, explain }) => (
            <div
              data-aos="fade-down"
              className={`${isActiveContent(name)} flex gap-5`}
              key={id}
            >
              <img src={image} alt="image" className="flow-img" />
              <div data-aos="fade-left" className="mt-20">
                <h4 className="font-medium mb-5 text-blue-600 text-lg">
                  {title}
                </h4>
                <h1 className=" font-bold mb-5 text-5xl">{details}</h1>
                <p className="text-lg pt-5">{explain}</p>
                <button className=" bg-blue-600 text-white rounded-md p-3 px-10 mt-8 font-medium">
                  {" "}
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConversationFlow;
