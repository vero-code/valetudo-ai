import { Link } from 'react-router-dom';

export default function HeroSection() {
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
              className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <p className="text-sm text-gray-500 mt-3">
              ...or use prepared templates —{' '}
              <Link to="/ask" className="text-blue-600 hover:underline font-medium">
                Go to Ask Page →
              </Link>
            </p>
          </div>
        </div>
      </section>
    );
  }