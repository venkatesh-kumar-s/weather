import React from "react";
interface User {
  name: string;
  age: number;
}

const Test = () => {
  let user: any;
  user = [
    { name: "venkatesh", age: 25 },
    { name: "Joey", age: 30 },
  ];
  console.log((user as User[]).length);
  return <></>;
};

export default Test;
