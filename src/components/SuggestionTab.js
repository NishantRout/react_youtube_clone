import React from "react";
import "./css/SuggestionTab.css";

function SuggestionTab({ selected, title }) {
  return (
    <div className={`suggestionTab ${selected && "selected_tab"}`}>
      <p>{title}</p>
    </div>
  );
}

export default SuggestionTab;
