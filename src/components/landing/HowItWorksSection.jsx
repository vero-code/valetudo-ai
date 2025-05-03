export default function HowItWorksSection() {
    return (
      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <ol className="space-y-2 list-decimal list-inside text-gray-700">
          <li>You enter your question</li>
          <li>AI looks up reliable, real-time medical information</li>
          <li>You get a clear answer with sources</li>
          <li>You can ask follow-up questions like “What if they have diabetes?”</li>
        </ol>
      </section>
    );
  }