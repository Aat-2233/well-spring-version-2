import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wind, Sparkles, BookOpen, Phone, Play, Pause, RotateCcw, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const helplines = [
  {
    name: "KIRAN National Mental Health Helpline",
    number: "+91-18005990019",
    description: "24/7 toll-free helpline for mental health support",
    availability: "24/7",
    color: "from-green-400 to-emerald-500"
  },
  {
    name: "NIMHANS Helpline",
    number: "+91-8046110007",
    description: "Professional mental health support from experts",
    availability: "10 AM - 8 PM",
    color: "from-blue-400 to-indigo-500"
  },
  {
    name: "iCall Psychosocial Helpline",
    number: "+91-9152987821",
    description: "Counseling support by trained volunteers",
    availability: "10 AM - 6 PM",
    color: "from-purple-400 to-pink-500"
  },
  {
    name: "Vandrevala Foundation",
    number: "+91-9999666555",
    description: "24x7 helpline for crisis intervention and suicide prevention",
    availability: "24/7",
    color: "from-orange-400 to-red-500"
  }
];

const affirmations = [
  "You are worthy of love and compassion, including from yourself. 💜",
  "Your feelings are valid, and it's okay to not be okay sometimes. 🤗",
  "You have survived difficult times before, and you can do it again. 💪",
  "Every small step forward is progress worth celebrating. ✨",
  "You deserve happiness, peace, and all good things in life. 🌟",
  "Your mental health matters, and taking care of it is brave. 🌸",
  "You are not your thoughts - you are the observer of your thoughts. 🧠",
  "It's okay to rest, to pause, and to take things one day at a time. 🌅",
  "You are enough, exactly as you are, right now in this moment. ❤️",
  "Your journey is unique, and comparing it to others isn't helpful. 🦋"
];

const studyTips = [
  {
    title: "Break Down Big Tasks",
    description: "Divide large assignments into smaller, manageable chunks to reduce overwhelm"
  },
  {
    title: "Practice the 20-20-20 Rule",
    description: "Every 20 minutes, look at something 20 feet away for 20 seconds to rest your eyes and mind"
  },
  {
    title: "Create a Consistent Study Schedule",
    description: "Regular study times help build routine and reduce anxiety about deadlines"
  },
  {
    title: "Use Active Recall",
    description: "Test yourself regularly instead of just re-reading notes - it's more effective and builds confidence"
  },
  {
    title: "Take Regular Breaks",
    description: "Use techniques like Pomodoro (25 min study, 5 min break) to maintain focus and prevent burnout"
  }
];

const faqs = [
  {
    question: "Is this service really anonymous?",
    answer: "Yes, absolutely! We don't collect any personal identifying information. Your conversations and mood entries are stored securely and anonymously."
  },
  {
    question: "What if I'm having a mental health crisis?",
    answer: "If you're in immediate danger or having thoughts of self-harm, please call one of the helpline numbers immediately or go to your nearest emergency room. Our chat is supportive but not a replacement for professional crisis intervention."
  },
  {
    question: "How does the mood tracking help?",
    answer: "Tracking your moods helps you identify patterns, triggers, and improvements over time. It can also be helpful information to share with a counselor or therapist."
  },
  {
    question: "Can I use this instead of therapy?",
    answer: "While our tools are helpful for daily support and self-care, they're designed to complement, not replace, professional mental health care. If you're struggling significantly, please consider speaking with a counselor or therapist."
  },
  {
    question: "Is my data safe?",
    answer: "Yes, we take privacy seriously. All data is encrypted and stored securely. We never share your information with third parties."
  }
];

export default function Resources() {
  const [currentAffirmation, setCurrentAffirmation] = useState(0);
  const [breathingActive, setBreathingActive] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState('inhale'); // inhale, hold, exhale
  const [breathingCount, setBreathingCount] = useState(4);
  const [expandedFaq, setExpandedFaq] = useState(null);

  React.useEffect(() => {
    let interval;
    if (breathingActive) {
      interval = setInterval(() => {
        setBreathingCount(prev => {
          if (breathingPhase === 'inhale' && prev <= 0) {
            setBreathingPhase('hold');
            return 7;
          } else if (breathingPhase === 'hold' && prev <= 0) {
            setBreathingPhase('exhale');
            return 8;
          } else if (breathingPhase === 'exhale' && prev <= 0) {
            setBreathingPhase('inhale');
            return 4;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [breathingActive, breathingPhase]);

  const nextAffirmation = () => setCurrentAffirmation((prev) => (prev + 1) % affirmations.length);
  const resetBreathing = () => { setBreathingActive(false); setBreathingPhase('inhale'); setBreathingCount(4); };

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
          Wellness Resources
        </h1>
        <p className="text-gray-600 text-lg">Tools and support to help you on your mental wellness journey</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Crisis Helplines */}
        <Card className="bg-white/60 backdrop-blur-sm border-white/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              <Phone className="w-5 h-5" />
              Crisis Support Helplines
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600 mb-4">If you're in crisis or need immediate support, these helplines are here for you 24/7.</p>
            {helplines.map((helpline, index) => (
              <motion.div key={helpline.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                <a
                  href={`tel:${helpline.number}`}
                  style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
                  className={`block p-4 rounded-xl bg-gradient-to-r ${helpline.color} hover:shadow-lg transition-all duration-300 text-white transform hover:scale-105`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-sm">{helpline.name}</h3>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{helpline.availability}</span>
                  </div>
                  <p className="text-xs mb-2 opacity-90">{helpline.description}</p>
                  <p className="font-mono text-lg font-bold">{helpline.number}</p>
                </a>
              </motion.div>
            ))}
          </CardContent>
        </Card>

        {/* Breathing Exercise */}
        <Card className="bg-white/60 backdrop-blur-sm border-white/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-600"><Wind className="w-5 h-5" /> 4-7-8 Breathing Exercise</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-gray-600 mb-6">A simple breathing technique to help reduce anxiety and promote calm</p>
            <div className="flex flex-col items-center space-y-6">
              <div className="relative">
                <motion.div animate={{ scale: breathingActive ? (breathingPhase === 'inhale' ? 1.3 : breathingPhase === 'hold' ? 1.3 : 1) : 1 }} transition={{ duration: 1, ease: "easeInOut" }} className="w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{breathingCount}</div>
                    <div className="text-sm capitalize">{breathingPhase}</div>
                  </div>
                </motion.div>
              </div>

              <div className="text-sm text-gray-600 max-w-md">
                <p className="mb-2"><strong>Inhale</strong> for 4 seconds, <strong>hold</strong> for 7 seconds, <strong>exhale</strong> for 8 seconds</p>
                <p>This pattern helps activate your body's relaxation response.</p>
              </div>

              <div className="flex gap-3">
                <Button onClick={() => setBreathingActive(!breathingActive)} className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                  {breathingActive ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                  {breathingActive ? 'Pause' : 'Start'}
                </Button>
                <Button variant="outline" onClick={resetBreathing}><RotateCcw className="w-4 h-4 mr-2" />Reset</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Affirmations */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-600"><Sparkles className="w-5 h-5" /> Daily Affirmations</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <motion.div key={currentAffirmation} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <p className="text-xl text-gray-700 leading-relaxed font-medium">{affirmations[currentAffirmation]}</p>
          </motion.div>
          <Button onClick={nextAffirmation} variant="outline" className="bg-white/60 backdrop-blur-sm"><Sparkles className="w-4 h-4 mr-2" />Show Another Affirmation</Button>
        </CardContent>
      </Card>

      {/* Study Stress Tips */}
      <Card className="bg-white/60 backdrop-blur-sm border-white/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-600"><BookOpen className="w-5 h-5" /> Study Stress Management Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {studyTips.map((tip, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30">
                <h3 className="font-bold text-gray-800 mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-600">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card className="bg-white/60 backdrop-blur-sm border-white/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Heart className="w-5 h-5 text-pink-500" /> Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }} className="border border-white/30 rounded-xl bg-white/40 backdrop-blur-sm overflow-hidden">
                <button onClick={() => setExpandedFaq(expandedFaq === index ? null : index)} className="w-full p-4 text-left flex justify-between items-center hover:bg-white/20 transition-colors">
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  {expandedFaq === index ? <ChevronUp className="w-4 h-4 text-gray-600" /> : <ChevronDown className="w-4 h-4 text-gray-600" />}
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-4 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
