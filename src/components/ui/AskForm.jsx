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
          <p className="subheading mb-2">Example question:</p>
          {examplesByCategory[category].map((ex, i) => (
            <p key={i} className="body-text italic">
              {ex}
            </p>
          ))}
        </div>
      )}

      <div className="grid grid-flow-col gap-5">
        <BackToHomeButton onClick={handleGoToBack} className="min-w-[50px]" />
        <PromptPageAskButton className="min-w-[50px]"/>
        <ClearFormButton onClick={() => handleClear()} className="min-w-[50px]" />
      </div>
    </form>
  );
}