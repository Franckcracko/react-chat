const MessageEmisor = ({ message }) => {
  const text = message.match(/.{20}/g);
  return (
    <li className="flex flex-col list-none items-end ">
      <span className="text-xs text-opacity-40">
        {'Yo'}
      </span>
      <div className="max-w-xs text-base text-white py-1 px-2 rounded bg-blue-500">
        {
          text ? text.join('\n') : message
        }
      </div>
    </li>
  )
}
export default MessageEmisor;