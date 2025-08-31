import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BarChart3, PieChart, TrendingUp, Users, Activity, Calendar, Download, Eye, Heart, AlertCircle } from 'lucide-react'

const AdminDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week')

  // Mock data for charts
  const moodData = [
    { name: 'Happy', value: 35, color: '#10b981' },
    { name: 'Calm', value: 25, color: '#3b82f6' },
    { name: 'Anxious', value: 20, color: '#f59e0b' },
    { name: 'Depressed', value: 15, color: '#ef4444' },
    { name: 'Stressed', value: 5, color: '#8b5cf6' }
  ]

  const stressTrendData = [
    { day: 'Mon', stress: 65, mood: 72, engagement: 45 },
    { day: 'Tue', stress: 58, mood: 78, engagement: 52 },
    { day: 'Wed', stress: 72, mood: 65, engagement: 38 },
    { day: 'Thu', stress: 45, mood: 85, engagement: 67 },
    { day: 'Fri', stress: 38, mood: 88, engagement: 73 },
    { day: 'Sat', stress: 42, mood: 82, engagement: 61 },
    { day: 'Sun', stress: 35, mood: 90, engagement: 55 }
  ]

  const resourceUsageData = [
    { resource: 'Meditation', views: 1240, downloads: 890, rating: 4.8 },
    { resource: 'Breathing Exercises', views: 980, downloads: 720, rating: 4.9 },
    { resource: 'CBT Guide', views: 1560, downloads: 1100, rating: 4.7 },
    { resource: 'Sleep Stories', views: 890, downloads: 650, rating: 4.6 },
    { resource: 'Anxiety Videos', views: 1340, downloads: 920, rating: 4.8 }
  ]

  const userStats = {
    totalUsers: 2847,
    activeUsers: 1243,
    newUsers: 156,
    engagementRate: 78.5
  }

  const recentActivity = [
    { id: 1, user: 'Sarah M.', action: 'Completed PHQ-9 assessment', time: '2 minutes ago', type: 'assessment' },
    { id: 2, user: 'Mike R.', action: 'Booked therapy appointment', time: '15 minutes ago', type: 'booking' },
    { id: 3, user: 'Emma L.', action: 'Downloaded stress workbook', time: '1 hour ago', type: 'download' },
    { id: 4, user: 'David K.', action: 'Started meditation session', time: '2 hours ago', type: 'activity' },
    { id: 5, user: 'Lisa P.', action: 'Completed mood tracking', time: '3 hours ago', type: 'tracking' }
  ]

  const getActivityIcon = (type) => {
    switch (type) {
      case 'assessment': return <BarChart3 className="w-4 h-4 text-blue-500" />
      case 'booking': return <Calendar className="w-4 h-4 text-green-500" />
      case 'download': return <Download className="w-4 h-4 text-purple-500" />
      case 'activity': return <Activity className="w-4 h-4 text-orange-500" />
      case 'tracking': return <Heart className="w-4 h-4 text-red-500" />
      default: return <Activity className="w-4 h-4 text-gray-500" />
    }
  }

  const getStressLevelColor = (level) => {
    if (level >= 70) return 'text-red-500'
    if (level >= 50) return 'text-yellow-500'
    return 'text-green-500'
  }

  const getMoodLevelColor = (level) => {
    if (level >= 80) return 'text-green-500'
    if (level >= 60) return 'text-blue-500'
    return 'text-yellow-500'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-100">
      <div className="max-w-7xl mx-auto p-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl lg:text-4xl font-display font-bold gradient-text mb-2">
            Admin Dashboard
          </h1>
          <p className="text-secondary-600">
            Monitor user engagement, mental health trends, and resource utilization
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="floating-card"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-secondary-600 text-sm">Total Users</p>
                <p className="text-2xl font-bold text-secondary-800">{userStats.totalUsers.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="floating-card"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-secondary-600 text-sm">Active Users</p>
                <p className="text-2xl font-bold text-secondary-800">{userStats.activeUsers.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="floating-card"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-secondary-600 text-sm">New Users</p>
                <p className="text-2xl font-bold text-secondary-800">+{userStats.newUsers}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="floating-card"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-secondary-600 text-sm">Engagement Rate</p>
                <p className="text-2xl font-bold text-secondary-800">{userStats.engagementRate}%</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Mood Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="floating-card"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-secondary-800">Mood Distribution</h2>
              <PieChart className="w-6 h-6 text-primary-600" />
            </div>
            
            <div className="space-y-4">
              {moodData.map((item, index) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-secondary-700">{item.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-secondary-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full"
                        style={{ 
                          width: `${item.value}%`,
                          backgroundColor: item.color
                        }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-secondary-600 w-8">{item.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stress Trend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="floating-card"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-secondary-800">Weekly Trends</h2>
              <div className="flex space-x-2">
                {['week', 'month'].map((period) => (
                  <button
                    key={period}
                    onClick={() => setSelectedPeriod(period)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      selectedPeriod === period
                        ? 'bg-primary-500 text-white'
                        : 'bg-secondary-100 text-secondary-600 hover:bg-secondary-200'
                    }`}
                  >
                    {period.charAt(0).toUpperCase() + period.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              {stressTrendData.map((day, index) => (
                <div key={day.day} className="flex items-center justify-between">
                  <span className="text-secondary-600 w-8">{day.day}</span>
                  <div className="flex-1 mx-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-secondary-500">Stress</span>
                        <div className="w-16 bg-secondary-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${getStressLevelColor(day.stress)}`}
                            style={{ width: `${day.stress}%` }}
                          ></div>
                        </div>
                        <span className={`text-xs font-medium ${getStressLevelColor(day.stress)}`}>
                          {day.stress}%
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-secondary-500">Mood</span>
                        <div className="w-16 bg-secondary-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${getMoodLevelColor(day.mood)}`}
                            style={{ width: `${day.mood}%` }}
                          ></div>
                        </div>
                        <span className={`text-xs font-medium ${getMoodLevelColor(day.mood)}`}>
                          {day.mood}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Resource Usage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="floating-card mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-secondary-800">Resource Usage</h2>
            <BarChart3 className="w-6 h-6 text-primary-600" />
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-secondary-200">
                  <th className="text-left py-3 px-4 text-secondary-600 font-medium">Resource</th>
                  <th className="text-center py-3 px-4 text-secondary-600 font-medium">Views</th>
                  <th className="text-center py-3 px-4 text-secondary-600 font-medium">Downloads</th>
                  <th className="text-center py-3 px-4 text-secondary-600 font-medium">Rating</th>
                  <th className="text-center py-3 px-4 text-secondary-600 font-medium">Engagement</th>
                </tr>
              </thead>
              <tbody>
                {resourceUsageData.map((resource, index) => (
                  <tr key={resource.resource} className="border-b border-secondary-100 hover:bg-secondary-50">
                    <td className="py-3 px-4 font-medium text-secondary-800">{resource.resource}</td>
                    <td className="py-3 px-4 text-center text-secondary-600">{resource.views.toLocaleString()}</td>
                    <td className="py-3 px-4 text-center text-secondary-600">{resource.downloads.toLocaleString()}</td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center space-x-1">
                        <span className="text-yellow-500">★</span>
                        <span className="text-secondary-600">{resource.rating}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="w-16 bg-secondary-200 rounded-full h-2 mx-auto">
                        <div 
                          className="bg-primary-500 h-2 rounded-full"
                          style={{ width: `${(resource.downloads / resource.views) * 100}%` }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="floating-card"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-secondary-800">Recent Activity</h2>
            <Activity className="w-6 h-6 text-primary-600" />
          </div>
          
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-secondary-50 transition-colors duration-200">
                <div className="flex-shrink-0">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-secondary-800 font-medium">{activity.user}</p>
                  <p className="text-secondary-600 text-sm">{activity.action}</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-xs text-secondary-500">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Alerts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 floating-card bg-yellow-50 border border-yellow-200"
        >
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2">System Alerts</h3>
              <div className="space-y-2 text-sm text-yellow-700">
                <p>• 3 users reported high stress levels today</p>
                <p>• Meditation resource usage increased by 25% this week</p>
                <p>• New user registrations up 15% from last week</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AdminDashboard
