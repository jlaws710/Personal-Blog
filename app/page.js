'use client';

import { bio } from "@/data/resume";
import Transition from "@/components/Transition";
import useMountAnimation from "@/hooks/useMountAnimation";

export default function Home() {
  const mounted = useMountAnimation();

  return (
    <section className="flex justify-center items-center min-h-[60vh]">
      <Transition className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl px-8 py-12 max-w-xl w-full text-center border border-gray-100">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-2 tracking-tight transition-all duration-700">
          {bio.name}
        </h1>
        <h2 className="text-2xl text-gray-500 font-medium mb-4 transition-opacity duration-700">
          {bio.title}
        </h2>
        <hr className="my-6 border-blue-100" />
        <p className="mt-2 text-lg text-gray-700 leading-relaxed transition-opacity duration-700">
          {bio.summary}
        </p>
      </Transition>
    </section>
  );
}
