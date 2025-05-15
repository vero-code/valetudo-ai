import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { LuTriangle } from "react-icons/lu";

const TARGET_TEXT = "Ask AI";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const ScramblingAskButton = ({ onClick, className = "" }) => {
  const intervalRef = useRef(null);
  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;
    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) =>
          pos / CYCLES_PER_LETTER > index
            ? char
            : CHARS[Math.floor(Math.random() * CHARS.length)]
        )
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);
    setText(TARGET_TEXT);
  };

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.975 }}
      className={`
        group relative flex justify-center items-center overflow-hidden
        rounded-full border border-blue-200
        bg-gradient-to-r from-blue-500 to-blue-700
        px-4 py-2 font-medium uppercase text-white transition-colors hover:text-white
        ${className}
      `}
    >
      <div className="relative z-10 flex items-center gap-2">
        <LuTriangle className="rotate-90" />
        <span>{text}</span>
      </div>
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  );
};

export default ScramblingAskButton;