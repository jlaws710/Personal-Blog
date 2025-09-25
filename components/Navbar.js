"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-gray-900 text-white shadow">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between" aria-label="Main navigation">
        <div className="flex items-center space-x-2">
          {/* Logo/Icon */}
          <span className="text-2xl font-extrabold tracking-tight">📝</span>
          <span className="text-xl font-bold">Personal Blog</span>
        </div>
        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} legacyBehavior>
                <a
                  className={`px-3 py-2 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-gray-800 ${
                    pathname === href ? "bg-blue-600 text-white" : ""
                  }`}
                  aria-current={pathname === href ? "page" : undefined}
                >
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>
      {/* Mobile Menu */}
        {menuOpen && (
        <ul className="md:hidden bg-gray-900 px-4 pb-4 space-y-2 animate-fade-in">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} legacyBehavior>
                <a
                  className={`block px-3 py-2 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-gray-800 ${
                    pathname === href ? "bg-blue-600 text-white" : ""
                  }`}
                  aria-current={pathname === href ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}