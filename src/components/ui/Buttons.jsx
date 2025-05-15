import { RxCross1 } from "react-icons/rx";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import ScramblingAskButton from "./ScramblingAskButton";

export function HomePageAskButton({ onClick, className }) {
  return (
    <ScramblingAskButton onClick={onClick} className={className} />
  );
}

export function PromptPageAskButton() {
  return (
    <ScramblingAskButton />
  );
}

export function GoToPromptPageButton({ onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full 
        flex items-center justify-center gap-2 
        body-text
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        transition-all
        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-[#2152e5]
        ${className}
      `}
    >
      TRY PROMPTS
      <BsArrowRight />
    </button>
  );
}

export function BackToHomeButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full 
        flex justify-center gap-2 
        body-text
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        transition-all
        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-[#2152e5] border border-blue-200
    `}
    >
      <div className="relative z-10 flex items-center gap-2">
          <BsArrowLeft />
          <span>BACK</span>
      </div>
    </button>
  );
}

export function ClearFormButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full 
        flex items-center justify-center gap-2 
        body-text
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        transition-all
        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-[#2152e5] border border-blue-200
      `}
    >
      <div className="relative z-10 flex items-center gap-2">
          <RxCross1 className="text-red-600" />
          <span>CLEAR</span>
      </div>
    </button>
  );
}

export function SubmitFollowUpButton() {
  return (
    <button
      type="submit"
      className="px-6 py-2 rounded-full text-blue-600 bg-blue-50 hover:bg-blue-100 transition shadow-sm border border-blue-200"
    >
      ➕ ASK FOLLOW-UP
    </button>
  );
}