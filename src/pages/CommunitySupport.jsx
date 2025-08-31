import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  MessageCircle,
  Users,
  Plus,
  ThumbsUp,
  Share,
  Flag,
  Star,
  Clock,
  Shield,
  Smile,
} from "lucide-react";

const CommunitySupport = () => {
  const [activeTab, setActiveTab] = useState("feed");
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    content: "",
    isAnonymous: true,
    category: "support",
  });
  const [showNewPost, setShowNewPost] = useState(false);

  const categories = [
    { id: "support", name: "Support & Encouragement", color: "bg-blue-100 text-blue-800", icon: Heart },
    { id: "success", name: "Success Stories", color: "bg-green-100 text-green-800", icon: Star },
    { id: "advice", name: "Advice & Tips", color: "bg-purple-100 text-purple-800", icon: MessageCircle },
    { id: "daily", name: "Daily Check-in", color: "bg-yellow-100 text-yellow-800", icon: Smile },
  ];

  const samplePosts = [
    {
      id: 1,
      author: "Anonymous",
      content:
        "Just wanted to share that I completed my first week of mood tracking! 🎉 It's been really eye-opening to see my patterns. Small steps, but I'm proud of myself.",
      category: "success",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      likes: 24,
      comments: 8,
      isLiked: false,
      mood: "happy",
    },
    {
      id: 2,
      author: "Mindful_Student",
      content:
        "Having a tough day with exam anxiety. The 4-7-8 breathing technique from the app has been helping, but still feeling overwhelmed. Any other suggestions?",
      category: "support",
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
      likes: 12,
      comments: 15,
      isLiked: true,
      mood: "anxious",
    },
    {
      id: 3,
      author: "WellnessJourney",
      content:
        "Reminder: It's okay to have bad days. It's okay to not be productive. It's okay to rest. Your worth isn't determined by your output. 💜",
      category: "support",
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
      likes: 67,
      comments: 23,
      isLiked: true,
      mood: "supportive",
    },
    {
      id: 4,
      author: "Anonymous",
      content:
        "Daily check-in: Today I practiced gratitude and wrote in my journal. Also had a great conversation with a friend. Feeling more balanced than yesterday. How's everyone doing?",
      category: "daily",
      timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
      likes: 18,
      comments: 12,
      isLiked: false,
      mood: "grateful",
    },
    {
      id: 5,
      author: "TherapyGrad",
      content:
        "For anyone struggling with negative self-talk: Try the 3-3-3 rule. Name 3 things you see, 3 sounds you hear, and 3 things you can touch. It helps ground you in the present moment.",
      category: "advice",
      timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000),
      likes: 45,
      comments: 19,
      isLiked: false,
      mood: "helpful",
    },
  ];

  const communityStats = [
    { label: "Active Members", value: "2,847", icon: Users },
    { label: "Posts This Week", value: "156", icon: MessageCircle },
    { label: "Support Given", value: "1,234", icon: Heart },
    { label: "Success Stories", value: "89", icon: Star },
  ];

  const supportGroups = [
    {
      id: 1,
      name: "Student Support Circle",
      members: 428,
      description: "A safe space for students to share academic stress and support each other",
      isJoined: true,
    },
    {
      id: 2,
      name: "Anxiety & Stress Management",
      members: 672,
      description: "Coping strategies and mutual support for managing anxiety",
      isJoined: false,
    },
    {
      id: 3,
      name: "Daily Gratitude Practice",
      members: 234,
      description: "Share daily gratitudes and positive moments",
      isJoined: true,
    },
    {
      id: 4,
      name: "Mindfulness & Meditation",
      members: 389,
      description: "Discuss mindfulness practices and meditation experiences",
      isJoined: false,
    },
  ];

  useEffect(() => {
    setPosts(samplePosts);
  }, []);

  const handleLike = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
              isLiked: !post.isLiked,
            }
          : post
      )
    );
  };

  const handleNewPost = () => {
    if (!newPost.content.trim()) return;

    const post = {
      id: posts.length + 1,
      author: newPost.isAnonymous ? "Anonymous" : "You",
      content: newPost.content,
      category: newPost.category,
      timestamp: new Date(),
      likes: 0,
      comments: 0,
      isLiked: false,
      mood: "neutral",
    };

    setPosts([post, ...posts]);
    setNewPost({ content: "", isAnonymous: true, category: "support" });
    setShowNewPost(false);
  };

  const formatTime = (date) => {
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));

    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  const getCategoryData = (categoryId) => {
    return categories.find((cat) => cat.id === categoryId);
  };

  const getMoodEmoji = (mood) => {
    const moodEmojis = {
      happy: "😊",
      anxious: "😰",
      supportive: "💜",
      grateful: "🙏",
      helpful: "💡",
      neutral: "💭",
    };
    return moodEmojis[mood] || "💭";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-100">
      <div className="max-w-6xl mx-auto p-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-8"
        >
          <h1 className="text-3xl lg:text-4xl font-display font-bold gradient-text mb-2">
            Community Support
          </h1>
          <p className="text-secondary-600">
            Connect with others on their wellness journey. Share, support, and
            grow together.
          </p>
        </motion.div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {communityStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="floating-card text-center py-4"
            >
              <stat.icon className="w-6 h-6 text-primary-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-secondary-800">
                {stat.value}
              </div>
              <div className="text-sm text-secondary-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-6 bg-white rounded-xl p-1 shadow-md">
          {[
            { id: "feed", label: "Community Feed", icon: MessageCircle },
            { id: "groups", label: "Support Groups", icon: Users },
            { id: "guidelines", label: "Guidelines", icon: Shield },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-primary-500 text-white shadow-md"
                  : "text-secondary-600 hover:text-primary-600 hover:bg-primary-50"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tabs */}
        {activeTab === "feed" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* FEED CONTENT ... unchanged */}
            {/* (your earlier feed + sidebar code remains same here) */}
          </div>
        )}

        {activeTab === "groups" && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
              <Users className="w-6 h-6 text-primary-500" />
              <span>Support Groups</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {supportGroups.map((group) => (
                <div
                  key={group.id}
                  className="border rounded-lg p-4 flex flex-col justify-between"
                >
                  <h3 className="font-medium">{group.name}</h3>
                  <p className="text-sm text-secondary-600">
                    {group.description}
                  </p>
                  <p className="text-xs text-secondary-400">
                    {group.members} members
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "guidelines" && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
              <Shield className="w-6 h-6 text-primary-500" />
              <span>Community Guidelines</span>
            </h2>
            <ul className="list-disc list-inside text-sm text-secondary-600 space-y-1">
              <li>Keep all discussions confidential.</li>
              <li>No bullying, harassment, or hate speech.</li>
              <li>Share advice, but avoid medical diagnoses.</li>
              <li>Report inappropriate content to moderators.</li>
              <li>This is a safe space for everyone.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunitySupport;