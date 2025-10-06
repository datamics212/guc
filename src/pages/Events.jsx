import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiClock, FiUsers, FiPlus } from 'react-icons/fi';
import Card from '../components/Card';
import Button from '../components/Button';

export default function Events() {
  const [showSuggestForm, setShowSuggestForm] = useState(false);
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Google Summer of Code Info Session',
      type: 'Internship',
      date: '2025-10-15',
      time: '2:00 PM EST',
      location: 'Virtual',
      attendees: 245,
      description: 'Learn about GSoC opportunities and how to apply for open source internships.',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 2,
      title: 'HackerRank Coding Challenge',
      type: 'Hackathon',
      date: '2025-10-20',
      time: '10:00 AM EST',
      location: 'Virtual',
      attendees: 1200,
      description: '24-hour coding marathon with amazing prizes and job opportunities.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 3,
      title: 'Microsoft Software Engineering Positions',
      type: 'Job Fair',
      date: '2025-10-25',
      time: '1:00 PM EST',
      location: 'Redmond, WA',
      attendees: 450,
      description: 'Meet Microsoft recruiters and learn about open positions.',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 4,
      title: 'AI/ML Workshop Series',
      type: 'Workshop',
      date: '2025-11-01',
      time: '3:00 PM EST',
      location: 'Virtual',
      attendees: 320,
      description: 'Hands-on workshop covering machine learning fundamentals.',
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 5,
      title: 'Women in Tech Career Fair',
      type: 'Job Fair',
      date: '2025-11-10',
      time: '11:00 AM EST',
      location: 'San Francisco, CA',
      attendees: 890,
      description: 'Connect with top tech companies actively hiring women engineers.',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 6,
      title: 'AWS Internship Program 2026',
      type: 'Internship',
      date: '2025-11-15',
      time: '4:00 PM EST',
      location: 'Virtual',
      attendees: 520,
      description: 'Information session about AWS summer internship opportunities.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ]);

  const [suggestForm, setSuggestForm] = useState({
    title: '',
    type: 'Hackathon',
    date: '',
    location: '',
    description: '',
  });

  const handleSuggestSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: events.length + 1,
      ...suggestForm,
      time: '12:00 PM EST',
      attendees: 0,
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
    };
    setEvents([...events, newEvent]);
    setSuggestForm({ title: '', type: 'Hackathon', date: '', location: '', description: '' });
    setShowSuggestForm(false);
  };

  const eventTypes = ['All', 'Hackathon', 'Job Fair', 'Internship', 'Workshop'];
  const [selectedType, setSelectedType] = useState('All');

  const filteredEvents = selectedType === 'All'
    ? events
    : events.filter((event) => event.type === selectedType);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-between items-center"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Events</h1>
              <p className="text-xl text-pink-100">
                Discover opportunities for internships, hackathons, and career growth
              </p>
            </div>
            <Button
              onClick={() => setShowSuggestForm(!showSuggestForm)}
              variant="secondary"
              className="flex items-center space-x-2"
            >
              <FiPlus />
              <span>Suggest Event</span>
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {showSuggestForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <Card hover={false}>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Suggest an Event</h3>
                <form onSubmit={handleSuggestSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Event Title
                      </label>
                      <input
                        type="text"
                        required
                        value={suggestForm.title}
                        onChange={(e) => setSuggestForm({ ...suggestForm, title: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Event Type
                      </label>
                      <select
                        value={suggestForm.type}
                        onChange={(e) => setSuggestForm({ ...suggestForm, type: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      >
                        <option>Hackathon</option>
                        <option>Job Fair</option>
                        <option>Internship</option>
                        <option>Workshop</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Date
                      </label>
                      <input
                        type="date"
                        required
                        value={suggestForm.date}
                        onChange={(e) => setSuggestForm({ ...suggestForm, date: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Location
                      </label>
                      <input
                        type="text"
                        required
                        value={suggestForm.location}
                        onChange={(e) => setSuggestForm({ ...suggestForm, location: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description
                    </label>
                    <textarea
                      required
                      rows="3"
                      value={suggestForm.description}
                      onChange={(e) => setSuggestForm({ ...suggestForm, description: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div className="flex space-x-3">
                    <Button type="submit">Submit Suggestion</Button>
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => setShowSuggestForm(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            </Card>
          </motion.div>
        )}

        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {eventTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedType === type
                    ? 'bg-pink-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-xs font-medium">
                      {event.type}
                    </span>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <FiUsers />
                      <span>{event.attendees}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>

                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <FiCalendar className="text-pink-600" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FiClock className="text-pink-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FiMapPin className="text-pink-600" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <Button className="w-full">Register Now</Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
