import { useEffect, useState } from 'react';
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
import { useAIAnswer } from '../../../hooks/useAIAnswer';
import QuickAnswerBox from '../../ui/QuickAnswerBox';
import ImageUpload from '../../ui/ImageUpload';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as Tooltip from '@radix-ui/react-tooltip';
import { FaInfoCircle } from 'react-icons/fa';

const COLORS = ["#0066FF", "#0FB8B8", "#00A3A3", "#0074D9"];

export default function HeroSection() {
  const [quickQuestion, setQuickQuestion] = useState('');
  const { answer: quickAnswer, citations, loading, error, ask } = useAIAnswer({ useMock: false });
  const [showFull, setShowFull] = useState(false);
  const [imageBase64, setImageBase64] = useState(null);
  const [fileName, setFileName] = useState('');
  const [afterDate, setAfterDate] = useState(null);
  const [beforeDate, setBeforeDate] = useState(null);
  const navigate = useNavigate();

  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`
    linear-gradient(180deg, ${color}, #ffffff)
  `;

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
    setShowFull(false);

    if (afterDate && beforeDate && afterDate > beforeDate) {
      alert("❌ 'From date' cannot be after 'To date'.");
      return;
    }

    const formatDate = (d) => d ? `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}` : undefined;

    await ask({
      prompt: quickQuestion,
      imageBase64,
      search_after_date_filter: formatDate(afterDate),
      search_before_date_filter: formatDate(beforeDate),
    });
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

        <div className="flex justify-center gap-4 mt-4 flex-wrap">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-1 mb-1">
              <label className="text-sm font-medium text-gray-600">From date:</label>
              <Tooltip.Provider delayDuration={0}>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <FaInfoCircle className="text-gray-500 cursor-help hover:text-blue-500" />
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      side="top"
                      className="bg-black text-white text-xs rounded px-3 py-2 shadow-md max-w-xs z-50"
                    >
                      Perplexity tries to prioritize sources in this range, but may include others if few are available.
                      <Tooltip.Arrow className="fill-black" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </Tooltip.Provider>
            </div>

            <DatePicker
              selected={afterDate}
              onChange={(date) => setAfterDate(date)}
              dateFormat="MM/dd/yyyy"
              className="border rounded px-3 py-2 text-sm w-40"
              placeholderText="MM/DD/YYYY"
            />
          </div>

          <div className="flex flex-col items-start">
            <label className="text-sm font-medium text-gray-600 mb-1">To date:</label>
            <DatePicker
              selected={beforeDate}
              onChange={(date) => setBeforeDate(date)}
              dateFormat="MM/dd/yyyy"
              className="border rounded px-3 py-2 text-sm w-40"
              placeholderText="MM/DD/YYYY"
            />
          </div>
        </div>

        <ImageUpload
          onImageSelect={(base64, name) => {
            setImageBase64(base64);
            setFileName(name);
          }}
          imageName={fileName}
          onClear={() => {
            setImageBase64(null);
            setFileName('');
          }}
        />

        <div className="flex flex-row justify-center items-center gap-4 mt-6">
          <HomePageAskButton onClick={handleQuickSubmit} />
          <GoToPromptPageButton onClick={handleGoToAskPage} />
        </div>

        {loading && (
          <p className="mt-6 text-blue-600 font-medium animate-pulse">⏳ Thinking...</p>
        )}

        {quickAnswer && (
          <QuickAnswerBox
            title="🤖 AI Answer"
            quickAnswer={quickAnswer}
            showFull={showFull}
            setShowFull={setShowFull}
            citations={citations}
          />
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