import React from "react";
import Banner from "./Banner";
import Button from "./button";
import Quote from "./Quote";

const App = props => {
  return (
    <div>
      <Banner />
      <div className="container">
        <Quote />
        <Button />
      </div>
    </div>
  );
};

export default App;
