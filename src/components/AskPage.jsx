import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { examplesByCategory, categoryOptions } from '../constants/prompts';
import { validateInputs } from '../utils/validationUtils';
import { generatePrompt } from '../utils/generatePrompt.jsx';
import CategorySelect from './ui/CategorySelect.jsx';
import { SubmitFollowUpButton } from './ui/Buttons';
import AskForm from './ui/AskForm.jsx';
import { handleClear, handleGoToBack } from '../utils/handlers';
import { useAIAnswer } from '../hooks/useAIAnswer';

export default function AskPage() {
  const [category, setCategory] = useState('symptom');
  const [inputs, setInputs] = useState({});
  const [followup, setFollowup] = useState('');
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const { answer, citations, loading, ask } = useAIAnswer({ useMock: true });
  const { answer: followupAnswer, ask: askFollowup } = useAIAnswer({ useMock: true });

  const clearHandler = handleClear(setCategory, setInputs, setErrors, setResult, setFollowup, () => {});
  const goToBackHandler = handleGoToBack(navigate);

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
    setFollowup('');
    setResult(null);

    const prompt = generatePrompt(category, inputs);
    await ask({ prompt });
    setResult({ prompt });
  };

  const handleFollowup = async () => {
    if (!followup.trim()) return;
    await askFollowup({ prompt: result.prompt, followup });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2980b9] to-[#dcefee] py-24 px-4">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="heading text-center mb-10">🩺 Ask the Assistant</h1>

        <div className="flex items-center gap-4 mb-6">
          <label className="subheading">Select category:</label>
          <CategorySelect
            value={category}
            onChange={(val) => setCategory(val)}
            options={categoryOptions}
          />
        </div>

        <AskForm
          category={category}
          inputs={inputs}
          handleInputChange={handleInputChange}
          errors={errors}
          setErrors={setErrors}
          examplesByCategory={examplesByCategory}
          handleGoToBack={goToBackHandler}
          handleClear={clearHandler}
          handleSubmit={handleSubmit}
        />

        {loading && (
          <div className="mt-6 body-text text-center">
            🔄 Thinking...
          </div>
        )}

        {result && !loading && (
          <>
            <div className="mt-6 bg-blue-50 border border-blue-200 p-4 rounded-xl">
              <p className="subheading mb-2">Prompt used:</p>
              <pre className="body-text italic whitespace-pre-wrap mb-4">{result.prompt}</pre>
            </div>
            <div className="mt-6 bg-blue-50 border border-blue-200 p-4 rounded-xl">
              <h2 className="text-blue-600 font-semibold mb-2">🤖 AI Answer:</h2>
              <pre className="bg-white border border-gray-200 p-4 rounded text-gray-800 whitespace-pre-wrap">{answer}</pre>

              {citations.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-semibold">Sources:</h4>
                  <ol className="list-decimal list-inside text-blue-600 text-sm mt-2">
                    {citations.map((url, i) => (
                      <li key={i}>
                        <a href={url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {url}
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
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
                placeholder="e.g. What if the I also has hypertension?"
                className="input w-full"
                value={followup}
                onChange={(e) => setFollowup(e.target.value)}
              />
              <SubmitFollowUpButton />
            </form>
            {followup && followupAnswer && (
              <div className="mt-4 bg-white border border-gray-200 p-4 rounded-xl">
                <h3 className="font-semibold text-blue-600 mb-2">🔁 Follow-up Answer:</h3>
                <pre className="whitespace-pre-wrap text-gray-800">{followupAnswer}</pre>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}