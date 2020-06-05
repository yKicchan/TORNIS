import React from 'react'

import './Item.scss'
import { useRecoilValue } from 'recoil'
import { velocityAtom } from '../../tornis'

const Item = ({idx}: {idx: number}) => {
  const velocity = useRecoilValue(velocityAtom)
  const style = {
    transform: `perspective(1000px) scaleZ(${1+velocity.y}) rotateX(${45 + velocity.y * 2}deg)`,
    // width: `calc(200px + ${velocity.y}%)`
  }
  return <li className="item" style={style}>{idx}</li>
}

export default Item
