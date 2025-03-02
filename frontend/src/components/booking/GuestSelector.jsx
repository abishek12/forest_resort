import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const GuestSelector = ({ adults, setAdults, children, setChildren }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  const increaseGuests = (type) => {
    if (type === "adults") setAdults(adults + 1);
    else if (type === "children") setChildren(children + 1);
  };

  const decreaseGuests = (type) => {
    if (type === "adults" && adults > 1) setAdults(adults - 1);
    else if (type === "children" && children > 0) setChildren(children - 1);
  };

  return (
    <div className="form-group tw-py-2 hover:tw-cursor-pointer tw-rounded-sm" style={{ border: "2px solid black" }}>
      <div onClick={toggleDropdown}>
        <IoMdArrowDropdown className="tw-inline-block" size={20} />
        {adults} adults, {children} children
      </div>
      {isOpen && (
        <div className="tw-absolute tw-bg-green-200 tw-rounded-md tw-border tw-border-black tw-p-4 tw-w-[250px] tw-z-50">
          <div className="tw-flex tw-items-center tw-justify-between tw-py-2">
            <label>Adults</label>
            <div className="tw-flex tw-pb-1">
              <button onClick={() => decreaseGuests("adults")}>-</button>
              <span className="tw-px-4">{adults}</span>
              <button onClick={() => increaseGuests("adults")}>+</button>
            </div>
          </div>
          <div className="tw-flex tw-place-items-center tw-justify-between tw-py-2">
            <label>Children</label>
            <div className="tw-flex tw-pb-1">
              <button onClick={() => decreaseGuests("children")}>-</button>
              <span className="tw-px-4">{children}</span>
              <button onClick={() => increaseGuests("children")}>+</button>
            </div>
          </div>
          <button onClick={closeDropdown} className="reserveBtns tw-pt-2 tw-w-full">
            Done
          </button>
        </div>
      )}
    </div>
  );
};

export default GuestSelector;