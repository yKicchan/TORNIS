import React from "react"
import { useRecoilValue } from "recoil"
import { velocityAtom } from "../tornis"
import Item from './Item/Item'

import "./List.scss"

const List = ({ length }: { length: number }) => {
  let items = []
  for (let i = 0; i < length; i++) {
    items.push(i)
  }

  const velocity = useRecoilValue(velocityAtom)

  return (
    <>
      <div className="velocity">
        {velocity.y}
      </div>
      <ul>
        {items.map((item) => (<Item key={item} idx={item}></Item>))}
      </ul>
    </>
  )
}

export default List
