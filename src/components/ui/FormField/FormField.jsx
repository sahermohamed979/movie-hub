import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function FormField({
  type,
  labelText,
  id,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
  icon,
  isExistingError,
}) {
  return (
    <>
      <div className="relative mb-4">
        <input
          type={type}
          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 peer"
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        <label
          htmlFor={id}
          className="absolute rounded-lg left-4 -top-2.5 bg-gray-800 px-1 text-sm text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-400"
        >
          <FontAwesomeIcon icon={icon} /> {labelText}
        </label>
        {error && touched ? (
          <p className="text-red-500 text-sm mt-1">{error}</p>
        ) : (
          ""
        )}
        {isExistingError && (
          <div className="text-red-500 text-sm mt-1">{isExistingError}</div>
        )}
      </div>
    </>
  );
}
