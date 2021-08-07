import "./App.css";
import { Job } from "./components/Job";
import { jobs } from "./data.js";

const details = ["5d ago", "Contract", "USA only"];

const skills = [
  "Frontend",
  "Junior",
  "css",
  "JavaScript",
  "Junior",
  "css",
  "JavaScript",
];

function App() {
  return (
    <div className="App pt-12 bg-bgCyan">
      {jobs.map((jobItem) => (
        <Job data={jobItem} />
      ))}
    </div>
  );
}

export default App;
