import WindowsSize from "./WindowsSize.tsx";
import {CodesdenSt2} from "./CodesdenSt2.tsx";
import './App.css'
import { Provider } from "react-redux";
import store from "./store.tsx";
import { MyContext } from "./MyContext.tsx";


function App() {

  return (
      <>
      <MyContext.Provider value={{name: "Codesden from App"}} >
      <Provider store={store}>  
        <WindowsSize />
          <CodesdenSt2 />
          </Provider>
        </MyContext.Provider>
      </>

  )
}

export default App
