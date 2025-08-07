"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import { translations, type Language } from "@/lib/translations";
import Image from "next/image";

const LANGUAGES = [
  { code: "es", label: "Español", flag: "/flags/es.png" },
  { code: "en", label: "English", flag: "/flags/en.png" },
  { code: "pt", label: "Português", flag: "/flags/pt.png" },
];

interface NavBarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function NavBar({ language, setLanguage }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[language];

  const handleMobileNavClick = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#top">
                <Image
                  src="/images/photonicsoftware_logo-removebg-preview.png"
                  alt="Photonic Software Logo"
                  width={0}
                  height={0}
                  className="h-20 w-auto cursor-pointer"
                  priority
                />
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className="text-gray-700 hover:text-[#1f002c] transition-colors">
                {t.nav.services}
              </a>
              <a href="#technologies" className="text-gray-700 hover:text-[#1f002c] transition-colors">
                {t.nav.technologies}
              </a>
              <a href="#projects" className="text-gray-700 hover:text-[#1f002c] transition-colors">
                {t.nav.projects}
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-[#1f002c] transition-colors">
                {t.nav.testimonials}
              </a>
              <a href="#contact" className="text-gray-700 hover:text-[#1f002c] transition-colors">
                {t.nav.contact}
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Language Selector con banderas */}
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 text-sm px-3 py-1"
                >
                <Image
                    src={LANGUAGES.find((l) => l.code === language)?.flag || "/flags/en.png"}
                    alt="flag"
                    width={20}
                    height={14}
                    className="rounded-sm"
                />
                {LANGUAGES.find((l) => l.code === language)?.label}
                <ChevronDown className="w-4 h-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {LANGUAGES.map((lang) => (
                <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as Language)}
                    className="flex items-center gap-2"
                >
                    <Image
                    src={lang.flag}
                    alt={`${lang.label} flag`}
                    width={20}
                    height={14}
                    className="rounded-sm"
                    />
                    {lang.label}
                </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu toggle */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a
              href="#services"
              className="block px-3 py-2 text-gray-700 hover:text-[#1f002c]"
              onClick={handleMobileNavClick}
            >
              {t.nav.services}
            </a>
            <a
              href="#technologies"
              className="block px-3 py-2 text-gray-700 hover:text-[#1f002c]"
              onClick={handleMobileNavClick}
            >
              {t.nav.technologies}
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 text-gray-700 hover:text-[#1f002c]"
              onClick={handleMobileNavClick}
            >
              {t.nav.projects}
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 text-gray-700 hover:text-[#1f002c]"
              onClick={handleMobileNavClick}
            >
              {t.nav.testimonials}
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-[#1f002c]"
              onClick={handleMobileNavClick}
            >
              {t.nav.contact}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
