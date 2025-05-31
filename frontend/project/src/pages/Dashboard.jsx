import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import HeroSection from "../components/HeroSection";
import '../index.css';

const Dashboard = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      {/* Navbar with dynamic shadow */}
      <div 
        className={`transition-all duration-300 ${
          scrolled 
            ? 'shadow-lg shadow-purple-500/30' 
            : 'shadow-md shadow-purple-300/20'
        }`}
      >
        <Navbar />
        <HeroSection />
      </div>
    </div>
  )
}

export default Dashboard