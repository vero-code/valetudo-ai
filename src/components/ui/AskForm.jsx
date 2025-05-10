import { BackToHomeButton, PromptPageAskButton, ClearFormButton } from './Buttons.jsx';
import { renderFields } from '../../utils/renderFields.jsx';

export default function AskForm({
  category,
  inputs,
  handleInputChange,
  errors,
  setErrors,
  examplesByCategory,
  handleGoToBack,
  handleClear,
  handleSubmit
}) {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-wrap items-center justify-start gap-2 body-text">
        {renderFields(category, inputs, handleInputChange, errors, setErrors)}
      </div>

      {examplesByCategory[category] && (
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-sm text-blue-800">
          <p className="body-text mb-2">Example question:</p>
          <ul className="list-disc list-inside space-y-1 body-text">
            {examplesByCategory[category].map((ex, i) => (
              <li key={i}>{ex}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid sm:grid-cols-3 gap-4">
        <BackToHomeButton onClick={handleGoToBack} />
        <PromptPageAskButton />
        <ClearFormButton onClick={() => handleClear()} />
      </div>
    </form>
  );
}