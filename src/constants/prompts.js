export const promptTemplates = {
  symptom: 'What should I do if [symptom] occurs in a [age] year old [gender]?',
  followup: 'What if the patient has [condition]?',
  drugs: 'Can I take [drug1] and [drug2] together?',
  timing: 'I took [drug1]. How long should I wait before taking [drug2]?',
  alternatives: 'What are safer alternatives to [drug1]?',
  compare: 'Compare effectiveness of [drug1] vs [drug2] for [condition].',
  exercises: 'What exercises are recommended for someone with [symptom or condition]?',
  research: 'What are the latest research findings about [symptom or condition]?',
};

export const examplesByCategory = {
  symptom: [
    "What should I do if a 20-year-old man has sudden weakness and dizziness?",
  ],
  followup: [
    "What if the patient has hypertension?",
  ],
  drugs: [
    "Can I take Paracetamol and No-Spa together?",
  ],
  timing: [
    "The patient took Ibuprofen. How long should they wait before taking Amiodarone?",
  ],
  alternatives: [
    "Find safer alternatives or combinations than Spazmalgon.",
  ],
  compare: [
    "Effectiveness of Ibuprofen versus Paracetamol for pain treatment.",
  ],
  exercises: [
    "What exercises are recommended for someone with lower back pain?",
  ],
  research: [
    "What are the latest research findings about migraine treatment?",
  ],
};

export const categoryOptions = [
  { value: 'symptom', label: '💬 Recommendation' },
  { value: 'followup', label: '🔄 Follow-up condition' },
  { value: 'drugs', label: '🧪 Drug compatibility' },
  { value: 'timing', label: '⏱ Drug timing' },
  { value: 'alternatives', label: '✅ Safer alternatives' },
  { value: 'compare', label: '⚖️ Compare effectiveness' },
  { value: 'exercises', label: '🏃 Recommended exercises' },
  { value: 'research', label: '🧬 Latest research' },
];