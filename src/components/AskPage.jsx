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
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Ask the Assistant</h1>

        <label className="block mb-2 font-semibold text-gray-700">Select category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm text-gray-800 mb-6"
        >
          {categoryOptions.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>

        <form onSubmit={handleSubmit} className="space-y-4">
          {renderFields()}

          {examplesByCategory[category] && (
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-sm text-blue-800">
              <p className="font-medium mb-2">Example question:</p>
              <ul className="list-disc list-inside space-y-1">
                {examplesByCategory[category].map((ex, i) => (
                  <li key={i}>{ex}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              ← Back
            </Link>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
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
            <div className="mt-8 bg-gray-100 border border-gray-300 p-5 rounded-lg shadow-sm">
              <h2 className="font-semibold text-blue-700 mb-2">🧠 AI Answer:</h2>
              <pre className="whitespace-pre-wrap text-gray-800">{result}</pre>
          </div>
        )}
      </div>
    </div>
  );
}