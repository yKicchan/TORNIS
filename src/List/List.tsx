import React from "react"
import "./List.scss"

const List = ({ length }: { length: number }) => {
  let items = []
  for (let i = 0; i < length; i++) {
    items.push(i)
  }
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default List
