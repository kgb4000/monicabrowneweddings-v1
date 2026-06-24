export default function Button({
  buttonText,
  bgColor,
  textColor,
  borderWidth,
  borderStyle,
  textSize,
  type = 'button',
  disabled,
}) {
  return (
    <div className="block text-center">
      <button
        type={type}
        disabled={disabled}
        className={`${bgColor} ${textColor} ${borderWidth} ${textSize} py-6 px-10 my-4 rounded-2xl font-bold disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {buttonText}
      </button>
    </div>
  )
}
