import Toggle from "./Hooks/useStateExample";
import Timer from "./Hooks/useEffectExample";
/*
import useEffectExample from "./Hooks/useEffectExample";
import useContextExample from "./Hooks/useContextExample";
import useReducerExample from "./Hooks/useReducerExample";
import useRefExample from "./Hooks/useRefExample";
*/
/*export default function App() {
  return <Toggle/>;
}*/
 export default function App(){
  const hook = "state"; // change ici

  if (hook == "state") return <Toggle/>;
  if(hook == "effect") return <Timer/>;
 }