import React from "react";
import Page2 from "./Page2";
const Page1 = (props) => {
  return (
    <div>
      <div>Page 1</div>
      <Page2 var1="apple" var2="banana">
        Blah Blah
      </Page2>
    </div>
  );
};

export default Page1;
