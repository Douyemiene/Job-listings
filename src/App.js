import "./App.css";
import { Job } from "./components/Job";

const details = ["5d ago", "Contract", "USA only"];

const skills = ["Frontend", "Junior", "css", "JavaScript"];

function App() {
  return (
    <div className="App pt-12 bg-bgCyan">
      <Job
        company="MyHome"
        role="Junior Frontend Developer"
        details={details}
        filters={skills}
      />
      <Job
        company="MyHome"
        role="Junior Frontend Developer"
        details={details}
        filters={skills}
      />
    </div>
  );
}

export default App;
