const MessageReceptor = ({name,message}) => {
  return (
    <li className="flex flex-col list-none items-start">
      <span className="text-xs text-opacity-40">
        {name.trim().split(' ')[0]}
      </span>
      <span className="max-w-xs text-white py-1 px-2 rounded whitespace-pre-wrap bg-gray-500">
        {message}
      </span>
    </li>
  )
}
export default MessageReceptor;