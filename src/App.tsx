import useStoreBase from "./store";

import IncrementFish from "./IncrementFish";

import "./styles.css";
import { useStore } from "zustand";

export default function App() {

  //No rerenders that's good
 //const  bears  = useStoreBase( (state) => state.bears);
 //const increment = useStoreBase((state) => state.increment);


 //const {bears, increment} = useStoreBase((state) => state);
const { bears, increment} = useStoreBase((state) => ({
  bears: state.bears,
  increment: state.increment}))

 console.log("render App");

  return (
    <div className="App">
      <h1>Bears: {bears}</h1>
      <button onClick={increment} >Increment</button>

     <IncrementFish />
     
    </div>
  );
}
