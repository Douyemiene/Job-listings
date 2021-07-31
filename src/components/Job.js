import React from "react";
import faceit from "../images/faceit.svg";
import styled from "styled-components";

const FirstFilterItem = styled.div`
  &:before {
    content: "•";
  }
`;

export const Job = ({ company, role, filters }) => {
  return (
    <div className="w-11/12 mx-auto bg-white mb-12 p-6 border-l-4 border-primary shadow-lg relative font-spartan">
      <img src={faceit} alt="company logo" className="h-12 absolute -top-6" />
      <div>
        <div className="text-sm text-left mt-6">
          <span className="text-primary font-bold">{company}</span>
        </div>
        <div className="font-bold py-3 text-left">{role}</div>
        <div className="flex flex-wrap text-darkerCyan text-sm">
          {filters
            .filter((item, idx) => idx < 3)
            .map((item, idx) => {
              if (idx == 0) {
                return <span className="mr-4">{item}</span>;
              }
              return (
                <FirstFilterItem>
                  {" "}
                  <span className="mr-4 ">{item}</span>
                </FirstFilterItem>
              );
            })}
        </div>
        <div className="my-4 bg-darkCyan" style={{ height: "1.2px" }} />
      </div>
      <div className="flex flex-wrap content-between h-20">
        {filters.map((item) => (
          <span className="px-2 py-1.5 text-primary bg-cyan shadow-sm text-sm font-semibold mr-2">
            {item}{" "}
          </span>
        ))}
      </div>
    </div>
  );
};
