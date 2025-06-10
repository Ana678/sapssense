export const Button = ({ children, type = "button", onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 rounded-md"
    >
      {children}
    </button>
  );
}
