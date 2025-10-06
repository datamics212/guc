import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiClock, FiAward, FiTrendingUp } from 'react-icons/fi';
import Card from '../components/Card';
import Button from '../components/Button';

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI & ML', 'Web Development', 'DevOps', 'Mobile Development', 'Data Science'];

  const courses = [
    {
      id: 1,
      title: 'Introduction to Machine Learning',
      category: 'AI & ML',
      description: 'Learn the fundamentals of ML algorithms and practical applications.',
      duration: '8 weeks',
      level: 'Beginner',
      progress: 45,
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=400',
      enrolled: true,
    },
    {
      id: 2,
      title: 'Full Stack Web Development',
      category: 'Web Development',
      description: 'Master React, Node.js, and database design to build complete web applications.',
      duration: '12 weeks',
      level: 'Intermediate',
      progress: 20,
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
      enrolled: true,
    },
    {
      id: 3,
      title: 'DevOps Fundamentals',
      category: 'DevOps',
      description: 'Learn CI/CD, Docker, Kubernetes, and cloud deployment strategies.',
      duration: '6 weeks',
      level: 'Intermediate',
      progress: 0,
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      enrolled: false,
    },
    {
      id: 4,
      title: 'Deep Learning with Python',
      category: 'AI & ML',
      description: 'Build neural networks and understand deep learning architectures.',
      duration: '10 weeks',
      level: 'Advanced',
      progress: 0,
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=400',
      enrolled: false,
    },
    {
      id: 5,
      title: 'React Native Mobile Apps',
      category: 'Mobile Development',
      description: 'Create cross-platform mobile applications using React Native.',
      duration: '8 weeks',
      level: 'Intermediate',
      progress: 0,
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400',
      enrolled: false,
    },
    {
      id: 6,
      title: 'Data Science with Python',
      category: 'Data Science',
      description: 'Analyze data, create visualizations, and build predictive models.',
      duration: '10 weeks',
      level: 'Beginner',
      progress: 0,
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
      enrolled: false,
    },
  ];

  const filteredCourses = selectedCategory === 'All'
    ? courses
    : courses.filter((course) => course.category === selectedCategory);

  const handleEnroll = (courseId) => {
    alert(`Enrolled in course ${courseId}!`);
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Courses</h1>
            <p className="text-xl text-pink-100">
              Learn new skills and advance your career with our expert-led courses
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
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
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-xs font-medium">
                      {course.category}
                    </span>
                    <span className="text-sm text-gray-500">{course.level}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>

                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <FiClock />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiBook />
                      <span>24 lessons</span>
                    </div>
                  </div>

                  {course.enrolled && course.progress > 0 && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Progress</span>
                        <span className="text-pink-600 font-medium">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-pink-600 to-rose-600 h-2 rounded-full transition-all"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  <Button
                    onClick={() => handleEnroll(course.id)}
                    variant={course.enrolled ? 'outline' : 'primary'}
                    className="w-full"
                  >
                    {course.enrolled ? 'Continue Learning' : 'Enroll Now'}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No courses found in this category.</p>
          </div>
        )}
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiBook className="text-pink-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert-Led Content</h3>
              <p className="text-gray-600">Learn from industry professionals with years of experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiTrendingUp className="text-pink-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
              <p className="text-gray-600">Monitor your learning journey with detailed analytics</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiAward className="text-pink-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Earn Certificates</h3>
              <p className="text-gray-600">Get recognized for your achievements with official certificates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
