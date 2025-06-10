export const Input = ({ label, placeholder, type = "text", value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-md font-semibold mb-2 text-black-500">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border mb-2 bg-gray-100 border-black-100 rounded-[16px] p-4 focus:outline-none focus:ring-2 focus:ring-sky-500 text-black-400"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
