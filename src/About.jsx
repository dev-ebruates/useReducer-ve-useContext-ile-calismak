import { useReducer } from "react"
import { INCREMENT, DECREMENT, RESET, countReducer, initialCountState  } from "./reducer/counter/count" 


export default function About() {
  const [count, dispatch] = useReducer(countReducer, initialCountState)
  // const [count, setCount] = useState(0)

  // function increment(){
  //   setCount(prev => prev + 1)
  // }
  // function decrement(){
  //   setCount(prev => prev - 1)
  // }
  // function reset(){
  //   setCount(0)
  // }

  return (
    <><h1>context api kullanılmadı.</h1>
      <h2>Count ::: {count}</h2>
      <button onClick={()=>dispatch(INCREMENT)}>artir</button >
      <button onClick={()=>dispatch(DECREMENT)}>azalt</button>
      <button onClick={()=>dispatch(RESET)}>sifirla</button>
    </>
  )
}
