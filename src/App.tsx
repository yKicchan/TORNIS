import React from "react"
import { RecoilRoot } from "recoil"

import List from "./List/List"

import "./App.scss"

const App = () => {
  return (
    <RecoilRoot>
      <div></div>
      <List length={10} />
    </RecoilRoot>
  )
}

export default App
