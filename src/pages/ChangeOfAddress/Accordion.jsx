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
            className="sm:w-[10px] sm:h-[10px] w-[25px] h-[25px]"
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
        question="Will my Change-of-Address request with USPS update my address for all services?"
        answer="
        No, that's not the case. When you submit an address change request with USPS, your mail will be forwarded for a period of one year. Be sure to update your address with credit card companies, banks, government agencies, and any other entities that send you important mail."
      />
      <Accordion
        question="What is the best time to turn in my USPS Change-of-Address form?"
        answer="Be sure to request your address change at least two weeks before Moving Day so that the USPS has ample time to process the Change-of-Address and mail the Move Validation Letter for final verification."
      />
      <Accordion
        question="What is the duration of a Change-of-Address?"
        answer="The USPS will redirect the majority of your mail, such as bills, personal letters, invoices, and merchandise, for 12 months from the date you specified in your address change request. Magazines and newsletters will be forwarded for 60 days."
      />
      <Accordion
        question="How come there is a charge of $1.10 for changing my address?"
        answer="
The USPS imposes a $1.10 identity validation fee as a protection against fraud. By comparing the address associated with your credit/debit card to the new or old address specified in your mail forwarding request, the USPS can verify that you are the individual requesting the change. It is essential to understand that the authorized online Change-of-Address procedure only requires a payment of $1.10. Be cautious of websites that charge an amount exceeding the identity validation fee."
      />
      <Accordion
        question="What is MYMOVE101.com?"
        answer="
        MYMOVE101 is a recognized partner of the United States Postal Service®. We assist countless individuals in their relocations annually by aiding them in updating their address, modifying their voter registration, and discovering excellent bargains. Along with our array of services and promotions, our resource areas are brimming with valuable relocation guidance, internet service recommendations and promotions, cost of living estimators, city references, home decor and maintenance advice, and many other resources."
      />
    </>
  );
};

export default FAQAccordion;
