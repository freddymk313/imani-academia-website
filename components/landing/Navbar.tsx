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
      className={`fixed top-0 w-full z-50 py-1 md:py-2 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-sm" : "bg-background"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex md:hidden items-center justify-between h-18 py-4">
          <Link href="/" className="md:hidden flex items-center gap-2.5 group">
            <Image
              src="/logo/logo-mobile.png"
              alt="Imani Academia"
              width={180}
              height={50}
              priority
              className="h-10 w-auto object-contain"
            />
          </Link>

          <Link href="/" className="hidden md:flex items-center gap-2.5 group">
            <Image
              src="/logo/logo-white.png"
              alt="Imani Academia"
              width={180}
              height={60}
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

          <div className="flex items-center">
            <div className="md:flex items-center gap-3">
              <button className="hidden md:flex bg-muted text-[#404751] text-sm font-medium px-3 py-2 rounded-full hover:bg-[#f6f3f2] transition-colors">
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
      </div>

      {isMenuOpen && (
        <div className="md:hidden glass-nav *border-t border-[#c0c7d2]/30 animate-fade-in">
          <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-[#1c1b1b] font-semibold text-center py-3 px-4 rounded-xl hover:bg-background transition-colors text-base"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 pb-2 flex flex-col gap-2">
              <Link
                href="/register"
                onClick={handleLinkClick}
                className="bg-primary text-white py-3 rounded-full text-sm font-semibold text-center hover:brightness-105 transition-all"
              >
                S&apos;inscrire maintenant
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
