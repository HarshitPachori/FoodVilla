import React, { useState } from "react";

const Accordion = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {};
  return (
    <div className="p-2 m-2">
      {sections.map((section, index) => (
        <div className="flex space-x-2" key={index}>
          <h1 className="font-bold ">{section?.title}</h1>
          <button className="bg-gray-300 rounded-md px-2 font-semibold cursor-pointer">
            {/* {console.log(isVisible)}
            {isVisible ? "Hide" : "Show"} */}
            Show
          </button>
          {/* {isVisible && <h1 className="text-sm">{description}</h1>} */}
          <hr className="m-2" />
        </div>
      ))}
    </div>
  );
};

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="p-2 m-2">
      <div className="flex space-x-2">
        <h1 className="font-bold ">{title}</h1>
        <button
          onClick={() => setIsVisible("")}
          className="bg-gray-300 rounded-md px-2 font-semibold cursor-pointer"
        >
          {console.log(isVisible)}
          {isVisible ? "Hide" : "Show"}
        </button>
      </div>
      {isVisible && <h1 className="text-sm">{description}</h1>}
      <hr className="m-2" />
    </div>
  );
};

const sections = [
  {
    title: "About",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
  },
  {
    title: "Career",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
  },
];
const InstaMart = () => {
  const [isSectionVisible, setIsSectionVisible] = useState("");
  return (
    <div>
      <Section
        title={"About Section"}
        description={
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
        }
        isVisible={isSectionVisible === "about"}
        setIsVisible={() => setIsSectionVisible("about")}
      />
      <Section
        title={"Details"}
        description={
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
        }
        isVisible={isSectionVisible === "detail"}
        setIsVisible={() => setIsSectionVisible("detail")}
      />
      <Section
        title={"Product"}
        description={
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
        }
        isVisible={isSectionVisible === "product"}
        setIsVisible={() => setIsSectionVisible("product")}
      />
      <Section
        title={"Careers"}
        description={
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
        }
        isVisible={isSectionVisible === "career"}
        setIsVisible={() => setIsSectionVisible("career")}
      />

      <Accordion sections={sections} />
    </div>
  );
};

export default InstaMart;
