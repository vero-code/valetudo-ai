export function BackButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500 transition"
    >
      ⬅️ Back
    </button>
  );
}

export function AskButton() {
  return (
    <button
      type="submit"
      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
    >
      🔍 Ask
    </button>
  );
}

export function ClearButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-red-100 text-red-700 px-6 py-2 rounded-lg hover:bg-red-200 transition"
    >
      🧹 Clear
    </button>
  );
}

export function FollowUpButton() {
  return (
    <button
      type="submit"
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer"
    >
      ➕ Ask follow-up
    </button>
  );
}