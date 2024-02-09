import { LiveCursorProps } from '@/types/type'
import React from 'react'
import Cursor from './Cursor';

const LiveCursors = ({others}: LiveCursorProps) => {
  others.map(({connectionId, presence}) => {
    if(!presence) return null;

    return(
      <Cursor 
        key={connectionId}
      />
    )
  })
}

export default LiveCursors