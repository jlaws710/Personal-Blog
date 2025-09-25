'use client';

import { experience } from "@/data/resume";
import { FaBriefcase } from "react-icons/fa";
import Transition from "@/components/Transition";

export default function Experience() {
  return (
    <section className="flex flex-col items-center min-h-[60vh]">
      <Transition className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl px-8 py-12 max-w-2xl w-full border border-blue-100">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-8 tracking-tight flex items-center justify-center gap-2 transition-all duration-700">
          <FaBriefcase className="text-blue-500" /> Experience
        </h1>
        <ul className="space-y-6">
          {experience.map((job, index) => (
            <li key={index} className="bg-blue-50 border border-blue-100 rounded-2xl p-6 shadow hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-2">
                <FaBriefcase className="text-blue-400" />
                <h2 className="text-xl font-semibold text-blue-800">{job.role} <span className="text-gray-600">@ {job.company}</span></h2>
              </div>
              <p className="text-sm text-gray-500 mb-2">{job.period}</p>
              <p className="text-gray-700 leading-relaxed">{job.details}</p>
            </li>
          ))}
        </ul>
      </Transition>
    </section>
  );
}
