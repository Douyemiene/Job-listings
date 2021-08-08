import styled from "styled-components";
const FilterItem = styled.div`
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
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = data;

  let bordered = "";
  if (when && featured) {
    bordered = "border-l-4 border-primary ";
  }

  return (
    <div
      className={`${bordered} w-11/12 lg:w-10/12 mx-auto lg:flex items-center bg-white mb-12 px-6 pt-6 pb-5 lg:pb-8 shadow-lg relative font-spartan`}
    >
      <img
        src={process.env.PUBLIC_URL + logo}
        alt="company logo"
        className="h-12 absolute lg:static lg:mr-8 lg:h-20 -top-6"
      />

      <div>
        <div className="text-xs text-left mt-6">
          <span className="text-primary font-bold ">{company}</span>
          {when && (
            <span className="bg-primary flex-inline justify-center items-center text-white font-semibold mx-3 py-1 px-2 rounded-xl">
              NEW!
            </span>
          )}
          {featured && (
            <span className="bg-black flex-inline justify-center items-center  text-white py-1 px-2 rounded-xl font-semibold uppercase">
              featured
            </span>
          )}
        </div>
        <div className="font-bold py-4 text-left">{position}</div>
        <div className="flex flex-wrap text-darkerCyan text-sm">
          <FilterItemContainer filter={postedAt} noBullet />
          <FilterItemContainer filter={contract} />
          <FilterItemContainer filter={location} />
        </div>
        <div
          className="my-4 bg-darkCyan lg:hidden"
          style={{ height: "1.2px" }}
        />
      </div>
      <div className="flex flex-wrap content-between max-h-44 lg:flex-grow lg:justify-end">
        {tools.map((item) => (
          <ToolsAndLanguages toolOrSkill={item} />
        ))}

        {languages.map((item) => (
          <ToolsAndLanguages toolOrSkill={item} />
        ))}
      </div>
    </div>
  );
};

const FilterItemContainer = ({ filter, noBullet }) => {
  return (
    <>
      {filter && (
        <div className=" text-gray-500">
          {noBullet ? (
            <span className=" mr-3 "> {filter}</span>
          ) : (
            <FilterItem>
              <span className="ml-0.5  mr-3 "> {filter}</span>
            </FilterItem>
          )}
        </div>
      )}
    </>
  );
};

const ToolsAndLanguages = ({ toolOrSkill }) => {
  return (
    <span className="px-2 py-1 shadow text-primary bg-cyan text-xs font-bold mr-4 mb-3">
      {toolOrSkill}
    </span>
  );
};
