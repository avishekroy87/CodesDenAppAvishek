import {useEffect, useState} from 'react'
import './App.css'

function App() {
    const [windowSize, setWindowSize] = useState({
        height: 0,
        width: 0,
    })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                height: window.innerHeight,
                width: window.innerWidth,
            })
        }

        handleResize();
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    },[]);

var result = `${windowSize.width} ${windowSize.height} `

  return (
    <>
      The Window Width is {result}
      <br />

    </>
  )
}

export default App
