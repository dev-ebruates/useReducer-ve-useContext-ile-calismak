import { createContext, useReducer } from "react";
import { countReducer, initialCountState } from "../reducer/counter/count";
import { initial, todoReducer } from "../reducer/todo";

const SiteContext = createContext();
function SiteContexProvider({children}){

  const [count, counterDispatch] = useReducer(countReducer, initialCountState)
  const [todos, todoDispatch] = useReducer(todoReducer, initial)

  const context = {
    counter:{state:count, dispatch: counterDispatch},
    todos:{state:todos, dispatch:todoDispatch}
  }
  

  return <SiteContext.Provider value={context}>
    {children}
  </SiteContext.Provider>
}

export{SiteContext, SiteContexProvider}