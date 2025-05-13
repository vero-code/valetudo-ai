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
import QuickAnswerBox from '../components/ui/QuickAnswerBox.jsx';

export default function AskPage() {
  const [category, setCategory] = useState('symptom');
  const [inputs, setInputs] = useState({});
  const [followup, setFollowup] = useState('');
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);
  const [showFull, setShowFull] = useState(false);
  const [showFollowupFull, setShowFollowupFull] = useState(false);
  const navigate = useNavigate();

  const { answer, citations, loading, ask } = useAIAnswer({ useMock: true });
  const { answer: followupAnswer, citations: followupCitations, ask: askFollowup } = useAIAnswer({ useMock: true });

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
    setShowFull(false);
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
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
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
          <QuickAnswerBox
            title="🤖 AI Answer"
            quickAnswer={answer}
            showFull={showFull}
            setShowFull={setShowFull}
            citations={citations}
          />
        )}

        {result && !loading && (
          <div className="mt-6">
            <label className="block subheading mb-2">Want to ask a follow-up?</label>
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
              <QuickAnswerBox
                title="🔁 Follow-up Answer"
                quickAnswer={followupAnswer}
                showFull={showFollowupFull}
                setShowFull={setShowFollowupFull}
                citations={followupCitations}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}