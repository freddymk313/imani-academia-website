"use client";

import { useState, useEffect } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Accueil", href: "#" },
  { label: "Formations", href: "#formations" },
  { label: "À propos", href: "#about" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          <Link href="/" className="flex items-center gap-2.5 group">
            Logo
            <Image
              src="/logo/logo-white.png"
              alt="Imani Academia"
              width={180}
              height={50}
              priority
              className="h-10 w-auto object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#404751] hover:text-primary *text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                {/* <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#00609a] rounded-full transition-all duration-300 group-hover:w-full" /> */}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="bg-muted text-[#404751] text-sm font-medium px-3 py-2 rounded-full hover:bg-[#f6f3f2] transition-colors">
              FR / EN
            </button>

            <Link
              href="/register"
              className="bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold hover:brightness-105 active:scale-95 transition-all duration-200 signature-shadow"
            >
              S&apos;inscrire
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl text-[#1c1b1b] hover:bg-[#f6f3f2] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden glass-nav border-t border-[#c0c7d2]/30 animate-fade-in">
          <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-[#1c1b1b] font-medium py-3 px-4 rounded-xl hover:bg-[#f6f3f2] transition-colors text-base"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 pb-2 flex flex-col gap-2">
              <a
                href="/dashboard"
                onClick={handleLinkClick}
                className="text-[#404751] font-medium py-3 px-4 rounded-xl hover:bg-[#f6f3f2] transition-colors text-base text-center"
              >
                Dashboard
              </a>
              <a
                href="/register"
                onClick={handleLinkClick}
                className="editorial-gradient text-white py-3.5 rounded-full text-base font-semibold text-center hover:brightness-105 transition-all"
              >
                S&apos;inscrire maintenant
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
