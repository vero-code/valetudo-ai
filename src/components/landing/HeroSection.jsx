import { useEffect, useState } from 'react';
import { askAssistant } from '../../utils/apiClient';
import { useNavigate } from 'react-router-dom';
import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  animate,
} from "framer-motion";

const COLORS = ["#0066FF", "#0FB8B8", "#00A3A3", "#0074D9"];

export default function HeroSection() {
  const [quickQuestion, setQuickQuestion] = useState('');
  const [quickAnswer, setQuickAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [showFull, setShowFull] = useState(false);
  const navigate = useNavigate();

  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`
    linear-gradient(180deg, ${color}, #ffffff)
  `;

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0 0 0.5rem ${color}`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const handleQuickSubmit = async () => {
    if (!quickQuestion.trim()) return;

    setLoading(true);
    setQuickAnswer('');
    setShowFull(false);

    // Real API call
    // const answer = await askAssistant({ prompt: quickQuestion });
    // setQuickAnswer(answer || 'An error occurred while contacting the assistant.');
    // setLoading(false);

    // Simulating a mock response
    setTimeout(() => {
      setQuickAnswer(
        "🧠 This is a mock answer. Real-time verified medical info will appear here.\n\n🔎 Question:\n" + quickQuestion
      );
      setLoading(false);
    }, 2000);
  };

  const handleGoToAskPage = () => {
    navigate('/ask');
  };

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative min-h-screen grid place-content-center px-6 py-24 text-gray-900 bg-white overflow-hidden "
    >
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4 bg-gradient-to-br text-gray-800 bg-clip-text">
          Trusted medical answers in seconds
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          ⚕️ No fake news. No guessing. With real scientific sources.
        </p>

        <input
          type="text"
          placeholder="What to do if a 5-year-old feels dizzy?"
          value={quickQuestion}
          onChange={(e) => setQuickQuestion(e.target.value)}
          className="w-full px-5 py-4 rounded-xl border border-gray-300 shadow-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        />

        <div className="flex flex-col items-center gap-2 mt-6">
          <motion.button
            onClick={handleQuickSubmit}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 rounded-full text-white font-semibold transition-all cursor-pointer bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            🔍 Ask AI
          </motion.button>

          <motion.button
            onClick={handleGoToAskPage}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex flex-wrap justify-center items-center gap-1 px-6 py-3 mt-4 rounded-full border border-cyan-600 text-cyan-700 font-medium bg-white/60 backdrop-blur-sm hover:bg-cyan-50 hover:text-cyan-800 hover:ring-2 hover:ring-cyan-200 transition-all shadow-sm text-sm sm:text-base text-center cursor-pointer"
          >
            💡 Not sure what to ask?
            <span className="underline underline-offset-2">Try a suggested question</span>
          </motion.button>
        </div>

        {loading && (
          <p className="mt-6 text-blue-600 font-medium animate-pulse">⏳ Thinking...</p>
        )}

        {quickAnswer && (
          <div
            className={`mt-6 bg-gray-50 border border-gray-200 p-5 rounded-xl shadow-md text-left text-gray-800 ${
              showFull ? "max-h-96 overflow-y-auto" : ""
            }`}
          >
            <pre
              className={`whitespace-pre-wrap transition-all duration-300 ${
                showFull ? "" : "line-clamp-3"
              }`}
            >
              {quickAnswer}
            </pre>
            {!showFull && quickAnswer.split("\n").length > 3 && (
              <button
                onClick={() => setShowFull(true)}
                className="mt-2 text-blue-600 text-sm hover:underline"
              >
                Show full answer →
              </button>
            )}
          </div>
        )}
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Sparkles count={100} scale={[10, 10, 10]} speed={1} size={2} />
        </Canvas>
      </div>
    </motion.section>
  );
}