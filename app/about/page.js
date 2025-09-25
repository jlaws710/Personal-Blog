'use client'

import useMountAnimation from "@/hooks/useMountAnimation";

export default function About() {
  const mounted = useMountAnimation();

  return (
    <section className="flex justify-center items-center min-h-[60vh]">
      <div
        className={`bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl px-8 py-12 max-w-2xl w-full border border-blue-100 transform transition-all duration-700 ease-out ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
        }`}
      >
        <h1 className={`text-4xl font-extrabold text-blue-700 mb-4 tracking-tight transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
          About Me
        </h1>
        <hr className="mb-6 border-blue-100" />
        <p className={`text-lg text-gray-700 leading-relaxed transition-opacity duration-700 ${mounted ? "opacity-100" : "opacity-0"}`}>
          Results-driven Software Engineer with experience in developing and maintaining microservices and web services.
          <br />
          <br />
          Adept at quickly learning and implementing new technologies to enhance application functionality.
          <br />
          <br />
          Strong background in REST API development, and cloud computing with a passion for building scalable and high performance solutions.
        </p>
      </div>
    </section>
  );
}
