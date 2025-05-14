export const renderFields = (category, inputs, handleInputChange, errors, setErrors) => {
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
        <>
          {input('gender', 'Gender')}
          {input('age', 'Age')}
          <span>years old,</span>
          {input('symptom', 'Symptom')}
          <span>. Any recommendations?</span>
        </>
      );

    case 'drugs':
      return (
        <>
          <span>Can I take</span>
          {input('drug1', 'Drug 1')}
          <span>and</span>
          {input('drug2', 'Drug 2')}
          <span>together?</span>
        </>
      );

    case 'timing':
      return (
        <>
          <span>I took</span>
          {input('drug1', 'Drug 1')}
          <span>. How long should I wait before taking</span>
          {input('drug2', 'Drug 2')}
          <span>?</span>
        </>
      );

    case 'compare':
      return (
        <>
          <span>Compare effectiveness of</span>
          {input('drug1', 'Drug 1')}
          <span>vs</span>
          {input('drug2', 'Drug 2')}
          <span>for</span>
          {input('condition', 'Condition')}
          <span>.</span>
        </>
      );

    case 'alternatives':
      return (
        <>
          <span>What are safer alternatives to</span>
          {input('drug1', 'Drug')}
          <span>?</span>
        </>
      );

    case 'exercises':
      return (
        <>
          <span>What exercises are recommended for someone with</span>
          {input('condition', 'Condition', 'w-48')}
          <span>?</span>
        </>
      );

    case 'research':
      return (
        <>
          <span>What are the latest research findings about</span>
          {input('condition', 'Condition', 'w-48')}
          <span>?</span>
        </>
      );

    default:
      return null;
  }
};