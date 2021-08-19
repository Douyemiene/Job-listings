import { useEffect, useState } from "react";
import "./App.css";
import { Job } from "../components/Job";
import { jobs } from "../data.js";
import AddedFilter from "../components/AddedFilter";
import styled from "styled-components";

export default function App() {
  const [navState, setNavState] = useState(""); //typescript typescript typescript
  const onToggleNav = () => {
    if (navState) {
      setNavState("");
    } else {
      setNavState("open");
    }
  };

  //state
  const [searchFilters, setSearchFilters] = useState([]);
  const [filter, setFilter] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  useEffect(() => {
    search();
  }, [searchFilters]);

  useEffect(() => {
    console.log("filteredJobs", filteredJobs);
  }, [filteredJobs]);

  let jobsAndTheirFilters = jobs.map(
    ({ role, level, location, languages, tools }) =>
      [role, level, location].concat(languages, tools)
  );

  jobsAndTheirFilters = jobsAndTheirFilters.map((job) =>
    job.map((jobItem) => {
      return jobItem.toLowerCase();
    })
  );

  const search = (event) => {
    if (searchFilters.length !== 0) {
      console.log("this", searchFilters.length);
      const filteredJobsAndNulls = jobsAndTheirFilters.map((job, idx) => {
        if (searchFilters.every((item) => job.includes(item))) {
          return jobs[idx];
        }
        return null;
      });

      console.log("noww", filteredJobsAndNulls);
      const filteredJobs = filteredJobsAndNulls.filter((job) => job != null);

      setFilteredJobs(filteredJobs);
    } else {
      setFilteredJobs(jobs);
    }
  }; //search end

  const onFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const addFilter = () => {
    if (filter) {
      setSearchFilters([...searchFilters, filter]);
    }
  };

  const removeFilter = (targetFilter) => {
    setSearchFilters(searchFilters.filter((item) => item !== targetFilter));
  };

  return (
    <div className="App pt-12 bg-bgCyan">
      <div className="py-4 flex justify-end px-4">
        <NavIcon className={navState} onClick={onToggleNav}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </NavIcon>
      </div>
      <div className="text-2xl lg:text-4xl font-semibold">Search for Jobs</div>
      <div className="shadow-md w-10/12 mx-auto my-6 py-4 px-3 mb-16">
        <input
          type="search"
          onChange={onFilterChange}
          className="pl-2 rounded-md w-10/12 md:w-7/12 bg-white border-gray-400 border-2 lg:py-2 lg:mb-3 md:mr-3 lg:mr-6 lg:w-1/3"
        />
        <button
          onClick={addFilter}
          className="mt-4 rounded-md bg-black text-white px-2 py-1 text-sm mb-4"
        >
          Add filter
        </button>
        <div className="flex flex-wrap lg:w-10/12 mx-auto mb-2">
          {searchFilters.map((filter) => (
            <AddedFilter name={filter} removeFilter={removeFilter} />
          ))}
        </div>
      </div>
      <div className="md:grid grid-cols-2 lg:grid-cols-3 gap-x-2 md:px-6 lg:px-16">
        {filteredJobs.map((jobItem) => (
          <Job data={jobItem} />
        ))}
      </div>
    </div>
  );
}

const NavIcon = styled.div`
  width: 60px;
  height: 45px;
  position: relative;
  margin: 50px auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
  }

  & span {
    display: block;
    position: absolute;
    height: 5px;
    width: 50%;
    background: #000;
    opacity: 1;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  pan:nth-child(even) {
    left: 50%;
    border-radius: 0 9px 9px 0;
  }

  & span:nth-child(odd) {
    left: 0px;
    border-radius: 9px 0 0 9px;
  }

  & span:nth-child(1),
  & span:nth-child(2) {
    top: 0px;
  }

  & span:nth-child(3),
  & span:nth-child(4) {
    top: 10px;
  }

  & span:nth-child(5) {
    top: 20px;
  }

  &.open span:nth-child(1) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  &.open span:nth-child(2),
  &.open span:nth-child(5) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  &.open span:nth-child(1) {
    left: 0px;
    top: 7px;
  }

  &.open span:nth-child(2) {
    right: 50%;
    top: 7px;
  }

  &.open span:nth-child(3) {
    left: -50%;
    opacity: 0;
  }

  &.open span:nth-child(4) {
    left: 100%;
    opacity: 0;
  }

  &.open span:nth-child(5) {
    opacity: 0;
    left: 5px;
    top: 29px;
  }
`;
