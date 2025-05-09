export const generatePrompt = (type, values) => {
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