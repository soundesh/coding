import React from "react";

import Paper from "@mui/material/Paper";
const SelectorFrom = ({ labeled, sizewidth, Date }) => {
  return (
    <Paper elevation={3} className="px-1.5 ">
      <div>
        <label htmlFor={labeled}>{labeled}:</label>
        <select name={labeled} id={labeled} className={`w-${sizewidth} `}>
          <optgroup label="Swedish Cars">
            <option value="volvo">{Date} </option>
            <option value="saab">Saab</option>
          </optgroup>
          <optgroup label="German Cars">
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </optgroup>
        </select>
      </div>
    </Paper>
  );
};

export default SelectorFrom;
