import { useState } from "react";
import PropTypes from "prop-types";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rotate, setRotate] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    setRotate(!rotate);
  };

  return (
    <div
      className="border-t border-b border-solid duration-300 cursor-pointer bg-transparent w-full py-14"
      onMouseEnter={(e) => e.currentTarget.classList.add("pl-2")}
      onMouseLeave={(e) => e.currentTarget.classList.remove("pl-2")}
      onClick={toggleAccordion}
    >
      <div className="max-w-[730px] flex gap-4 transition-all duration-1000">
        <div className="text-[#010b15] mr-auto text-[22.4px] font-sans font-bold">
          {question}
        </div>
        <div
          style={{ minWidth: "min-content" }}
          className={`duration-300 mb-auto ${rotate ? "rotate-90" : ""}`}
        >
          <img
            src="/dashboard/plus_icon.png"
            className="w-[25px] h-[25px]"
            alt="plus_icon"
          />
        </div>
      </div>
      <div
        className={`text-[#868686] text-[16px] mt-4 font-sans max-w-[700px] transition-opacity duration-500 
          ${isOpen ? `` : `hidden`}`}
      >
        <div className="transition-opacity">{answer}</div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  question: PropTypes.any.isRequired,
  answer: PropTypes.string.isRequired,
};

const FAQAccordion = () => {
  return (
    <>
      <Accordion
        question="How do I start packing"
        answer="To start packing, create an inventory checklist of your belongings and decide what to keep, sell, donate, or discard. Gather essential packing supplies like boxes, tape, bubble wrap, and markers. Then, pack one room at a time, labeling each box with its contents and the room it belongs to."
      />
      <Accordion
        question="How do I pack fragile items?"
        answer="To pack fragile items, provide extra care and cushioning. Use bubble wrap, packing paper, or blankets to protect delicate items. Pack them separately from heavier items and clearly label the boxes as fragile."
      />
      <Accordion
        question="What should I do with valuables?"
        answer="When packing valuables, keep them with you or consider using a secure storage option. This ensures their safety during the move. Make a list of valuable items and take pictures for insurance purposes."
      />
      <Accordion
        question="What items are hazardous?"
        answer="Avoid packing hazardous materials such as flammable or explosive items. Check with your moving company or local regulations for a list of prohibited items. Safely dispose of any hazardous materials before the move."
      />
    </>
  );
};

export default FAQAccordion;
