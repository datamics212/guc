import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiVideo, FiCode, FiFileText, FiExternalLink, FiSearch } from 'react-icons/fi';
import Card from '../components/Card';

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'DSA', 'Web Dev', 'ML/AI', 'System Design', 'Interview Prep', 'Career'];

  const resources = [
    {
      id: 1,
      title: 'LeetCode - Algorithms Practice',
      category: 'DSA',
      type: 'platform',
      description: 'Practice coding problems and prepare for technical interviews.',
      url: 'https://leetcode.com',
      icon: FiCode,
    },
    {
      id: 2,
      title: 'freeCodeCamp',
      category: 'Web Dev',
      type: 'course',
      description: 'Free interactive coding tutorials for web development.',
      url: 'https://freecodecamp.org',
      icon: FiVideo,
    },
    {
      id: 3,
      title: 'Cracking the Coding Interview',
      category: 'Interview Prep',
      type: 'book',
      description: 'Essential book for technical interview preparation.',
      url: '#',
      icon: FiBook,
    },
    {
      id: 4,
      title: 'Fast.ai Deep Learning Course',
      category: 'ML/AI',
      type: 'course',
      description: 'Practical deep learning for coders.',
      url: 'https://fast.ai',
      icon: FiVideo,
    },
    {
      id: 5,
      title: 'System Design Primer',
      category: 'System Design',
      type: 'documentation',
      description: 'Learn how to design large-scale systems.',
      url: 'https://github.com/donnemartin/system-design-primer',
      icon: FiFileText,
    },
    {
      id: 6,
      title: 'MDN Web Docs',
      category: 'Web Dev',
      type: 'documentation',
      description: 'Comprehensive documentation for web technologies.',
      url: 'https://developer.mozilla.org',
      icon: FiFileText,
    },
    {
      id: 7,
      title: 'The Odin Project',
      category: 'Web Dev',
      type: 'course',
      description: 'Free full-stack curriculum for web development.',
      url: 'https://theodinproject.com',
      icon: FiVideo,
    },
    {
      id: 8,
      title: 'Kaggle Learn',
      category: 'ML/AI',
      type: 'platform',
      description: 'Free micro-courses in data science and ML.',
      url: 'https://kaggle.com/learn',
      icon: FiCode,
    },
    {
      id: 9,
      title: 'NeetCode',
      category: 'DSA',
      type: 'platform',
      description: 'Curated list of coding problems with video solutions.',
      url: 'https://neetcode.io',
      icon: FiVideo,
    },
    {
      id: 10,
      title: 'Designing Data-Intensive Applications',
      category: 'System Design',
      type: 'book',
      description: 'The big ideas behind reliable, scalable systems.',
      url: '#',
      icon: FiBook,
    },
    {
      id: 11,
      title: 'JavaScript.info',
      category: 'Web Dev',
      type: 'documentation',
      description: 'Modern JavaScript tutorial from basics to advanced.',
      url: 'https://javascript.info',
      icon: FiFileText,
    },
    {
      id: 12,
      title: 'Andrew Ng ML Course',
      category: 'ML/AI',
      type: 'course',
      description: 'Stanford\'s machine learning course on Coursera.',
      url: 'https://coursera.org',
      icon: FiVideo,
    },
    {
      id: 13,
      title: 'HackerRank',
      category: 'DSA',
      type: 'platform',
      description: 'Practice coding, prepare for interviews, and get hired.',
      url: 'https://hackerrank.com',
      icon: FiCode,
    },
    {
      id: 14,
      title: 'Resume.io',
      category: 'Career',
      type: 'tool',
      description: 'Create professional resumes with templates.',
      url: 'https://resume.io',
      icon: FiFileText,
    },
    {
      id: 15,
      title: 'Grokking System Design',
      category: 'System Design',
      type: 'course',
      description: 'Step-by-step guide to system design interviews.',
      url: '#',
      icon: FiVideo,
    },
    {
      id: 16,
      title: 'Behavioral Interview Guide',
      category: 'Interview Prep',
      type: 'documentation',
      description: 'Comprehensive guide to answering behavioral questions.',
      url: '#',
      icon: FiFileText,
    },
    {
      id: 17,
      title: 'Python for Data Science',
      category: 'ML/AI',
      type: 'course',
      description: 'Learn Python libraries for data analysis and ML.',
      url: '#',
      icon: FiVideo,
    },
    {
      id: 18,
      title: 'React Documentation',
      category: 'Web Dev',
      type: 'documentation',
      description: 'Official React documentation and tutorials.',
      url: 'https://react.dev',
      icon: FiFileText,
    },
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getTypeColor = (type) => {
    const colors = {
      platform: 'bg-blue-100 text-blue-600',
      course: 'bg-green-100 text-green-600',
      book: 'bg-purple-100 text-purple-600',
      documentation: 'bg-yellow-100 text-yellow-600',
      tool: 'bg-pink-100 text-pink-600',
    };
    return colors[type] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Free Study Resources</h1>
            <p className="text-xl text-pink-100">
              Curated collection of the best free learning materials
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 space-y-4">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-pink-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                      <resource.icon className="text-pink-600" size={24} />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                      {resource.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{resource.category}</span>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-pink-600 hover:text-pink-700 text-sm font-medium"
                    >
                      <span>Visit</span>
                      <FiExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No resources found matching your criteria.</p>
          </div>
        )}
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Resource Categories</h2>
            <p className="text-xl text-gray-600">Organized for your learning journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCode className="text-pink-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Interactive Platforms</h3>
              <p className="text-gray-600">Hands-on coding practice and challenges</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiVideo className="text-pink-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Video Courses</h3>
              <p className="text-gray-600">Structured learning paths with expert instructors</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiBook className="text-pink-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Books & Docs</h3>
              <p className="text-gray-600">In-depth knowledge and reference materials</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
