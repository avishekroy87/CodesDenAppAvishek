import WindowsSize from "./WindowsSize.tsx";
import {CodesdenSt2} from "./CodesdenSt2.tsx";
import './App.css'
import { Provider } from "react-redux";
import store from "./store.tsx";


function App() {

  return (
      <>
      <Provider store={store}>  
        <WindowsSize />
          <CodesdenSt2 />
          </Provider>
        
      </>

  )
}

export default App
