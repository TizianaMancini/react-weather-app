import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Toronto" temperature="5" />
      <small>
        <a
          href="https://github.com/TizianaMancini/Weather-App"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        by Tiziana Mancini
      </small>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
