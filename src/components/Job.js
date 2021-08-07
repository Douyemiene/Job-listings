import styled from "styled-components";
const FirstFilterItem = styled.div`
  &:before {
    content: "•";
  }
`;

export const Job = ({ data, children }) => {
  const {
    company,
    logo,
    when,
    featured,
    postion,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = data;

  //const imageName = require('../images/photosnap.svg');

  // const imageName2 = require(str);
  return (
    <div className="w-11/12 mx-auto bg-white mb-12 p-6 border-l-4 border-primary shadow-lg relative font-spartan">
      <img
        src={process.env.PUBLIC_URL + logo}
        alt="company logo"
        className="h-12 absolute -top-6"
      />

      <div>
        <div className="text-sm text-left mt-6">
          <span className="text-primary font-bold">{company}</span>
          {when && <span className="text-primary font-bold mx-3">NEW!</span>}
          {featured && (
            <span className="text-primary font-bold uppercase">featured</span>
          )}
        </div>
        <div className="font-bold py-3 text-left">{role}</div>
        <div className="flex flex-wrap text-darkerCyan text-sm">
          <FirstFilterItem>
            {" "}
            <span className="mr-4 "></span>
          </FirstFilterItem>
          );
        </div>
        <div className="my-4 bg-darkCyan" style={{ height: "1.2px" }} />
      </div>
      <div className="flex flex-wrap content-between h-20">
        {tools.map((item) => (
          <span className="px-2 py-1.5 text-primary bg-cyan shadow-sm text-sm font-semibold mr-2">
            {item}{" "}
          </span>
        ))}
      </div>
    </div>
  );
};
