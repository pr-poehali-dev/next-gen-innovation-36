import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/mountain-landscape.jpg"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <p className="text-xs uppercase tracking-widest mb-4 opacity-70">Учебный справочник</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          ТУРИЗМ
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-2">
          Модуль 1 · Модуль 2
        </p>
        <p className="text-sm opacity-60 mt-4">
          НЕ ЗАБЫВАЕМ В КОЛОНТИТУЛЕ ПИСАТЬ НОМЕР РАБОЧЕГО СТОЛА И ФАМИЛИЯ С ИНИЦИАЛАМИ НА КАЖДОМ ЛИСТЕ
        </p>
      </div>
    </div>
  );
}
