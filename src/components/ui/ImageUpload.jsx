import { useRef, useState } from 'react';
import { FaImage } from 'react-icons/fa';

export default function ImageUpload({ onImageSelect, imageName, onClear }) {
  const fileInputRef = useRef(null);
  const [dragOver, setDragOver] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleFile = (file) => {
    if (!file || file.size > 5 * 1024 * 1024) {
      alert("Image is too large or not selected. Max 5MB.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      onImageSelect(reader.result, file.name);
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    handleFile(file);
  };

  const handleChange = (e) => {
    const file = e.target.files?.[0];
    handleFile(file);
  };

  const clearImage = () => {
    if (fileInputRef.current) fileInputRef.current.value = '';
    setPreview(null);
    onClear();
  };

  return (
    <div className="mt-6 text-left">
      <div
        onDrop={handleDrop}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        className={`w-full p-4 border-2 border-dashed rounded-xl transition text-center ${
          dragOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
      >
        <p className="text-sm text-gray-600 mb-2">
          Drag & drop an image here, or
        </p>
        <label className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg shadow-md cursor-pointer hover:bg-blue-700 transition">
          <FaImage />
          Browse
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleChange}
            className="hidden"
          />
        </label>
      </div>

      {imageName && (
        <div className="mt-4">
          <p className="text-sm text-gray-700">Selected: <span className="font-medium">{imageName}</span></p>
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-2 max-w-xs rounded border border-gray-300 shadow"
            />
          )}
          <button onClick={clearImage} className="text-sm text-red-600 hover:underline mt-2 block">
            ❌ Remove image
          </button>
        </div>
      )}
    </div>
  );
}