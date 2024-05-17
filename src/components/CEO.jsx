//components/CEO.js
import React, { useState } from "react";
import HeadOfDepartment from "./HeadOfDepartment";
import UpdateEmployeeModal from "./UpdateEmployeeModal";

const CEO = ({ data }) => {
  const { name, position, departments } = data;

  const [highlighted, setHighlighted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // onMouse enter highlights the hierechy of employees
  const handleMouseEnter = () => {
    setHighlighted(true);
  };

  const handleMouseLeave = () => {
    setHighlighted(false);
  };

  // modal to edit the details
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="text-center ml-8 mt-4 border-l border-gray-300 pl-4 overflow-x-auto ">
      <div
        className=" flex cursor-pointer line-clamp-1 whitespace-nowrap rounded-r-full focus:bg-blue-300 focus:border-blue-500 rounded-l-full justify-between px-1 shadow-md items-center w-52  border border-gray-300 "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleOpenModal}
      >
        <div className="rounded-full border border-gray-300 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>
        <div className="flex flex-col px-3  ">
          <div className="text-black text-lg font-semibold text-wrap truncate">
            {name}
          </div>
          <div className="text-base text-gray-500 font-medium text-wrap truncate">
            {position}
          </div>
        </div>
      </div>
      {/* // on clicking on the element opens a modal to edit & show case the details */}
      {showModal && (
        <UpdateEmployeeModal employee={data} onClose={handleCloseModal} />
      )}
      <div className="mt-4 md:ml-12">
        {/* passing down the hiererchy to render  */}
        {Object.entries(departments)?.map(([key, value]) => (
          <HeadOfDepartment
            ceoHighlighted={highlighted}
            key={value.id}
            data={value}
            departmentId={key}
          />
        ))}
      </div>
    </div>
  );
};

export default CEO;
