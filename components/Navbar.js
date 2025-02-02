import { useState } from 'react'
import Link from 'next/link'
import { useRef } from 'react'

export default function Navbar() {
  const aboutSectionRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const scrollToAboutRef = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  // Smooth-scroll to the #about section on the same page
  const handleScrollToAbout = () => {
    // If there's an element with id="about", scroll to it
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="bg-[#fdf8f4] shadow sticky top-0 z-50 font-serif">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Brand / Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              {/* A <span> since <a> might be disabled in your config */}
              <span className="text-2xl font-semibold text-amber-800 hover:text-amber-900 cursor-pointer">
                Bridge
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {/* Home Link */}
            <Link href="/">
              <span className="text-slate-700 hover:text-slate-900 cursor-pointer transition">
                Home
              </span>
            </Link>

            {/* Patient Info -> /patient-info form */}
            <Link href="/patient-info">
              <span className="text-slate-700 hover:text-slate-900 cursor-pointer transition">
                Patient Form
              </span>
            </Link>

            {/* Contact link (or whatever else you prefer) */}
            <Link href="/contact">
              <span className="text-slate-700 hover:text-slate-900 cursor-pointer transition">
                Contact
              </span>
            </Link>
          </div>

          {/* Hamburger (mobile) button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (collapsible) */}
      {isOpen && (
        <div className="md:hidden bg-[#fdf8f4] shadow-inner">
          <div className="px-4 pt-2 pb-3 space-y-2">
            {/* Home */}
            <Link href="/">
              <span
                onClick={() => setIsOpen(false)}
                className="block text-slate-700 hover:text-slate-900 transition cursor-pointer"
              >
                Home
              </span>
            </Link>
            {/* About -> scroll */}
            <span
              onClick={() => {
                setIsOpen(false)
                handleScrollToAbout()
              }}
              className="block text-slate-700 hover:text-slate-900 transition cursor-pointer"
            >
              About Us
            </span>
            {/* Patient Info */}
            <Link href="/patient-info">
              <span
                onClick={() => setIsOpen(false)}
                className="block text-slate-700 hover:text-slate-900 transition cursor-pointer"
              >
                Patient Info
              </span>
            </Link>
            {/* Contact */}
            <Link href="/contact">
              <span
                onClick={() => setIsOpen(false)}
                className="block text-slate-700 hover:text-slate-900 transition cursor-pointer"
              >
                Contact
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
