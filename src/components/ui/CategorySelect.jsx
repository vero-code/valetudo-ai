import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

const CategorySelect = ({ value, options, onChange, placeholder = "Select..." }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="relative w-full max-w-xs" ref={ref}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-white flex justify-between items-center text-gray-800"
      >
        <span>{selectedOption?.label || placeholder}</span>
        <FiChevronDown
          className={`transform transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul className="absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto">
          {options.map(({ value: val, label }) => (
            <li
              key={val}
              onClick={() => {
                onChange(val);
                setOpen(false);
              }}
              className="p-3 hover:bg-gray-100 cursor-pointer text-gray-700"
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategorySelect;