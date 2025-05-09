import { BackButton, AskButton, ClearButton } from './Buttons.jsx';
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
  );
}