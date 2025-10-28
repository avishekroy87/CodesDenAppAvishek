import { useContext } from "react"
import { MyContext } from "./MyContext"



function ThemedFile() {
    const theme = useContext(MyContext);
  return (
    <div>ThemedFile {theme.name}</div>
  )
}

export default ThemedFile