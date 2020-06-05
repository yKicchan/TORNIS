import React, { useEffect } from "react"
import { useSetRecoilState } from "recoil"
import { watchViewport, unwatchViewport } from "tornis"
import { update, velocityAtom } from "./tornis"

import List from "./List/List"

import "./App.scss"

const App = () => {
  const setVelocity = useSetRecoilState(velocityAtom)
  useEffect(() => {
    // bind the watch function
    // By default this will run the function as it is added to the watch list
    watchViewport(update(setVelocity))

    // to bind the watch function without calling it
    // watchViewport(updateValues, false)

    // when you want to stop updating
    return () => unwatchViewport(update(setVelocity))
  })

  return (
    <>
      <List length={10} />
    </>
  )
}

export default App
