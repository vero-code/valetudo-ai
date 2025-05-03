export default function HelpSection() {
    return (
      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-2xl font-semibold mb-4">How Valetudo AI Helps</h2>
        <ul className="space-y-3 text-gray-700 max-w-2xl mx-auto">
          <li>🤖 AI assistant with real-time internet access</li>
          <li>📚 Citations from clinical guidelines and medical studies</li>
          <li>💬 Support for follow-up questions (“What if the patient is 70?”)</li>
          <li>💊 Checks for drug compatibility and safer alternatives</li>
        </ul>
      </section>
    );
  }