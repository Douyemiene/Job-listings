import { RiCloseLine } from "react-icons/ri";

const AddedFilter = ({ name, removeFilter }) => (
  <div className="flex items-center mb-2 Wmr-3 shadow-sm">
    <span className="text-primary bg-cyan text-xs font-bold py-1 px-3 ">
      {name}
    </span>
    <span
      className="bg-primary px-0.5 h-full"
      onClick={() => removeFilter(name)}
    >
      <RiCloseLine className="text-white h-full" />
    </span>
  </div>
);

export default AddedFilter;
