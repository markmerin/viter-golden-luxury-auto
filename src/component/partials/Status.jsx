import React from "react";

const Status = ({ text }) => {
  return (
    <span
      className={
        text === "Active"
          ? "bg-green-100 text-green-800 text-[10px] font-medium mr-2 px-2 py-px rounded-full"
          : text === "Completed" || text === "Open"
          ? "bg-blue-100 text-primary text-[10px] font-medium mr-2 px-2 py-px rounded-full"
          : text === "On-going"
          ? "bg-yellow-100 text-yellow-800 text-[10px] font-medium mr-2 px-2 py-px rounded-full"
          : text === "Locked"
          ? "bg-red-100 text-red-800 text-[10px] font-medium mr-2 px-2 py-px rounded-full"
          : "bg-gray-100 text-gray-800 text-[10px] font-medium mr-2 px-2 py-px rounded-full"
      }
    >
      {text}
    </span>
  );
};

export default Status;
