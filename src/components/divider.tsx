const Divider = ({ name = '' }) => {
  return (
    <div className="flex items-center">
      <div className="flex-grow border-t border-gray-300"></div>
      <div className="mx-4 text-slate-300">{name}</div>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  )
}

export default Divider
