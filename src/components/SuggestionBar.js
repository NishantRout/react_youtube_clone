import React, { useState } from "react";
import "./css/SuggestionBar.css";
import SuggestionTab from "./SuggestionTab";

function SuggestionBar() {
  const [suggestionList, setSuggestionList] = useState([
    { title: "Apple" },
    { title: "Macbook Pro" },
    { title: "Science Fiction" },
    { title: "Superheroes" },
    { title: "Marvel" },
    { title: "Arrowverse" },
    { title: "Javascript" },
    { title: "Spiderman" },
    { title: "Flash" },
    { title: "Alienware" },
    { title: "India" },
    { title: "Music" },
    { title: "A. R. Rahman" },
    { title: "Sitcom" },
    { title: "Action" },
    { title: "4K" },
    { title: "HDR" },
    { title: "miniLED" },
    { title: "Dolby TrueHD Atmos" },
  ]);
  return (
    <div className="suggestionBar">
      <SuggestionTab selected title="All" />
      {suggestionList.map(({ title }) => (
        <SuggestionTab title={title} />
      ))}
    </div>
  );
}

export default SuggestionBar;
