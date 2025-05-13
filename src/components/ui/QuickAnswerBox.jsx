import ReactMarkdown from 'react-markdown';

export default function QuickAnswerBox({ quickAnswer, showFull, setShowFull, citations }) {
  return (
    <div
      className={`mt-6 bg-gray-50 border border-gray-200 p-5 rounded-xl shadow-md text-left text-[#272D45] ${
        showFull ? "max-h-96 overflow-y-auto" : ""
      }`}
    >
      <div className="prose prose-sm max-w-none whitespace-pre-wrap">
        <ReactMarkdown>{quickAnswer}</ReactMarkdown>
      </div>

      {!showFull && quickAnswer.split("\n").length > 1 && (
        <button
          onClick={() => setShowFull(true)}
          className="mt-2 text-blue-600 text-sm hover:underline"
        >
          Show full answer →
        </button>
      )}

      {citations.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <h4 className="font-semibold mb-2">Sources:</h4>
          <ol className="list-decimal list-inside space-y-1 text-blue-600 text-sm">
            {citations.map((url, idx) => (
              <li key={idx}>
                <a href={url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {url}
                </a>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
