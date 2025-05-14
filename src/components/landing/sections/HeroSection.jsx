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
import DateRangePicker from '../../ui/DateRangePicker';
import 'react-datepicker/dist/react-datepicker.css';
import CountrySelect from '../../ui/CountrySelect';

const COLORS = ["#0066FF", "#0FB8B8", "#00A3A3", "#0074D9"];

export default function HeroSection() {
  const [quickQuestion, setQuickQuestion] = useState('');
  const { answer: quickAnswer, citations, loading, error, ask } = useAIAnswer({ useMock: false });
  const [showFull, setShowFull] = useState(false);
  const [imageBase64, setImageBase64] = useState(null);
  const [fileName, setFileName] = useState('');
  const [afterDate, setAfterDate] = useState(null);
  const [beforeDate, setBeforeDate] = useState(null);
  const [countryCode, setCountryCode] = useState(null);
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
      user_country: countryCode,
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
          <DateRangePicker
            afterDate={afterDate}
            setAfterDate={setAfterDate}
            beforeDate={beforeDate}
            setBeforeDate={setBeforeDate}
          />
          <CountrySelect
            countryCode={countryCode}
            setCountryCode={setCountryCode}
          />
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