import { useState } from "react";
import "./App.css";
import { Job } from "./components/Job";
import { jobs } from "./data.js";
import AddedFilter from "./components/AddedFilter";

export default function App() {
  //state
  const [searchFilters, setSearchFilters] = useState([]);
  const [filter, setFilter] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobs);

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
    addFilter();

    if (filter) {
      const filteredJobsAndNulls = jobsAndTheirFilters.map((job, idx) => {
        if (job.includes(filter)) {
          return jobs[idx];
        }
        return null;
      });

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
    //search();
  };
  // }
  return (
    <div className="App pt-12 bg-bgCyan">
      <div className="text-2xl lg:text-4xl font-semibold">Search for Jobs</div>
      <div className="shadow-md w-10/12 mx-auto my-6 py-4 px-3 mb-16">
        <input
          type="search"
          onChange={onFilterChange}
          className="pl-2 rounded-md w-10/12 md:w-7/12 bg-white border-gray-400 border-2 lg:py-2 lg:mb-3 md:mr-3 lg:mr-6 lg:w-1/3"
        />
        <button
          onClick={search}
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
      <div>
        {filteredJobs.map((jobItem) => (
          <Job data={jobItem} />
        ))}
      </div>
    </div>
  );
}
