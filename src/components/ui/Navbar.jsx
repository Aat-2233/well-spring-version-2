import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Droplets, User, Crown } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Mood Tracker', path: '/mood-tracker' },
    { name: 'AI Chat', path: '/chat' },
    { name: 'Journal', path: '/journal' },
    { name: 'Sound Therapy', path: '/sound-therapy' },
    { name: 'Breathing', path: '/breathing-exercises' },
    { name: 'Therapy', path: '/therapy-booking' },
    { name: 'Community', path: '/community' },
    { name: 'Resources', path: '/resources' },
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
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-secondary-600 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right Side Items */}
            <div className="hidden md:flex items-center space-x-3">
              <Link
                to="/subscription"
                className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 px-4 py-2 rounded-lg font-medium hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <Crown size={16} />
                <span>Premium</span>
              </Link>
              <button className="p-2 rounded-lg text-secondary-600 hover:bg-primary-50 hover:text-primary-600 transition-all duration-200">
                <User size={20} />
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
                  <span>Premium</span>
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