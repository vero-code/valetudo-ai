import { useState } from 'react';
import { Link } from 'react-router-dom';
import { promptTemplates, examplesByCategory, categoryOptions } from '../constants/prompts';
import { mockAnswers } from '../constants/mockAnswers';

export default function AskPage() {
  const [category, setCategory] = useState('symptom');
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult('');

    const prompt = generatePrompt(category, inputs);

    // Simulate loading delay
    setTimeout(() => {
      const answer = mockAnswers[category] || "No data available for this category.";
      setResult(`${answer}\n\n📝 Prompt used:\n"${prompt}"`);
      setLoading(false);
    }, 2000);
  };

  const generatePrompt = (type, values) => {
    switch (type) {
      case 'symptom':
        return `What should I do if ${values.symptom} occurs in a ${values.age} year old ${values.gender}?`;
      case 'followup':
        return `What if the patient has ${values.condition}?`;
      case 'drugs':
        return `Can I take ${values.drug1} and ${values.drug2} together?`;
      case 'timing':
        return `I took ${values.drug1}. How long should I wait before taking ${values.drug2}?`;
      case 'alternatives':
        return `What are safer alternatives to ${values.drug1}?`;
      case 'compare':
        return `Compare effectiveness of ${values.drug1} vs ${values.drug2} for ${values.condition}.`;
      case 'exercises':
        return `What exercises are recommended for someone with ${values.condition}?`;
      case 'research':
        return `What are the latest research findings about ${values.condition}?`;
      default:
        return '';
    }
  };

  const renderFields = () => {
    switch (category) {
      case 'symptom':
        return (
          <>
            <input name="symptom" placeholder="Symptom" onChange={handleInputChange} className="input" />
            <input name="age" placeholder="Age" onChange={handleInputChange} className="input" />
            <input name="gender" placeholder="Gender" onChange={handleInputChange} className="input" />
          </>
        );
      case 'followup':
        return (
          <input
            name="condition"
            placeholder="Condition or disease (e.g. hypertension)"
            onChange={handleInputChange}
            className="input"
          />
        );
      case 'drugs':
      case 'timing':
      case 'compare':
        return (
          <>
            <input name="drug1" placeholder="Drug 1" onChange={handleInputChange} className="input" />
            <input name="drug2" placeholder="Drug 2" onChange={handleInputChange} className="input" />
            {category === 'compare' && (
              <input name="condition" placeholder="Condition" onChange={handleInputChange} className="input" />
            )}
          </>
        );
      case 'alternatives':
        return <input name="drug1" placeholder="Drug" onChange={handleInputChange} className="input" />;
      case 'exercises':
      case 'research':
        return (
          <input
            name="condition"
            placeholder="Symptom or condition (e.g. back pain)"
            onChange={handleInputChange}
            className="input"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Ask the Assistant</h1>

      <label className="block mb-2 font-semibold">Select category:</label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      >
        {categoryOptions.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      <form onSubmit={handleSubmit} className="space-y-3">
        {renderFields()}
        {examplesByCategory[category] && (
          <div className="mt-4 bg-gray-50 border border-gray-200 p-4 rounded text-sm text-gray-600">
            <p className="font-medium mb-2">Example question:</p>
            <ul className="list-disc list-inside space-y-1">
              {examplesByCategory[category].map((ex, i) => (
                <li key={i}>{ex}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Link
            to="/"
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
          >
            ← Back
          </Link>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            🔍 Ask
          </button>
          
        </div>
      </form>

      {loading && (
        <div className="mt-6 text-center text-blue-600 font-medium">
          🔄 Thinking...
        </div>
      )}

      {result && (
        <div className="mt-6 bg-gray-100 p-4 rounded shadow-sm">
          <h2 className="font-semibold mb-2">🧠 AI Answer:</h2>
          <pre className="whitespace-pre-wrap">{result}</pre>
        </div>
      )}
    </div>
  );
}