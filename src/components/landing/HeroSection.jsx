import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const [quickQuestion, setQuickQuestion] = useState('');
  const [quickAnswer, setQuickAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [showFull, setShowFull] = useState(false);

  const handleQuickSubmit = () => {
    if (!quickQuestion.trim()) return;

    setLoading(true);
    setQuickAnswer('');
    setShowFull(false);

    // Simulating a mock response
    setTimeout(() => {
      setQuickAnswer(
        "🧠 This is a mock answer. Real-time verified medical info will appear here.\n\n🔎 Question:\n" + quickQuestion
      );
      setLoading(false);
    }, 1500);
  };

  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-4">
          Trusted medical answers in seconds
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          ⚕️ No fake news. No guessing. With real scientific sources.
        </p>

        <div className="max-w-xl mx-auto">
          <input
            type="text"
            placeholder="What to do if a 5-year-old feels dizzy?"
            value={quickQuestion}
            onChange={(e) => setQuickQuestion(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          <button
            onClick={handleQuickSubmit}
            className="mt-4 bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            🔍 Ask AI
          </button>

          <p className="text-sm text-gray-500 mt-4">
            ...or use prepared templates —{' '}
            <Link to="/ask" className="text-blue-600 hover:underline font-medium">
              Go to Ask Page →
            </Link>
          </p>
        </div>

        {loading && (
          <p className="mt-6 text-blue-600 font-medium">⏳ Thinking...</p>
        )}

        {quickAnswer && (
          <div
            className={`mt-6 bg-white border border-gray-200 p-4 rounded-xl shadow-sm text-left text-gray-800 ${
              showFull ? 'max-h-64 overflow-y-auto' : ''
            }`}
          >
            <pre className={`whitespace-pre-wrap transition-all duration-300 ${showFull ? '' : 'line-clamp-3'}`}>
              {quickAnswer}
            </pre>
            {!showFull && quickAnswer.split('\n').length > 3 && (
              <button
                onClick={() => setShowFull(true)}
                className="mt-2 text-blue-600 text-sm hover:underline"
              >
                Show full answer →
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}