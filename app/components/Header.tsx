"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <h1 className="text-xl font-bold text-purple-400">Luis Dev</h1>
      <nav className="space-x-6">
        <a href="#about" className="hover:text-purple-300">
          Sobre mí
        </a>
        <a href="#skills" className="hover:text-purple-300">
          Skills
        </a>
        <a href="#projects" className="hover:text-purple-300">
          Proyectos
        </a>
        <a href="#contact" className="hover:text-purple-300">
          Contacto
        </a>
      </nav>
    </header>
  );
}
