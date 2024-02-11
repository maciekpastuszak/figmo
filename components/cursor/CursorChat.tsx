import { CursorChatProps, CursorMode } from '@/types/type'

const CursorChat = ({ cursor, cursorState, setCursorState, updateMyPresence }: CursorChatProps) => {
  return (
    <div className="absolute top-0 left-0" style={{ transform: `translatex(${cursor.x}px) translateY(${cursor.y}px)`}}>
      {cursorState.mode === CursorMode.Chat && (
      <>
      </>
      )}
    </div>
  )
}

export default CursorChat