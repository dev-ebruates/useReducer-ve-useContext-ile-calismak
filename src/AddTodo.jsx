import { useContext } from "react"
import { ADD_TODO, RESET_TODO} from "./reducer/todo"
import { SiteContext } from "./context/SiteContext"
import Todos from "./Todos"

export default function AddTodo(){
  // const [state, dispatch] = useReducer(todoReducer, initial)
  const {todos:{state, dispatch}} = useContext(SiteContext)
  // console.log(state, dispatch)

  function handleSubmit(event){
    event.preventDefault()
    const inputValue = event.target.elements[0].value
    dispatch({type: ADD_TODO, payload:inputValue })
    event.target.reset()
  }
  function handleReset(event){
    event.preventDefault()
    dispatch({type: RESET_TODO,})
   

  }
  return<>
  <form onSubmit={handleSubmit}>
    <input type="text" placeholder="todo bilgilerini giriniz"/>
    <button type="submit">Ekle</button>
    <button onClick={handleReset}>Sifirla</button>
  </form>
  <Todos/>

  </>
}