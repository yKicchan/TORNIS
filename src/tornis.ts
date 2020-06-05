import { TornisUpdateValues } from "tornis"
import { atom } from "recoil"

export const velocityAtom = atom({
  key: "velocity",
  default: { x: 0, y: 0 },
})

// define a watched function, to be run on each update
export const update = (setVelocity: Function) => ({
  size,
  scroll,
  mouse,
  position,
  orientation,
}: TornisUpdateValues) => {
  if (size.changed) {
    // do something related to size
  }

  if (scroll.changed) {
    // do something related to scroll position or velocity
    setVelocity({ x: scroll.velocity.x, y: scroll.velocity.y })
  }

  if (mouse.changed) {
    // do something related to mouse position or velocity
  }

  if (position.changed) {
    // do something related to browser window position or velocity
  }

  if (orientation.changed) {
    // do something related to device orientation
  }
}
