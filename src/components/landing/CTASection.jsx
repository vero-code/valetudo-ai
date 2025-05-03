import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="py-20 px-6 bg-blue-600 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to try it?</h2>
      <p className="mb-2">⭐ Try it for free</p>
      <p className="mb-2">⭐ Test the live demo</p>
      <p className="mb-6">⭐ Subscribe to the launch</p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          to="/ask"
          className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow hover:bg-blue-100 transition"
        >
          🚀 Try Now
        </Link>

      </div>
    </section>
  );
}