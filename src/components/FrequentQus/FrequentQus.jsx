import { Collapse } from "antd";
const { Panel } = Collapse;
const FrequentQus = () => {
  return (
    <div className="container qus-section  bg-slate-200 px-12  py-24">
      <h1 className="text-center font-bold text-5xl my-5">
        Frequently asked questions
      </h1>
      <p className="text-center font-normal text-lg mb-12">
        Different layouts and styles for team sections.
      </p>
      <div data-aos="fade-left" className="w-full">
        <Collapse defaultActiveKey={["1"]} className="" />
        <Collapse
          accordion
          defaultActiveKey={["1"]}
          className="border-none  collaps-section grid grid-cols-2 gap-10 !w-full"
        >
          <Panel
            header="Where do I usually find FAQs in a page?"
            key="1"
            className="bg-white border-none font-medium text-lg pr-20 px-20  mb-10 shadow-xl"
          >
            <p className="bg-white font-normal text-base">
              Naff Oxford vagabond in my flat chinwag blatant grub tomfoolery
              that I bits and bobs up the duff cras boot bevvy no biggie.
            </p>
          </Panel>
          <Panel
            header="Where do I usually find FAQs in a page?"
            key="2"
            className="bg-white border-none font-medium text-lg pr-20 px-20  mb-10 shadow-xl"
          >
            <p className="bg-white font-normal text-base">
              Naff Oxford vagabond in my flat chinwag blatant grub tomfoolery
              that I bits and bobs up the duff cras boot bevvy no biggie.
            </p>
          </Panel>
          <Panel
            header="Where do I usually find FAQs in a page?"
            key="3"
            className="bg-white border-none font-medium text-lg pr-20 px-20  mb-10 shadow-xl"
          >
            <p className="bg-white font-normal text-base">
              Naff Oxford vagabond in my flat chinwag blatant grub tomfoolery
              that I bits and bobs up the duff cras boot bevvy no biggie.
            </p>
          </Panel>
          <Panel
            header="Where do I usually find FAQs in a page?"
            key="4"
            className="bg-white border-none font-medium text-lg pr-20 px-20  mb-10 shadow-xl"
          >
            <p className="bg-white font-normal text-base">
              Naff Oxford vagabond in my flat chinwag blatant grub tomfoolery
              that I bits and bobs up the duff cras boot bevvy no biggie.
            </p>
          </Panel>
        </Collapse>
      </div>
      <h3 className="mt-5 text-center text-gray-700 text-lg">
        Can&apos;t find an answer?
        <span className="text-blue-500 ml-2">Email us</span>{" "}
      </h3>
    </div>
  );
};

export default FrequentQus;
