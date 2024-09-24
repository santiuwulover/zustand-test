import useStoreBase from "./store";
import React from "react";

const IncrementFish = React.memo( ()=> {
  const { incrementFish , fish} = useStoreBase();
  return <button onClick={incrementFish}>Increment Fish {fish} </button>;
})

export default IncrementFish;