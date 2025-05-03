export default function HeroSection() {
    return (
      <section className="py-20 px-6 text-center bg-gray-50">
        <h1 className="text-4xl font-bold mb-4">Trusted medical answers in seconds</h1>
        <p className="text-lg mb-6">⚕️ No fake news. No guessing. With real scientific sources.</p>
        <div className="max-w-xl mx-auto">
          <input
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm"
            placeholder="What to do if a 5-year-old feels dizzy?"
          />
        </div>
        <div>
          <p>...or use prepared templates</p>
          <p><a href="/ask" className="text-blue-500 hover:underline">
              Go to Ask Page
              </a>
          </p>
        </div>
      </section>
    );
  }