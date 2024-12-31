import { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-6 border-b-[1px] pt-2 md:text-lg">
      <button
        onClick={() => {
          setAccordionOpen(!accordionOpen);
        }}
        className="flex justify-between w-full"
      >
        <div className=" flex justify-start w-full items-center mt-2">
          <span className="font-medium tracking-normal px-4 text-footerLinks">
            {title}
          </span>
        </div>
        <div className="px-4 py-2">
          {accordionOpen ? (
            <LuMinus color="Maroon" />
          ) : (
            <LuPlus color="Maroon" />
          )}
        </div>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 pt-4"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden px-4">
          <span className="md:text-lg text-footerLinks">{answer}</span>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
