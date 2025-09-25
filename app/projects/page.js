'use client';

import { projects } from "@/data/resume";
import { FiExternalLink } from "react-icons/fi";
import Transition from "@/components/Transition";

export default function Projects() {
  return (
    <section className="flex flex-col items-center min-h-[60vh]">
      <Transition className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl px-8 py-12 max-w-3xl w-full border border-blue-100">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-8 tracking-tight text-center transition-all duration-700">Projects</h1>
        <ul className="grid gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <li key={index} className="bg-blue-50 border border-blue-100 rounded-2xl p-6 shadow hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 font-semibold text-lg flex items-center gap-2 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
              >
                {project.title}
                <FiExternalLink className="inline text-blue-400" />
              </a>
              <p className="text-gray-700 leading-relaxed text-sm">{project.description}</p>
            </li>
          ))}
        </ul>
      </Transition>
    </section>
  );
}
