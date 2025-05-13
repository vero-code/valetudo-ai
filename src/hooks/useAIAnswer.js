import { useState } from "react";
import { getAnswer } from "../utils/apiClient";

/**
 * Hook for interacting with the AI assistant, with mock support.
 * @param {Object} options
 * @param {boolean} options.useMock
 */
export function useAIAnswer({ useMock = false } = {}) {
  const [answer, setAnswer] = useState("");
  const [citations, setCitations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Make a request to the assistant.
   * @param {Object} params
   * @param {string} params.prompt
   * @param {string} [params.followup]
   */
  const ask = async ({ prompt, followup = null }) => {
    if (!prompt.trim()) return;

    setAnswer("");
    setCitations([]);
    setLoading(true);
    setError(null);

    const result = await getAnswer({ prompt, followup, useMock });

    if (!result) {
      setError("❌ Failed to get answer from assistant.");
    } else {
      setAnswer(result.answer);
      setCitations(result.citations || []);
    }

    setLoading(false);
  };

  return {
    answer,
    citations,
    loading,
    error,
    ask,
  };
}