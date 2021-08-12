import { useState } from "react";
import "./App.css";
import { Job } from "./components/Job";
import { jobs } from "./data.js";
impoimport { RiCloseLine } from "react-icons/ri";

function App() {
  const [searchFilters, setSearchFilters] = useState([]);
  const [filter, setFilter] = useState("");
  const onFilterChange = (event) => {
    setFilter(event.target.value);
  };
  const addFilter = () => {
    setSearchFilters([...searchFilters, filter]);
  };
  // const removeFilter = ( ) => {

  // }
  return (
    <div className="App pt-12 bg-bgCyan">
      <div className="flex flex-wrap w-10/12 mx-auto bg-white px-2 mb-2 py-1">
        {searchFilters.map((filter) => (
          <AddedFilter name={filter} />
        ))}
      </div>
      <div>
        <input
          type="search"
          onChange={onFilterChange}
          className=" rounded-md w-10/12"
        />
        <button
          onClick={addFilter}
          className="mt-4 rounded-md bg-black text-white px-2 py-1 text-sm mb-12"
        >
          Add filter
        </button>
      </div>
      <div>
        {jobs.map((jobItem) => (
          <Job data={jobItem} />
        ))}
      </div>
    </div>
  );
}
const AddedFilter = ({ name }) => (
  <div className="flex items-center mb-2  mr-3 shadow-sm">
    <span className="text-primary bg-cyan text-xs font-bold py-1 px-3 ">
      {name}
    </span>
    <span className="bg-primary px-0.5 h-full">
      <RiCloseLine className="text-white h-full" />
    </span>
  </div>
);
