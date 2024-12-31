import { useEffect } from "react";
import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { classNames } from "../components/classNames";

const ContactUsButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-5 z-20">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? "opacity-100" : "opacity-0",
          "bg-colorFour hover:bg-colorOne transition duration-1000 ease-in-out inline-flex items-center rounded-full p-3 text-white shadow-sm "
        )}
      >
        <FaAngleUp className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
};

export default ContactUsButton;
