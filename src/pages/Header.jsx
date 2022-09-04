import React from "react";
import Formatdate from "../components/Formatdate";

import Paper from "@mui/material/Paper";

const Header = () => {
  return (
    <React.Fragment>
      <Paper elevation={5} className="-mx-1.5 -mt-1.5">
        <div>
          <div className="pl-10 align-center">
            <h6>welcome avinash</h6>
          </div>
          <div className="flex flex-row items-center   flex-wrap justify-between p-2 mr-5">
            <div className="flex flex-row flex-wrap items-center flex-wrap justify-between p-2">
              <span className=" h-5">
                <i className="material-icons">dashboard </i>
              </span>
              <h6>dashboard |</h6>
            </div>
            <div>
              <p>
                <Formatdate />
              </p>
            </div>
          </div>
        </div>
      </Paper>
    </React.Fragment>
  );
};

export default Header;
