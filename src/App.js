import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="wholePage">
        <Weather defaultCity="Berlin" />
        <footer>
          <a
            href="hhttp://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            target="_blank"
            rel="noreferrer"
            className="gitLink"
          >
            Open-source code{" "}
          </a>
          by Rezvaneh Hosseini
        </footer>
      </div>
    </div>
  );
}
