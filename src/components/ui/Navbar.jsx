import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Droplets, User, Crown, ChevronDown } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import LanguageSelector from './LanguageSelector'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const location = useLocation()
  const { t } = useLanguage()
  const moreDropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target)) {
        setIsMoreOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const navItems = [
    { name: t('navbar.home'), path: '/' },
    { name: t('navbar.moodTracker'), path: '/mood-tracker' },
    { name: t('navbar.aiChat'), path: '/chat' },
    { name: t('navbar.journal'), path: '/journal' },
    { name: t('navbar.soundTherapy'), path: '/sound-therapy' },
    { name: t('navbar.breathing'), path: '/breathing-exercises' },
    { name: t('navbar.therapy'), path: '/therapy-booking' },
    { name: t('navbar.resources'), path: '/resource-hub' },
    { name: t('navbar.community'), path: '/community' },
  ]

  return (
    <>
      <nav className="fixed top-0 w-full z-40 glass-card border-b border-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Droplets className="h-8 w-8 text-primary-600" />
              </motion.div>
              <span className="text-xl font-display font-bold gradient-text group-hover:scale-105 transition-transform duration-200">
                Wellspring
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-2.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-secondary-600 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Medium Screen Navigation - Show fewer items */}
            <div className="hidden md:flex lg:hidden items-center space-x-1">
              {navItems.slice(0, 5).map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-2 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-secondary-600 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* More dropdown for medium screens */}
              <div className="relative" ref={moreDropdownRef}>
                <button
                  onClick={() => setIsMoreOpen(!isMoreOpen)}
                  className="px-2 py-2 rounded-lg text-sm font-medium text-secondary-600 hover:bg-primary-50 hover:text-primary-600 transition-all duration-200 flex items-center space-x-1"
                >
                  <span>More</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${isMoreOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isMoreOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-primary-100 py-1 z-50"
                    >
                      {navItems.slice(5).map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setIsMoreOpen(false)}
                          className={`block px-3 py-2 text-sm font-medium transition-all duration-200 ${
                            location.pathname === item.path
                              ? 'bg-primary-50 text-primary-700'
                              : 'text-secondary-600 hover:bg-primary-50 hover:text-primary-600'
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right Side Items */}
            <div className="hidden lg:flex items-center space-x-2">
              <Link
                to="/subscription"
                className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 px-3 py-2 rounded-lg font-medium hover:from-yellow-400 hover:to-yellow-600 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <Crown size={16} />
                <span>{t('navbar.premium')}</span>
              </Link>
              <LanguageSelector />
              <button className="p-2 rounded-lg text-secondary-600 hover:bg-primary-50 hover:text-primary-600 transition-all duration-200">
                <User size={20} />
              </button>
            </div>

            {/* Medium Screen Right Side Items */}
            <div className="hidden md:flex lg:hidden items-center space-x-2">
              <Link
                to="/subscription"
                className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 px-2 py-2 rounded-lg font-medium hover:from-yellow-400 hover:to-yellow-600 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <Crown size={14} />
                <span className="text-sm">{t('navbar.premium')}</span>
              </Link>
              <LanguageSelector />
              <button className="p-2 rounded-lg text-secondary-600 hover:bg-primary-50 hover:text-primary-600 transition-all duration-200">
                <User size={18} />
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-secondary-600 hover:bg-primary-50 hover:text-primary-600 transition-all duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-primary-100 bg-white/95 backdrop-blur-sm"
            >
              <div className="px-4 py-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      location.pathname === item.path
                        ? 'bg-primary-100 text-primary-700'
                        : 'text-secondary-600 hover:bg-primary-50 hover:text-primary-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/subscription"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 px-3 py-2 rounded-lg font-medium mt-2"
                >
                  <Crown size={16} />
                  <span>{t('navbar.premium')}</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div className="h-16"></div>
    </>
  )
}

export default Navbar