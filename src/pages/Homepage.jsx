import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Heart, 
  Brain, 
  MessageCircle, 
  Calendar,
  Music,
  Wind,
  Users,
  BookOpen,
  Stethoscope,
  BarChart3,
  Sparkles,
  ArrowRight,
  Star,
  Shield,
  Zap
} from 'lucide-react'

const Homepage = () => {
  const [currentQuote, setCurrentQuote] = useState(0)

  const inspirationalQuotes = [
    "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.",
    "It's okay not to be okay. What's important is that you're taking steps to feel better.",
    "Healing isn't linear. Be patient with yourself on this journey.",
    "You are stronger than you think, braver than you feel, and more loved than you know.",
    "Taking care of yourself isn't selfish. It's essential.",
  ]

  const features = [
    {
      icon: Heart,
      title: "Mood Tracking",
      description: "Track your daily emotions with intuitive mood logging and visual insights",
      link: "/mood-tracker",
      color: "from-red-400 to-pink-500"
    },
    {
      icon: MessageCircle,
      title: "AI Chat Support",
      description: "Get instant support from our empathetic AI companion, available 24/7",
      link: "/chat",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: BookOpen,
      title: "Personal Journal",
      description: "Express your thoughts safely in a private, encrypted journaling space",
      link: "/journal",
      color: "from-purple-400 to-indigo-500"
    },
    {
      icon: Music,
      title: "Sound Therapy",
      description: "Relax with curated playlists designed for meditation and stress relief",
      link: "/sound-therapy",
      color: "from-green-400 to-teal-500"
    },
    {
      icon: Wind,
      title: "Breathing Exercises",
      description: "Practice guided breathing techniques to reduce anxiety and stress",
      link: "/breathing-exercises",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: Stethoscope,
      title: "Therapy Booking",
      description: "Connect with licensed mental health professionals for personalized care",
      link: "/therapy-booking",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a supportive community of individuals on similar wellness journeys",
      link: "/community",
      color: "from-pink-400 to-purple-500"
    },
    {
      icon: BarChart3,
      title: "Progress Analytics",
      description: "Visualize your mental health journey with detailed progress insights",
      link: "/mood-tracker",
      color: "from-indigo-400 to-blue-500"
    }
  ]

  const testimonials = [
    {
      name: "Shambo Das",
      role: "Student",
      content: "Wellspring helped me manage my anxiety during exam season. The breathing exercises are a game-changer!",
      rating: 5
    },
    {
      name: "Souradeep Barman",
      role: "Professional",
      content: "The AI chat support feels so genuine and helpful. It's like having a therapist available anytime.",
      rating: 5
    },
    {
      name: "Aatryee Nag",
      role: "Graduate Student",
      content: "The mood tracking feature helped me identify patterns I never noticed. Highly recommended!",
      rating: 5
    }
    ,{
      name: "Soumili Halder",
      role: "Student",
      content: "Daily journaling on Wellspring has made me more mindful. I feel calmer and more focused each day📝💛",
      rating: 5
    }
 ,{
      name: "Sampriti Mondal",
      role: "Student",
      content: "The meditation guides are amazing. Even 5 minutes a day makes a huge difference in handling stress 🧘‍♂️🌿",
      rating: 5
    }
     ,{
      name: "Rahul Pathak",
      role: "Student",
      content: "The self-care tips are practical and easy to implement. I actually feel like I have a plan to take care of myself 😌",
      rating: 4
    }

  ]

  const stats = [
    { number: "10K+", label: "Happy Users" },
    { number: "50K+", label: "Mood Logs" },
    { number: "95%", label: "User Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % inspirationalQuotes.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-100"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
                <span className="gradient-text">Wellspring</span>
                <br />
                <span className="text-secondary-700">Your Mental Health</span>
                <br />
                <span className="text-secondary-600">Companion</span>
              </h1>
              <p className="text-xl md:text-2xl text-secondary-600 max-w-3xl mx-auto">
                A comprehensive platform designed to support your mental wellness journey with AI-powered tools, 
                professional therapy, and a caring community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link to="/chat" className="btn-primary text-lg px-8 py-4">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/mood-tracker" className="btn-secondary text-lg px-8 py-4">
                Track Your Mood
              </Link>
            </motion.div>

            {/* Daily Quote */}
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-xl p-6 max-w-2xl mx-auto"
            >
              <Sparkles className="h-8 w-8 text-yellow-500 mx-auto mb-4" />
              <p className="text-lg italic text-secondary-700">
                "{inspirationalQuotes[currentQuote]}"
              </p>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Heart className="h-16 w-16 text-pink-400 animate-float" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <Brain className="h-20 w-20 text-blue-400 animate-float" style={{ animationDelay: '2s' }} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-secondary-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold gradient-text mb-6">
              Comprehensive Mental Wellness Tools
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Everything you need to support your mental health journey, from mood tracking to professional therapy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="floating-card group cursor-pointer"
              >
                <Link to={feature.link} className="block">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800 mb-2 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-secondary-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary-600 font-medium text-sm group-hover:translate-x-2 transition-transform duration-200">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Wellspring */}
      <section className="py-20 bg-gradient-to-r from-primary-50 to-secondary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-display font-bold gradient-text mb-6">
                Why Choose Wellspring?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-800 mb-2">Privacy First</h3>
                    <p className="text-secondary-600">Your data is encrypted and secure. We never share personal information.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-800 mb-2">AI-Powered Support</h3>
                    <p className="text-secondary-600">Advanced AI provides personalized insights and immediate support when you need it.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-400 to-indigo-500 flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-800 mb-2">Professional Network</h3>
                    <p className="text-secondary-600">Connect with licensed therapists and counselors for professional support.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-8">
                <div className="text-center">
                  <Heart className="h-16 w-16 text-primary-500 mx-auto mb-6 animate-pulse-soft" />
                  <h3 className="text-2xl font-semibold text-secondary-800 mb-4">
                    Your Wellness Journey Starts Here
                  </h3>
                  <p className="text-secondary-600 mb-6">
                    Join thousands of users who have transformed their mental health with Wellspring's comprehensive tools and support system.
                  </p>
                  <Link to="/chat" className="btn-primary">
                    Get Started Today
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold gradient-text mb-6">
              What Our Users Say
            </h2>
            <p className="text-xl text-secondary-600">
              Real stories from people who've transformed their mental wellness
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="floating-card text-center"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-secondary-700 italic mb-6">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-secondary-800">{testimonial.name}</p>
                  <p className="text-sm text-secondary-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Ready to Transform Your Mental Wellness?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join thousands of users who have taken control of their mental health journey with Wellspring
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/chat" 
                className="bg-white text-primary-600 hover:bg-primary-50 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                Start Free Today
              </Link>
              <Link 
                to="/subscription" 
                className="bg-primary-500 text-white hover:bg-primary-400 border-2 border-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                View Premium Plans
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Homepage