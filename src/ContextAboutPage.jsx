import { useContext, useReducer } from "react"
import { DECREMENT, INCREMENT, RESET } from "./reducer/counter/count"
import { SiteContext } from "./context/SiteContext"




export default function ContextAboutPage(){
  const {counter:{state, dispatch}} = useContext(SiteContext)
  return <div>
    <h2>ContextAboutPage : Context Api Kullanıldı</h2>
    <h2>{state}</h2>
    <button onClick={()=>dispatch(INCREMENT)}>artir</button >
    <button onClick={()=>dispatch(DECREMENT)}>azalt</button>
    <button onClick={()=>dispatch(RESET)}>sifirla</button>
    <button onClick={()=>dispatch("hebele")}>olmayani yap</button>
  </div>

}