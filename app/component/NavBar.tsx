"use client"

import React, { useState } from 'react'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-6 sm:px-6 lg:px-10 my-7 z-50">
      <div className="glass backdrop-blur-md flex justify-between py-2 px-8 items-center rounded-xl">
        
        {/* Logo */}
        <div className="text-2xl font-black text-[var(--vert)]">
          KoniG.<span className="text-gray-50">DeV</span>
        </div>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-4 sm:gap-6 text-sm sm:text-base md:text-lg">
          <li><a href="#hero" className="hover:text-[var(--vert)] transition-colors duration-300">Accueil</a></li>
          <li><a href="#propos" className="hover:text-[var(--vert)] transition-colors duration-300">A propos</a></li>
          <li><a href="#projet" className="hover:text-[var(--vert)] transition-colors duration-300">Projets</a></li>
          <li><a href="#competence" className="hover:text-[var(--vert)] transition-colors duration-300">Compétences</a></li>
          <li><a href="#contact" className="hover:text-[var(--vert)] transition-colors duration-300">Contact</a></li>
        </ul>

        {/* Bouton hamburger mobile */}
        <button
          className="md:hidden text-gray-200 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden mt-2 glass backdrop-blur-md rounded-xl py-4 px-6">
          <ul className="flex flex-col gap-4 text-gray-200 text-base">
            <li><a href="#hero" className="hover:text-[var(--vert)] transition-colors duration-300">Accueil</a></li>
            <li><a href="#propos" className="hover:text-[var(--vert)] transition-colors duration-300">A propos</a></li>
            <li><a href="#projet" className="hover:text-[var(--vert)] transition-colors duration-300">Projets</a></li>
            <li><a href="#competence" className="hover:text-[var(--vert)] transition-colors duration-300">Compétences</a></li>
            <li><a href="#contact" className="hover:text-[var(--vert)] transition-colors duration-300">Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default NavBar