import { mockAnswer } from '../constants/mockAnswers';

/**
 * Universal method for getting a response from the assistant.
 * @param {Object} options
 * @param {string} options.prompt - the main question
 * @param {string|null} [options.followup] - additional question / follow-up question
 * @param {boolean} [options.useMock] - whether to use a mock response (defaults to false)
 * @returns {Promise<{ answer: string, citations: string[] } | null>}
 */
export async function askAssistant({ prompt, followup = null, useMock = false }) {
  if (useMock) {
    return mockAnswer;
  }

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

    return {
      answer: data.answer,
      citations: data.citations || [],
    };
  } catch (error) {
    console.error('API error:', error);
    return null;
  }
}