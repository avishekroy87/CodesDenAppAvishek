// import WindowsSize from "./WindowsSize.tsx";
// import {CodesdenSt2} from "./CodesdenSt2.tsx";
// import './App.css'
// import { Provider } from "react-redux";
// import store from "./store.tsx";
import { MyContext } from "./MyContext.tsx";
import Parent from "./parent.tsx";


function App() {

  
  return (
      <>
      {/* <MyContext.Provider value={{name: "Codesden from App"}} >
      <Provider store={store}>  
        <WindowsSize />
          <CodesdenSt2 />
          </Provider>

        </MyContext.Provider> */}
       <MyContext.Provider value={{name: "Codesden from App"}} >
        <h1>Custom Hook App</h1>
        <p>Custom Hook App</p>
        <Parent />
      </MyContext.Provider>
      </>

  )
}

export default App
