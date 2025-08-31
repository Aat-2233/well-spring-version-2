import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, MapPin, Clock, Video, MessageSquare, Phone, Calendar, CheckCircle, Award, Users, Heart, Shield } from 'lucide-react'

const TherapyBooking = () => {
  const [selectedTherapist, setSelectedTherapist] = useState(null)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [sessionType, setSessionType] = useState('video')
  const [bookingStep, setBookingStep] = useState(1)
  const [showBookingSuccess, setShowBookingSuccess] = useState(false)
  const [filterSpecialty, setFilterSpecialty] = useState('all')
  const [filterLanguage, setFilterLanguage] = useState('all')

  const therapists = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      specialties: ["Anxiety", "Depression", "Stress Management"],
      languages: ["English", "Hindi"],
      experience: "8 years",
      rating: 4.9,
      reviews: 156,
      price: 1500,
      location: "Mumbai",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      bio: "Specialized in cognitive behavioral therapy with a focus on anxiety and depression management.",
      education: "PhD in Clinical Psychology, AIIMS Delhi",
      approach: "CBT, Mindfulness-based therapy",
      availability: ["Mon", "Wed", "Fri", "Sat"]
    },
    {
      id: 2,
      name: "Dr. Rahul Mehta",
      specialties: ["Relationship Counseling", "Family Therapy", "Communication"],
      languages: ["English", "Hindi", "Gujarati"],
      experience: "12 years",
      rating: 4.8,
      reviews: 203,
      price: 2000,
      location: "Delhi",
      avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
      bio: "Expert in relationship dynamics and family systems therapy with over a decade of experience.",
      education: "Masters in Marriage & Family Therapy",
      approach: "Systems therapy, EFT",
      availability: ["Tue", "Thu", "Sat", "Sun"]
    },
    {
      id: 3,
      name: "Dr. Ananya Rao",
      specialties: ["Student Counseling", "Career Guidance", "Academic Stress"],
      languages: ["English", "Telugu", "Tamil"],
      experience: "6 years",
      rating: 4.9,
      reviews: 89,
      price: 1200,
      location: "Bangalore",
      avatar: "https://images.unsplash.com/photo-1594824848637-114b6a4b1be5?w=150&h=150&fit=crop&crop=face",
      bio: "Specializes in helping students navigate academic challenges and career decisions.",
      education: "M.Phil in Counseling Psychology",
      approach: "Solution-focused therapy, Career counseling",
      availability: ["Mon", "Wed", "Thu", "Fri"]
    },
    {
      id: 4,
      name: "Dr. Vikram Singh",
      specialties: ["Trauma Therapy", "PTSD", "Addiction Counseling"],
      languages: ["English", "Hindi", "Punjabi"],
      experience: "15 years",
      rating: 4.7,
      reviews: 267,
      price: 2500,
      location: "Chandigarh",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
      bio: "Senior therapist specializing in trauma recovery and addiction counseling.",
      education: "PhD in Clinical Psychology, PGI Chandigarh",
      approach: "EMDR, Trauma-informed care",
      availability: ["Mon", "Tue", "Wed", "Fri"]
    },
    {
      id: 5,
      name: "Dr. Kavya Nair",
      specialties: ["Women's Mental Health", "Postpartum", "Eating Disorders"],
      languages: ["English", "Malayalam", "Tamil"],
      experience: "9 years",
      rating: 4.9,
      reviews: 124,
      price: 1800,
      location: "Kochi",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      bio: "Dedicated to women's mental health with expertise in perinatal and reproductive psychology.",
      education: "Masters in Women's Studies & Psychology",
      approach: "Feminist therapy, Holistic healing",
      availability: ["Tue", "Thu", "Fri", "Sat"]
    },
    {
      id: 6,
      name: "Dr. Arjun Khanna",
      specialties: ["Mindfulness", "Meditation", "Stress Reduction"],
      languages: ["English", "Hindi"],
      experience: "10 years",
      rating: 4.8,
      reviews: 178,
      price: 1600,
      location: "Pune",
      avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
      bio: "Integrates traditional mindfulness practices with modern therapeutic approaches.",
      education: "PhD in Psychology, Masters in Buddhist Studies",
      approach: "Mindfulness-based therapy, ACT",
      availability: ["Mon", "Wed", "Fri", "Sun"]
    }
  ]

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
    "06:00 PM", "07:00 PM", "08:00 PM"
  ]

  const specialties = ["all", "Anxiety", "Depression", "Stress Management", "Relationship Counseling", "Student Counseling", "Trauma Therapy", "Women's Mental Health", "Mindfulness"]
  const languages = ["all", "English", "Hindi", "Telugu", "Tamil", "Gujarati", "Malayalam", "Punjabi"]

  const filteredTherapists = therapists.filter(therapist => {
    const matchesSpecialty = filterSpecialty === 'all' || therapist.specialties.some(spec => spec.includes(filterSpecialty))
    const matchesLanguage = filterLanguage === 'all' || therapist.languages.includes(filterLanguage)
    return matchesSpecialty && matchesLanguage
  })

  const bookAppointment = () => {
    setShowBookingSuccess(true)
    setTimeout(() => {
      setShowBookingSuccess(false)
      setBookingStep(1)
      setSelectedTherapist(null)
      setSelectedDate('')
      setSelectedTime('')
    }, 3000)
  }

  const getNextAvailableDates = (therapist) => {
    const dates = []
    const today = new Date()
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      const dayName = date.toLocaleDateString('en-US', { weekday: 'short' })
      
      if (therapist.availability.includes(dayName)) {
        dates.push(date.toISOString().split('T')[0])
      }
    }
    
    return dates.slice(0, 7)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-100">
      <div className="max-w-7xl mx-auto p-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-8"
        >
          <h1 className="text-3xl lg:text-4xl font-display font-bold gradient-text mb-2">
            Professional Therapy
          </h1>
          <p className="text-secondary-600">
            Connect with licensed mental health professionals for personalized care and support
          </p>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          <div className="floating-card text-center py-4">
            <Shield className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-sm font-medium text-secondary-800">Licensed</div>
            <div className="text-xs text-secondary-600">Professionals</div>
          </div>
          <div className="floating-card text-center py-4">
            <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
            <div className="text-sm font-medium text-secondary-800">95% Satisfaction</div>
            <div className="text-xs text-secondary-600">Rate</div>
          </div>
          <div className="floating-card text-center py-4">
            <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-sm font-medium text-secondary-800">1000+</div>
            <div className="text-xs text-secondary-600">Happy Clients</div>
          </div>
          <div className="floating-card text-center py-4">
            <Award className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <div className="text-sm font-medium text-secondary-800">Secure</div>
            <div className="text-xs text-secondary-600">& Confidential</div>
          </div>
        </motion.div>

        {bookingStep === 1 && (
          <>
            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="floating-card mb-6"
            >
              <h2 className="text-xl font-semibold text-secondary-800 mb-4">Find Your Perfect Therapist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Specialty
                  </label>
                  <select
                    value={filterSpecialty}
                    onChange={(e) => setFilterSpecialty(e.target.value)}
                    className="w-full px-3 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    {specialties.map(specialty => (
                      <option key={specialty} value={specialty}>
                        {specialty === 'all' ? 'All Specialties' : specialty}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Language
                  </label>
                  <select
                    value={filterLanguage}
                    onChange={(e) => setFilterLanguage(e.target.value)}
                    className="w-full px-3 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    {languages.map(language => (
                      <option key={language} value={language}>
                        {language === 'all' ? 'All Languages' : language}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>

            {/* Therapist Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTherapists.map((therapist, index) => (
                <motion.div
                  key={therapist.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="floating-card hover:shadow-xl transition-all duration-300"
                >
                  {/* Therapist Header */}
                  <div className="flex items-start space-x-4 mb-4">
                    <img
                      src={therapist.avatar}
                      alt={therapist.name}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-secondary-800 truncate">
                        {therapist.name}
                      </h3>
                      <div className="flex items-center space-x-2 mb-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{therapist.rating}</span>
                        <span className="text-sm text-secondary-500">({therapist.reviews})</span>
                      </div>
                      <div className="flex items-center text-sm text-secondary-600">
                        <MapPin className="w-3 h-3 mr-1" />
                        {therapist.location}
                      </div>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {therapist.specialties.slice(0, 2).map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                      {therapist.specialties.length > 2 && (
                        <span className="px-2 py-1 bg-secondary-100 text-secondary-600 text-xs font-medium rounded-full">
                          +{therapist.specialties.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-secondary-600">Experience:</span>
                      <span className="font-medium">{therapist.experience}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary-600">Languages:</span>
                      <span className="font-medium">{therapist.languages.slice(0, 2).join(', ')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary-600">Session Fee:</span>
                      <span className="font-semibold text-primary-600">₹{therapist.price}</span>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-secondary-600 mb-4 line-clamp-2">
                    {therapist.bio}
                  </p>

                  {/* Book Button */}
                  <button
                    onClick={() => {
                      setSelectedTherapist(therapist)
                      setBookingStep(2)
                    }}
                    className="w-full btn-primary"
                  >
                    Book Consultation
                  </button>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {bookingStep === 2 && selectedTherapist && (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="floating-card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-secondary-800">Book with {selectedTherapist.name}</h2>
                <button
                  onClick={() => setBookingStep(1)}
                  className="text-secondary-600 hover:text-secondary-800 transition-colors duration-200"
                >
                  ← Back to Therapists
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Therapist Details */}
                <div>
                  <div className="flex items-start space-x-4 mb-6">
                    <img
                      src={selectedTherapist.avatar}
                      alt={selectedTherapist.name}
                      className="w-20 h-20 rounded-xl object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-secondary-800">{selectedTherapist.name}</h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-medium">{selectedTherapist.rating}</span>
                        <span className="text-secondary-500">({selectedTherapist.reviews} reviews)</span>
                      </div>
                      <p className="text-secondary-600">{selectedTherapist.education}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-secondary-800 mb-2">Specializations</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedTherapist.specialties.map((specialty, idx) => (
                          <span key={idx} className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-secondary-800 mb-2">Approach</h4>
                      <p className="text-secondary-600">{selectedTherapist.approach}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-secondary-800 mb-2">About</h4>
                      <p className="text-secondary-600">{selectedTherapist.bio}</p>
                    </div>
                  </div>
                </div>

                {/* Booking Form */}
                <div className="space-y-6">
                  {/* Session Type */}
                  <div>
                    <h4 className="font-semibold text-secondary-800 mb-3">Session Type</h4>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { type: 'video', icon: Video, label: 'Video Call' },
                        { type: 'audio', icon: Phone, label: 'Audio Call' },
                        { type: 'chat', icon: MessageSquare, label: 'Chat' }
                      ].map(({ type, icon: Icon, label }) => (
                        <button
                          key={type}
                          onClick={() => setSessionType(type)}
                          className={`p-3 border-2 rounded-xl flex flex-col items-center space-y-2 transition-all duration-200 ${
                            sessionType === type 
                              ? 'border-primary-500 bg-primary-50' 
                              : 'border-secondary-200 hover:border-primary-300'
                          }`}
                        >
                          <Icon className="w-6 h-6" />
                          <span className="text-sm font-medium">{label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Date Selection */}
                  <div>
                    <h4 className="font-semibold text-secondary-800 mb-3">Select Date</h4>
                    <div className="grid grid-cols-7 gap-2">
                      {getNextAvailableDates(selectedTherapist).map(date => {
                        const dateObj = new Date(date)
                        const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'short' })
                        const dayNum = dateObj.getDate()
                        
                        return (
                          <button
                            key={date}
                            onClick={() => setSelectedDate(date)}
                            className={`p-3 border rounded-lg text-center transition-all duration-200 ${
                              selectedDate === date
                                ? 'border-primary-500 bg-primary-50'
                                : 'border-secondary-200 hover:border-primary-300'
                            }`}
                          >
                            <div className="text-xs text-secondary-500">{dayName}</div>
                            <div className="font-medium">{dayNum}</div>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Time Selection */}
                  {selectedDate && (
                    <div>
                      <h4 className="font-semibold text-secondary-800 mb-3">Select Time</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map(time => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`p-2 border rounded-lg text-sm transition-all duration-200 ${
                              selectedTime === time
                                ? 'border-primary-500 bg-primary-50'
                                : 'border-secondary-200 hover:border-primary-300'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Confirm Button */}
                  {selectedDate && selectedTime && (
                    <button
                      onClick={bookAppointment}
                      className="w-full btn-primary flex items-center justify-center space-x-2 mt-4"
                    >
                      <CheckCircle className="w-5 h-5" />
                      <span>Confirm Booking</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Booking Success Modal */}
        <AnimatePresence>
          {showBookingSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
            >
              <div className="glass-card p-8 rounded-2xl text-center max-w-sm mx-auto">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Booking Confirmed!</h3>
                <p className="text-secondary-700 mb-2">
                  Your session with <span className="font-bold">{selectedTherapist?.name}</span> is booked.
                </p>
                <div className="text-sm text-secondary-600 mb-2">
                  <Calendar className="inline w-4 h-4 mr-1" />
                  {selectedDate} at {selectedTime}
                </div>
                <div className="text-xs text-secondary-500">
                  You will receive a confirmation email with session details.
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default TherapyBooking