import { useContext } from 'react'
import { DECREMENT, INCREMENT, RESET, countReducer, initialCountState } from './reducer/counter/count'
import About from './About'
import { SiteContext } from './context/SiteContext'
import ContextAboutPage from './ContextAboutPage'
import AddTodo from './AddTodo'

function App() {
  const {counter:{state, dispatch}} = useContext(SiteContext)
  console.log(state)
  
  // const [count, dispacth] = useReducer(countReducer, initialCountState)
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
    <>
      <AddTodo/>
      <hr/>
      <h2>Count ::: {state}</h2>
      <button onClick={()=>dispatch(INCREMENT)}>artir</button >
      <button onClick={()=>dispatch(DECREMENT)}>azalt</button>
      <button onClick={()=>dispatch(RESET)}>sifirla</button>
      <hr/>
      <ContextAboutPage/>
      <hr/>
      <About/>
    </>
    
  )
}

export default App
