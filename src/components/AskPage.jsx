import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { examplesByCategory, categoryOptions } from '../constants/prompts';
import { validateInputs } from '../utils/validationUtils';
import { askAssistant } from '../utils/apiClient';
import { generatePrompt } from '../utils/generatePrompt.jsx';
import { renderFields } from '../utils/renderFields.jsx';
import CategorySelect from './ui/CategorySelect.jsx';
import { BackButton, AskButton, ClearButton, FollowUpButton } from './ui/Buttons';

export default function AskPage() {
  const [category, setCategory] = useState('symptom');
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [followup, setFollowup] = useState('');
  const [followupResult, setFollowupResult] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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
    // const answer = await askAssistant({ prompt });
    const answer = "Answer example"
    setResult({ prompt, answer: answer || 'An error occurred while contacting the assistant.' });

    setLoading(false);
  };

  const handleFollowup = async () => {
    if (!followup.trim()) return;
    setFollowupResult("Thinking...");
  
    // const answer = await askAssistant({
    //   prompt: result.prompt,
    //   followup: followup
    // });
    const answer = "Answer example";
    setFollowupResult(answer || "An error occurred while contacting the assistant.");
  };

  const handleClear = (newCategory) => {
    if (newCategory) setCategory(newCategory);
    setInputs({});
    setErrors({});
    setResult('');
    setFollowup('');
    setFollowupResult('');
  };

  const handleGoToBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2980b9] to-[#dcefee] py-24 px-4">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Ask the Assistant</h1>

        <div className="flex items-center gap-4 mb-6">
          <label className="font-semibold text-gray-700 whitespace-nowrap">Select category:</label>
          <CategorySelect
            value={category}
            onChange={(val) => setCategory(val)}
            options={categoryOptions}
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {renderFields(category, inputs, handleInputChange, errors, setErrors)}

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

          <div className="grid sm:grid-cols-3 gap-4">
            <BackButton onClick={handleGoToBack} />
            <AskButton />
            <ClearButton onClick={() => handleClear()} />
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
              <FollowUpButton />
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