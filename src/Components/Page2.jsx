import React from "react";
import Page3 from "./Page3";
const Page2 = (props) => {
  console.log(props);
  return (
    <div>
      Page 2
      <div>
        {props.children},{props.var1}
      </div>
      <Page3 {...props} var1="watermelon" />
    </div>
  );
};

export default Page2;
