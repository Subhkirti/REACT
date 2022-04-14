import { createContext } from "react";
import Child1 from "./child1";
const Global=createContext()
function App(){
    return(
      <Global.Provider value="Hello First!!">
      <h1>APP component</h1>
      <Child1 />
      </Global.Provider>
    )
}
export default App;