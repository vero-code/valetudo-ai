import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-4">Ready to try it?</h2>
      <p className="mb-6 text-lg">⭐ Try it for free, test the demo, or subscribe to launch</p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          to="/ask"
          className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-xl shadow hover:bg-blue-100 transition"
        >
          🚀 Try Now
        </Link>
      </div>
    </>
  );
}