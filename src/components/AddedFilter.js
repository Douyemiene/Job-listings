import { RiCloseLine } from "react-icons/ri";

const AddedFilter = ({ name, removeFilter }) => (
  <div className="flex items-center mb-2 mr-2 lg:mr-4 shadow-sm">
    <span className="text-primary bg-white border-2 border-r-0 border-primary lg:text-lg text-xs font-bold py-1 px-3 ">
      {name}
    </span>
    <span
      className="bg-primary px-1 lg:px-2.5 h-full"
      onClick={() => removeFilter(name)}
    >
      <RiCloseLine className="text-white h-full" />
    </span>
  </div>
);

export default AddedFilter;
