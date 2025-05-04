import { useState } from 'react';
import { Link } from 'react-router-dom';
import { examplesByCategory, categoryOptions } from '../constants/prompts';
import { validateInputs } from '../utils/validationUtils';
import { mockAnswers } from '../constants/mockAnswers';

export default function AskPage() {
  const [category, setCategory] = useState('symptom');
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [followup, setFollowup] = useState('');
  const [followupResult, setFollowupResult] = useState('');
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors = validateInputs(category, inputs);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setResult('');
    setFollowup('');
    setFollowupResult('');

    const prompt = generatePrompt(category, inputs);

    // Simulate loading delay
    setTimeout(() => {
      const answer = mockAnswers[category] || "No data available for this category.";
      setResult({ prompt, answer});
      setLoading(false);
    }, 500);
  };

  const generatePrompt = (type, values) => {
    switch (type) {
      case 'symptom':
        return `${values.gender} ${values.age} years old, ${values.symptom}. Any recommendations?`;
      case 'drugs':
        return `Can I take ${values.drug1} and ${values.drug2} together?`;
      case 'timing':
        return `I took ${values.drug1}. How long should I wait before taking ${values.drug2}?`;
      case 'alternatives':
        return `Find safer alternatives or combinations than ${values.drug1}?`;
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
    const input = (name, placeholder, width = 'w-32') => {
      const hasError = errors[name];
      const base =
        `px-3 py-2 rounded-md shadow-sm border ${width} ` +
        `focus:outline-none focus:ring-2 ` +
        (hasError
          ? 'border-red-500 focus:ring-red-500 placeholder-red-400'
          : 'border-gray-300 focus:ring-blue-300');
      return (
        <input
          key={name}
          name={name}
          value={inputs[name] || ''}
          placeholder={placeholder}
          onChange={handleInputChange}
          onFocus={() => {
            if (errors[name]) {
              setErrors(prev => {
                const updated = { ...prev };
                delete updated[name];
                return updated;
              });
            }
          }}
          className={base}
        />
      );
    };

    switch (category) {
      case 'symptom':
        return (
          <div className="flex flex-wrap items-center justify-start gap-2 text-gray-700">
            {input('gender', 'Gender')}
            {input('age', 'Age')}
            <span>years old,</span>
            {input('symptom', 'Symptom')}
            <span>. Any recommendations?</span>
          </div>
        );
  
      case 'drugs':
        return (
          <div className="flex flex-wrap items-center justify-start gap-2 text-gray-700">
            <span>Can I take</span>
            {input('drug1', 'Drug 1')}
            <span>and</span>
            {input('drug2', 'Drug 2')}
            <span>together?</span>
          </div>
        );
  
      case 'timing':
        return (
          <div className="flex flex-wrap items-center justify-start gap-2 text-gray-700">
            <span>I took</span>
            {input('drug1', 'Drug 1')}
            <span>. How long should they wait before taking</span>
            {input('drug2', 'Drug 2')}
            <span>?</span>
          </div>
        );
  
      case 'compare':
        return (
          <div className="flex flex-wrap items-center justify-start gap-2 text-gray-700">
            <span>Compare effectiveness of</span>
            {input('drug1', 'Drug 1')}
            <span>vs</span>
            {input('drug2', 'Drug 2')}
            <span>for</span>
            {input('condition', 'Condition')}
            <span>.</span>
          </div>
        );
  
      case 'alternatives':
        return (
          <div className="flex flex-wrap items-center justify-start gap-2 text-gray-700">
            <span>What are safer alternatives to</span>
            {input('drug1', 'Drug')}
            <span>?</span>
          </div>
        );
  
      case 'exercises':
        return (
          <div className="flex flex-wrap items-center justify-start gap-2 text-gray-700">
            <span>What exercises are recommended for someone with</span>
            {input('condition', 'Condition', 'w-48')}
            <span>?</span>
          </div>
        );
  
      case 'research':
        return (
          <div className="flex flex-wrap items-center justify-start gap-2 text-gray-700">
            <span>What are the latest research findings about</span>
            {input('condition', 'Condition', 'w-48')}
            <span>?</span>
          </div>
        );
  
      default:
        return null;
    }
  };

  const handleFollowup = () => {
    if (!followup.trim()) return;
    setFollowupResult("Thinking...");
  
    setTimeout(() => {
      setFollowupResult(`This is a mock follow-up answer to:\n"${followup}"`);
    }, 500);
  };

  const handleClear = () => {
    setInputs({});
    setErrors({});
    setResult('');
    setFollowup('');
    setFollowupResult('');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Ask the Assistant</h1>

        <div className="flex items-center gap-4 mb-6">
          <label className="font-semibold text-gray-700 whitespace-nowrap">Select category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm text-gray-800"
          >
            {categoryOptions.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

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
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer">
              🔍 Ask
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="bg-red-100 text-red-700 px-6 py-2 rounded-lg hover:bg-red-200 transition cursor-pointer"
            >
              🧹 Clear
            </button>
          </div>
        </form>

        {loading && (
          <div className="mt-6 text-center text-blue-600 font-medium">
            🔄 Thinking...
          </div>
        )}

        {result && !loading && (
          <>
            <div className="mt-6 bg-blue-50 border border-blue-200 p-4 rounded-xl">
              <p className="text-sm text-gray-500 italic mb-2">Prompt used:</p>
              <pre className="text-gray-800 whitespace-pre-wrap mb-4">{result.prompt}</pre>
            </div>
            <div className="mt-6 bg-blue-50 border border-blue-200 p-4 rounded-xl">
              <h2 className="text-blue-600 font-semibold mb-2">🤖 AI Answer:</h2>
              <pre className="bg-white border border-gray-200 p-4 rounded text-gray-800 whitespace-pre-wrap">{result.answer}</pre>
            </div>
          </>
        )}

        {result && !loading && (
          <div className="mt-6">
            <label className="block mb-2 font-medium text-gray-700">Want to ask a follow-up?</label>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleFollowup();
              }}
              className="flex flex-col sm:flex-row gap-2"
            >
              <input
                type="text"
                placeholder="e.g. What if the patient also has hypertension?"
                className="input w-full"
                value={followup}
                onChange={(e) => setFollowup(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer"
              >
                ➕ Ask follow-up
              </button>
            </form>
            {followupResult && (
              <div className="mt-4 bg-white border border-gray-200 p-4 rounded-xl">
                <h3 className="font-semibold text-blue-600 mb-2">🔁 Follow-up Answer:</h3>
                <pre className="whitespace-pre-wrap text-gray-800">{followupResult}</pre>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}