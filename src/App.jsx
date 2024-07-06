import Button from "./components/Button";
import "./App.css";
import Chart from "./components/Chart";
import { useState } from "react";

function App() {
  const [showChart, setShowChart] = useState(false);

  return (
    <>
      <div className="container">
        <h2>Performance Analyzer</h2>
        <Button setShowChart={setShowChart} />
        {showChart ? <Chart /> : "Chart Will be shown here..."}
      </div>
    </>
  );
}

export default App;
