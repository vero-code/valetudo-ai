import { useEffect, useState } from 'react';
import { askAssistant } from '../../../utils/apiClient';
import { useNavigate } from 'react-router-dom';
import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  animate,
} from "framer-motion";
import { HomePageAskButton, GoToPromptPageButton } from '../../ui/Buttons';

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
      className="relative min-h-screen grid place-content-center px-6 py-24 text-[#272D45] bg-white overflow-hidden "
    >
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <h1 className="heading sm:text-5xl leading-tight mb-4 bg-gradient-to-br bg-clip-text">
          Trusted medical answers in seconds
        </h1>
        <p className="subheading mb-6">
          ⚕️ No fake news. No guessing. With real scientific sources.
        </p>

        <input
          type="text"
          placeholder="What to do if a 5-year-old feels dizzy?"
          value={quickQuestion}
          onChange={(e) => setQuickQuestion(e.target.value)}
          className="w-full px-5 py-4 rounded-xl border border-gray-300 shadow-sm text-[#272D45] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        />

        <div className="flex flex-row justify-center items-center gap-4 mt-6">
          <HomePageAskButton onClick={handleQuickSubmit} />
          <GoToPromptPageButton onClick={handleGoToAskPage} />
        </div>

        {loading && (
          <p className="mt-6 text-blue-600 font-medium animate-pulse">⏳ Thinking...</p>
        )}

        {quickAnswer && (
          <div
            className={`mt-6 bg-gray-50 border border-gray-200 p-5 rounded-xl shadow-md text-left text-[#272D45] ${
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