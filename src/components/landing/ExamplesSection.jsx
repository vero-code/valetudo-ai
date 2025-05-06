import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div className="bg-teal-100">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Example Questions
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
        <h2 className="text-2xl font-bold mb-4">Important</h2>
        <p className="text-md leading-relaxed">
          ❗️ This is not a diagnosis tool. It helps filter out misinformation and offers an informed first step before seeing a doctor.
        </p>
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-35%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-teal-200">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "https://images.unsplash.com/photo-1715868655465-2276c4f93f1b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGRydWd8ZW58MHx8MHx8fDI%3D",
    title: "Can I take Ibuprofen and Amiodarone together?",
    id: 1,
  },
  {
    url: "https://images.unsplash.com/photo-1573883429746-084be9b5cfca?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGRydWd8ZW58MHx8MHx8fDI%3D",
    title: "How long after Paracetamol can I take Citramon?",
    id: 2,
  },
  {
    url: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHJ1Z3xlbnwwfHwwfHx8Mg%3D%3D",
    title: "Safer alternatives to Spazmalgon",
    id: 3,
  },
];