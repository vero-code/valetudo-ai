import Select from 'react-select';
import { getData } from 'country-list';

const countryOptions = getData().map(({ code, name }) => ({
  value: code,
  label: name,
}));

export default function CountrySelect({ countryCode, setCountryCode }) {
  return (
    <div className="mt-4 text-left">
      <label className="block text-sm font-medium text-gray-600 mb-1">
        🌍 Consider country (optional):
        <span
          title="Use country as a hint. To get localized results, mention the country in your question."
          className="ml-1 cursor-help"
        >
          ℹ️
        </span>
      </label>
      <Select
        options={countryOptions}
        isClearable
        placeholder="Select country..."
        className="text-left"
        onChange={(selected) => setCountryCode(selected?.value || null)}
        value={countryOptions.find((option) => option.value === countryCode) || null}
      />
    </div>
  );
}