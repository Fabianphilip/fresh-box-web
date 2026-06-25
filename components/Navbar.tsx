"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur dark:border-gray-800 dark:bg-gray-950/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/images/logo/logo.png"
            alt="FreshBox"
            width={42}
            height={42}
            priority
          />

          <span className="text-2xl font-bold text-green-600">
            FreshBox
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="/" className="hover:text-green-600">Home</a>
          <a href="#about" className="hover:text-green-600">About</a>
          <a href="#features" className="hover:text-green-600">Features</a>
          <a href="#how-it-works" className="hover:text-green-600">How It Works</a>
          <a href="#ride" className="hover:text-green-600">Ride With Us</a>
          <a href="#vendors" className="hover:text-green-600">For Vendors</a>
          <a href="#contact" className="hover:text-green-600">Contact</a>
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />

          <button className="rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700">
            Coming Soon
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-6 dark:border-gray-800 dark:bg-gray-950 md:hidden">

          <nav className="flex flex-col gap-5 text-lg">

            <a href="/" onClick={() => setMenuOpen(false)}>Home</a>

            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>

            <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>

            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
              How It Works
            </a>

            <a href="#ride" onClick={() => setMenuOpen(false)}>
              Ride With Us
            </a>

            <a href="#vendors" onClick={() => setMenuOpen(false)}>
              For Vendors
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>

            <div className="pt-2">
              <ThemeToggle />
            </div>

            <button className="mt-4 rounded-xl bg-green-600 py-3 font-semibold text-white">
              Coming Soon
            </button>

          </nav>

        </div>
      )}
    </header>
  );
}
