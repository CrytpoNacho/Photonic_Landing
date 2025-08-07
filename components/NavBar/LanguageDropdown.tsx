"use client";

import { useState } from "react";

type Language = "es" | "en" | "pt";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "pt", label: "Português", flag: "🇧🇷" },
];

export default function LanguageDropdown({
  language,
  setLanguage,
}: {
  language: Language;
  setLanguage: (lang: Language) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selected = languages.find((l) => l.code === language);

  return (
    <div className="relative inline-block text-left z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border border-gray-300 rounded-md px-3 py-1 text-sm flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#1f002c] bg-white"
      >
        <span>{selected?.flag}</span>
        <span>{selected?.label}</span>
      </button>

      {isOpen && (
        <ul className="absolute mt-2 w-full bg-white border border-gray-200 shadow-lg rounded-md overflow-hidden">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 text-sm ${
                lang.code === language ? "bg-gray-100 font-medium" : ""
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
