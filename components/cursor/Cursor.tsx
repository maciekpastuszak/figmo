import React from 'react'
type Props = {
  color: string;
  x: number;
  y: number;
  message: string;
}

const Cursor = ({color, x, y, message}: Props) => {
  return (
    <div>Cursor</div>
  )
}

export default Cursor