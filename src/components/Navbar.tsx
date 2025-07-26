'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Gift } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed w-full z-50 px-4 transition-all ${scrolled ? 'bg-white/95 backdrop-blur-md py-2 shadow-sm' : 'bg-transparent py-3'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#Hero" 
          onClick={(e) => { e.preventDefault(); scrollTo('Hero') }} 
          className="text-xl font-bold"
        >
          Print<span className="text-pink-600">Smart</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); scrollTo('about') }}
            className="text-sm font-medium hover:text-pink-600 transition-colors"
          >
            About
          </a>
          <a
            href="#services"
            onClick={(e) => { e.preventDefault(); scrollTo('services') }}
            className="text-sm font-medium hover:text-pink-600 transition-colors"
          >
            Services
          </a>
          <a
              href="#gift-collab"
              onClick={(e) => { e.preventDefault(); scrollTo('gift-collab') }}
              className="flex items-center gap-2 px-4 py-3 rounded-md hover:bg-pink-50 text-gray-900 font-medium"
            >
              <Gift size={16} className="text-pink-600" />
              GiftSmart
            </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo('contact') }}
            className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-1.5 rounded-md text-sm font-medium transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg divide-y divide-gray-100">
          <div className="p-2 space-y-1">
            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); scrollTo('about') }}
              className="block px-4 py-3 rounded-md hover:bg-pink-50 text-gray-900 font-medium"
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => { e.preventDefault(); scrollTo('services') }}
              className="block px-4 py-3 rounded-md hover:bg-pink-50 text-gray-900 font-medium"
            >
              Services
            </a>
            <a
              href="#gift-collab"
              onClick={(e) => { e.preventDefault(); scrollTo('gift-collab') }}
              className="flex items-center gap-2 px-4 py-3 rounded-md hover:bg-pink-50 text-gray-900 font-medium"
            >
              <Gift size={17} className="text-pink-600" />
              GiftSmart
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('contact') }}
              className="block px-4 py-3 rounded-md bg-pink-600 text-white font-medium text-center"
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}