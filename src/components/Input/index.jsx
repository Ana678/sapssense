export const Input = ({ label, placeholder, type = "text", value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
