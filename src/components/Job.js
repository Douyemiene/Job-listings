import React from "react";
import faceit from "../images/faceit.svg";

export const Job = ({ company, role, details, filters }) => {
  return (
    <div className="w-11/12 mx-auto bg-white mb-12 p-6 border-l-4 border-primary shadow-lg relative">
      <img src={faceit} alt="company logo" className="h-14 absolute -top-6" />
      <div>
        <div className="text-sm text-left mt-2">
          <span>{company}</span>
        </div>
        <div className="font-bold py-2 text-left">{role}</div>
        <div className="flex flex-wrap text-darkerCyan">
          {details.map((item) => (
            <span>{item} .</span>
          ))}
        </div>
        <div className="my-4 bg-darkCyan" style={{ height: "1.2px" }} />
      </div>
      <div className="flex flex-wrap content-between h-20">
        {filters.map((item) => (
          <span className="p-2 text-primary bg-cyan shadow-sm text-sm font-semibold mr-2">
            {item}{" "}
          </span>
        ))}
      </div>
    </div>
  );
};
