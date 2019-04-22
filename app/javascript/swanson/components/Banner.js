import React from "react";

const style = ({
  backgroundImage: `linear-gradient(-225deg, rgba(30,30,30,0.6) 0%, rgba(90,90,90,0.6) 50%), url(https://images.unsplash.com/photo-1518290943012-2c2bec0e54d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60)`
});

const Banner = (props) => {
  return (
  <div className="banner" style={style} >
    <div className="banner-content">
      <h1>Ron Swanson</h1>
      <p>President 2020!</p>
    </div>
  </div>
  );
};

export default Banner;
