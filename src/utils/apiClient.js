export async function askAssistant({ prompt, followup = null }) {
  try {
    const response = await fetch('http://localhost:5000/api/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(followup ? { prompt, followup } : { prompt }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(`API Error: ${response.status}`);
    return data.answer;
  } catch (error) {
    console.error('API error:', error);
    return null;
  }
}