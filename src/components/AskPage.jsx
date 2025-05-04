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
    }, 1000);
  };

  const generatePrompt = (type, values) => {
    switch (type) {
      case 'symptom':
        return `What should I do if ${values.symptom} occurs in a ${values.age} year old ${values.gender}?`;
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
          <div className="flex flex-wrap items-center justify-center gap-2 text-gray-700">
            <input name="gender" placeholder="Gender" onChange={handleInputChange} className="input w-32" />
            <input name="age" placeholder="Age" onChange={handleInputChange} className="input w-32" />
            <span>years old,</span>
            <input name="symptom" placeholder="Symptom" onChange={handleInputChange} className="input w-32" />
            <span>. Any recommendations?</span>
          </div>
        );
  
      case 'drugs':
        return (
          <div className="flex flex-wrap items-center justify-center gap-2 text-gray-700">
            <span>Can I take</span>
            <input name="drug1" placeholder="Drug 1" onChange={handleInputChange} className="input w-32" />
            <span>and</span>
            <input name="drug2" placeholder="Drug 2" onChange={handleInputChange} className="input w-32" />
            <span>together?</span>
          </div>
        );
  
      case 'timing':
        return (
          <div className="flex flex-wrap items-center justify-center gap-2 text-gray-700">
            <span>The patient took</span>
            <input name="drug1" placeholder="Drug 1" onChange={handleInputChange} className="input w-32" />
            <span>. How long should they wait before taking</span>
            <input name="drug2" placeholder="Drug 2" onChange={handleInputChange} className="input w-32" />
            <span>?</span>
          </div>
        );
  
      case 'compare':
        return (
          <div className="flex flex-wrap items-center justify-center gap-2 text-gray-700">
            <span>Compare effectiveness of</span>
            <input name="drug1" placeholder="Drug 1" onChange={handleInputChange} className="input w-32" />
            <span>vs</span>
            <input name="drug2" placeholder="Drug 2" onChange={handleInputChange} className="input w-32" />
            <span>for</span>
            <input name="condition" placeholder="Condition" onChange={handleInputChange} className="input w-32" />
          </div>
        );
  
      case 'alternatives':
        return (
          <div className="flex flex-wrap items-center justify-center gap-2 text-gray-700">
            <span>What are safer alternatives to</span>
            <input name="drug1" placeholder="Drug" onChange={handleInputChange} className="input w-32" />
            <span>?</span>
          </div>
        );
  
      case 'exercises':
        return (
          <div className="flex flex-wrap items-center justify-center gap-2 text-gray-700">
            <span>What exercises are recommended for someone with</span>
            <input name="condition" placeholder="Condition" onChange={handleInputChange} className="input w-48" />
            <span>?</span>
          </div>
        );
  
      case 'research':
        return (
          <div className="flex flex-wrap items-center justify-center gap-2 text-gray-700">
            <span>What are the latest research findings about</span>
            <input name="condition" placeholder="Condition" onChange={handleInputChange} className="input w-48" />
            <span>?</span>
          </div>
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
          <div className="mt-6 bg-white border border-gray-200 p-4 rounded-xl shadow-sm text-left">
            <h2 className="font-semibold mb-2 text-blue-600">🧠 AI Answer:</h2>
            <pre className="whitespace-pre-wrap text-gray-800">{result}</pre>
          </div>
        )}
      </div>
    </div>
  );
}