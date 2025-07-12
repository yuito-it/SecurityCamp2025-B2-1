import React from "react";
import "./App.css";

function App() {
  const [data, setData] = React.useState({ message: "Loading..." });
  React.useEffect(() => {
    fetch("http://localhost:8081/")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setData({ message: "Error loading data" });
      });
  }, []);
  return <div>{data.message}</div>;
}

export default App;
