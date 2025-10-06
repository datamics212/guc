import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiMail, FiStar, FiBriefcase } from 'react-icons/fi';
import Card from '../components/Card';
import Button from '../components/Button';

export default function Mentorship() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    date: '',
    time: '',
    topic: '',
    message: '',
  });

  const mentors = [
    {
      id: 1,
      name: 'Dr. Emily Chen',
      role: 'Senior AI Engineer',
      company: 'Google',
      expertise: ['Machine Learning', 'Deep Learning', 'NLP'],
      rating: 4.9,
      sessions: 127,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: '10+ years in AI research and development. Passionate about helping women break into tech.',
      linkedin: '#',
      email: 'emily.chen@example.com',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Full Stack Developer',
      company: 'Microsoft',
      expertise: ['React', 'Node.js', 'Cloud Architecture'],
      rating: 4.8,
      sessions: 98,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Career switcher from finance to tech. Love helping others make the transition.',
      linkedin: '#',
      email: 'sarah.j@example.com',
    },
    {
      id: 3,
      name: 'Priya Patel',
      role: 'DevOps Lead',
      company: 'Amazon',
      expertise: ['Docker', 'Kubernetes', 'CI/CD'],
      rating: 4.9,
      sessions: 145,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Expert in cloud infrastructure and DevOps best practices. Mentored 100+ engineers.',
      linkedin: '#',
      email: 'priya.p@example.com',
    },
    {
      id: 4,
      name: 'Maya Rodriguez',
      role: 'Product Manager',
      company: 'Meta',
      expertise: ['Product Strategy', 'User Research', 'Agile'],
      rating: 4.7,
      sessions: 82,
      image: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Transitioned from engineering to product management. Helping others find their path.',
      linkedin: '#',
      email: 'maya.r@example.com',
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Data Scientist',
      company: 'Netflix',
      expertise: ['Data Analysis', 'Python', 'Statistics'],
      rating: 4.8,
      sessions: 110,
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'PhD in Statistics. Passionate about data-driven decision making and mentorship.',
      linkedin: '#',
      email: 'lisa.t@example.com',
    },
    {
      id: 6,
      name: 'Jessica Wu',
      role: 'Security Engineer',
      company: 'Apple',
      expertise: ['Cybersecurity', 'Penetration Testing', 'Compliance'],
      rating: 4.9,
      sessions: 95,
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Certified security expert. Helping build the next generation of security professionals.',
      linkedin: '#',
      email: 'jessica.w@example.com',
    },
  ];

  const handleBookSession = (mentor) => {
    setSelectedMentor(mentor);
    setShowBookingModal(true);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert(`Session booked with ${selectedMentor.name}!`);
    setShowBookingModal(false);
    setBookingForm({ date: '', time: '', topic: '', message: '' });
    setSelectedMentor(null);
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Mentor</h1>
            <p className="text-xl text-pink-100">
              Connect with experienced professionals who want to help you succeed
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <div className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900">{mentor.name}</h3>
                      <p className="text-sm text-gray-600">{mentor.role}</p>
                      <div className="flex items-center space-x-1 text-sm text-gray-500 mt-1">
                        <FiBriefcase size={14} />
                        <span>{mentor.company}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{mentor.bio}</p>

                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Expertise:</div>
                    <div className="flex flex-wrap gap-2">
                      {mentor.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-pink-100 text-pink-600 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4 text-sm">
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <FiStar fill="currentColor" />
                      <span className="text-gray-900 font-medium">{mentor.rating}</span>
                    </div>
                    <span className="text-gray-500">{mentor.sessions} sessions</span>
                  </div>

                  <div className="flex space-x-2 mb-4">
                    <a
                      href={mentor.linkedin}
                      className="text-gray-600 hover:text-pink-600 transition-colors"
                    >
                      <FiLinkedin size={20} />
                    </a>
                    <a
                      href={`mailto:${mentor.email}`}
                      className="text-gray-600 hover:text-pink-600 transition-colors"
                    >
                      <FiMail size={20} />
                    </a>
                  </div>

                  <Button onClick={() => handleBookSession(mentor)} className="w-full">
                    Book Session
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {showBookingModal && selectedMentor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto"
          >
            <h3 className="text-2xl font-semibold mb-4">Book Session with {selectedMentor.name}</h3>

            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <img
                  src={selectedMentor.image}
                  alt={selectedMentor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{selectedMentor.name}</div>
                  <div className="text-sm text-gray-600">{selectedMentor.role} at {selectedMentor.company}</div>
                </div>
              </div>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={bookingForm.date}
                    onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    required
                    value={bookingForm.time}
                    onChange={(e) => setBookingForm({ ...bookingForm, time: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Discussion Topic
                </label>
                <input
                  type="text"
                  required
                  value={bookingForm.topic}
                  onChange={(e) => setBookingForm({ ...bookingForm, topic: e.target.value })}
                  placeholder="What would you like to discuss?"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Message
                </label>
                <textarea
                  rows="3"
                  value={bookingForm.message}
                  onChange={(e) => setBookingForm({ ...bookingForm, message: e.target.value })}
                  placeholder="Tell your mentor what you hope to get out of this session..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <Button type="submit" className="flex-1">
                  Confirm Booking
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => {
                    setShowBookingModal(false);
                    setBookingForm({ date: '', time: '', topic: '', message: '' });
                    setSelectedMentor(null);
                  }}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
