import { mockAnswer, mockAnswerFollowup } from '../constants/mockAnswers';

/**
 * Universal method for getting a response from the assistant.
 * @param {Object} options
 * @param {string} options.prompt - the main question
 * @param {string|null} [options.followup] - additional question / follow-up question
 * @param {string|null} [options.imageBase64] - Optional image in base64
 * @param {string|null} [options.search_after_date_filter] - Optional start date in MM/DD/YYYY
 * @param {string|null} [options.search_before_date_filter] - Optional end date in MM/DD/YYYY
 * @param {boolean} [options.useMock] - whether to use a mock response (defaults to false)
 * @returns {Promise<{ answer: string, citations: string[] } | null>}
 */
export async function getAnswer({
  prompt,
  followup = null,
  imageBase64 = null,
  useMock = false,
  search_after_date_filter = null,
  search_before_date_filter = null,
}) {
  if (useMock) {
    return followup ? mockAnswerFollowup : mockAnswer;
  }

  try {
    const body = {
      prompt,
      ...(followup && { followup }),
      ...(imageBase64 && { imageBase64 }),
      ...(search_after_date_filter && { search_after_date_filter }),
      ...(search_before_date_filter && { search_before_date_filter }),
    };

    const response = await fetch('http://localhost:5000/api/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
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