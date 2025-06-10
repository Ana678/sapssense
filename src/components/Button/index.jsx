export const Button = ({ children, type = "button", onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-[16px]"
    >
      {children}
    </button>
  );
}
