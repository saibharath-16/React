import './App.css'
import Body from './Body'
import Timer from './Timer'
import FetchingApi from './FetchingApi'
import Component2 from './Component2'
import { createContext } from 'react';
import Component1 from './Component1'

export const varName = createContext()

function App() {
  return (
    <>
      {/* <Body />
      <Timer /> */}
      {/* <FetchingApi /> */}
      <varName.Provider value={"Ready to change color"}>
        <Component2 />
      </varName.Provider>

    </>
  )
}

export default App
