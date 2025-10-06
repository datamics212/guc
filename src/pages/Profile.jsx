import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiEdit2, FiSave, FiX } from 'react-icons/fi';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '../components/Card';
import Button from '../components/Button';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return {
      name: currentUser.name || 'Jane Doe',
      email: currentUser.email || 'jane@example.com',
      bio: 'Aspiring software engineer passionate about AI and machine learning.',
      location: 'San Francisco, CA',
      university: 'Stanford University',
      graduationYear: '2025',
      skills: ['Python', 'JavaScript', 'React', 'Machine Learning'],
    };
  });

  const [editForm, setEditForm] = useState(userData);

  const handleSave = () => {
    setUserData(editForm);
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    localStorage.setItem('currentUser', JSON.stringify({ ...currentUser, ...editForm }));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm(userData);
    setIsEditing(false);
  };

  const learningProgress = [
    { month: 'Jan', hours: 12 },
    { month: 'Feb', hours: 18 },
    { month: 'Mar', hours: 15 },
    { month: 'Apr', hours: 22 },
    { month: 'May', hours: 28 },
    { month: 'Jun', hours: 25 },
  ];

  const courseStats = [
    { name: 'Completed', value: 5, color: '#ec4899' },
    { name: 'In Progress', value: 3, color: '#f472b6' },
    { name: 'Not Started', value: 2, color: '#fda4af' },
  ];

  const skillProgress = [
    { skill: 'Python', progress: 85 },
    { skill: 'JavaScript', progress: 75 },
    { skill: 'React', progress: 70 },
    { skill: 'ML', progress: 60 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">My Profile</h1>
            <p className="text-xl text-pink-100">Track your progress and manage your information</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <Card hover={false}>
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                    {userData.name.charAt(0)}
                  </div>
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="text-pink-600 hover:text-pink-700"
                    >
                      <FiEdit2 size={20} />
                    </button>
                  ) : (
                    <div className="flex space-x-2">
                      <button
                        onClick={handleSave}
                        className="text-green-600 hover:text-green-700"
                      >
                        <FiSave size={20} />
                      </button>
                      <button
                        onClick={handleCancel}
                        className="text-red-600 hover:text-red-700"
                      >
                        <FiX size={20} />
                      </button>
                    </div>
                  )}
                </div>

                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        value={editForm.name}
                        onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        value={editForm.email}
                        onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                      <textarea
                        rows="3"
                        value={editForm.bio}
                        onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                      <input
                        type="text"
                        value={editForm.location}
                        onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">University</label>
                      <input
                        type="text"
                        value={editForm.university}
                        onChange={(e) => setEditForm({ ...editForm, university: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{userData.name}</h2>
                      <p className="text-gray-600">{userData.email}</p>
                    </div>
                    <p className="text-gray-600">{userData.bio}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Location:</span>
                        <span className="font-medium">{userData.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">University:</span>
                        <span className="font-medium">{userData.university}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Graduation:</span>
                        <span className="font-medium">{userData.graduationYear}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-700 mb-2">Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {userData.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>

            <Card hover={false} className="mt-6">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Courses Completed</span>
                    <span className="text-2xl font-bold text-pink-600">5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Learning Hours</span>
                    <span className="text-2xl font-bold text-pink-600">120</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Certificates Earned</span>
                    <span className="text-2xl font-bold text-pink-600">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Community Rank</span>
                    <span className="text-2xl font-bold text-pink-600">#42</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Card hover={false}>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Learning Progress</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={learningProgress}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="hours"
                      stroke="#ec4899"
                      strokeWidth={2}
                      name="Learning Hours"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card hover={false}>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Course Distribution</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={courseStats}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {courseStats.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              <Card hover={false}>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Skill Proficiency</h3>
                  <div className="space-y-4">
                    {skillProgress.map((item) => (
                      <div key={item.skill}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium text-gray-700">{item.skill}</span>
                          <span className="text-pink-600">{item.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.progress}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="bg-gradient-to-r from-pink-600 to-rose-600 h-2 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            <Card hover={false}>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Recent Achievements</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-pink-50 rounded-lg">
                    <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white text-xl">
                      🏆
                    </div>
                    <div>
                      <h4 className="font-semibold">Completed ML Fundamentals</h4>
                      <p className="text-sm text-gray-600">Earned certificate - 2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-pink-50 rounded-lg">
                    <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white text-xl">
                      ⭐
                    </div>
                    <div>
                      <h4 className="font-semibold">50 Day Streak</h4>
                      <p className="text-sm text-gray-600">Keep it up! - 5 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-pink-50 rounded-lg">
                    <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white text-xl">
                      🎯
                    </div>
                    <div>
                      <h4 className="font-semibold">Top 100 Contributor</h4>
                      <p className="text-sm text-gray-600">Community impact - 1 week ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
