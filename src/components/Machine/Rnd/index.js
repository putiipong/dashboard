import { useState } from 'react'
import { Rnd } from "react-rnd";

export default function RndCustom({ onDragStop, data, boxHeight, boxWidth }) {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#f0f0f0"
  };

  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })

  return (
    <Rnd
      style={style}
      default={{
        x: 15,
        y: 15,
        width: 100,
        height: 100
      }}
      position={{ x: position.x, y: position.y }}
      onDragStop={(e, d) => {
        let positionOnDrag = {
          x: d.x < 0 ? 0 : d.x,
          y: d.y < 0 ? 0 : d.y
        }

        if (d.x + d.node.offsetWidth > boxWidth) {
          positionOnDrag.x = boxWidth - d.node.offsetWidth
        }

        if (d.y + d.node.offsetHeight > boxHeight) {
          positionOnDrag.y = boxHeight - d.node.offsetHeight
        }

        setPosition(positionOnDrag)
        onDragStop(positionOnDrag)
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        // console.log(`position`, position)
        // console.log(`ref`, ref)
      }}
    >
      {data.name || '-'}
    </Rnd>
  )
}
