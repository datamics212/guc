import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiPlayCircle } from 'react-icons/fi';
import Card from '../components/Card';

export default function InterviewExperiences() {
  const [expandedId, setExpandedId] = useState(null);

  const experiences = [
    {
      id: 1,
      name: 'Sarah Chen',
      company: 'Google',
      position: 'Software Engineer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      summary: 'Navigated 5 rounds of technical interviews including system design and behavioral questions.',
      experience: `The interview process at Google was comprehensive and challenging. It consisted of 5 rounds spread over 3 weeks.

**Round 1: Phone Screen**
Started with a coding problem on arrays and strings. The interviewer was very friendly and gave hints when I got stuck.

**Round 2-3: Technical Rounds**
Two 45-minute coding sessions focusing on algorithms and data structures. I was asked about graph traversal and dynamic programming.

**Round 4: System Design**
Designed a scalable notification system. This was the most challenging part. Make sure to discuss trade-offs!

**Round 5: Behavioral**
Questions about teamwork, conflict resolution, and past projects. Use the STAR method!

**Tips:**
- Practice LeetCode medium/hard problems
- Communicate your thought process clearly
- Ask clarifying questions
- Don't rush into coding`,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      company: 'Microsoft',
      position: 'SDE II',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      summary: 'Three technical rounds focusing on coding, system design, and product sense.',
      experience: `Microsoft's interview was well-structured and focused on both technical and soft skills.

**Preparation:**
I spent 3 months preparing, focusing on:
- Data structures and algorithms
- System design fundamentals
- Azure cloud services
- Behavioral questions

**Interview Day:**
All interviews were virtual, which was convenient.

**Round 1: Coding**
Two medium-level coding problems in 45 minutes. Focus on optimization.

**Round 2: System Design**
Design a file storage system like OneDrive. Discussed scalability, caching, and CDNs.

**Round 3: Behavioral + Technical**
Past project deep-dive and leadership questions. They really value growth mindset.

**Key Takeaways:**
- Show genuine interest in Microsoft products
- Discuss real-world applications
- Be honest about what you don't know
- Follow up with thoughtful questions`,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 3,
      name: 'Maya Johnson',
      company: 'Amazon',
      position: 'SDE',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      summary: 'Leadership principles-based interviews with focus on behavioral scenarios and coding.',
      experience: `Amazon's interview heavily emphasizes their 14 Leadership Principles.

**Process Overview:**
- Online assessment (OA)
- Phone screen
- Virtual onsite (4 rounds)

**Online Assessment:**
2 coding problems + work simulation. Completed in 1.5 hours.

**Phone Screen:**
One coding problem (trees/graphs) and LP questions.

**Virtual Onsite:**

*Round 1: Coding*
Implement a LRU cache. Optimize for time and space.

*Round 2: Coding + LP*
String manipulation problem + "Tell me about a time you failed"

*Round 3: System Design*
Design a warehouse inventory system. Consider scalability and reliability.

*Round 4: Bar Raiser*
This is tougher! Mix of coding and deep behavioral questions.

**Critical Tips:**
- Prepare STAR stories for all 14 LPs
- Think out loud during coding
- Consider edge cases
- Show customer obsession`,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      company: 'Meta',
      position: 'Software Engineer',
      image: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=300',
      summary: 'Focused on coding, system design, and behavioral rounds with emphasis on impact.',
      experience: `Meta's process tests both technical depth and cultural fit.

**Timeline:**
Recruiter call → Phone screen → Virtual onsite → Team matching

**Phone Screen:**
Two coding problems in 45 minutes. Focus on optimization and edge cases.

**Virtual Onsite (4 rounds):**

*Coding Round 1:*
Implement a data structure with specific constraints. Asked about time/space complexity.

*Coding Round 2:*
Graph problem with twist. Had to explain multiple approaches.

*System Design:*
Design Instagram Stories feature. Discussed infrastructure, storage, and scale.

*Behavioral ("Jedi Round"):*
Deep dive into past projects, impact metrics, and team collaboration.

**What Made the Difference:**
- Demonstrated impact in previous roles
- Clear communication
- Showed excitement about Meta's mission
- Asked insightful questions about team culture

**Resources I Used:**
- Cracking the Coding Interview
- System Design Interview by Alex Xu
- Mock interviews with peers`,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Interview Experiences</h1>
            <p className="text-xl text-pink-100">
              Learn from real interview experiences at top tech companies
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover={false}>
                <div className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <img
                      src={exp.image}
                      alt={exp.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900">{exp.name}</h3>
                      <p className="text-pink-600 font-medium">
                        {exp.position} at {exp.company}
                      </p>
                      <p className="text-gray-600 mt-2">{exp.summary}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleExpand(exp.id)}
                    className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <span className="font-medium text-gray-700">
                      {expandedId === exp.id ? 'Hide Details' : 'Read Full Experience'}
                    </span>
                    {expandedId === exp.id ? (
                      <FiChevronUp className="text-pink-600" />
                    ) : (
                      <FiChevronDown className="text-pink-600" />
                    )}
                  </button>

                  <AnimatePresence>
                    {expandedId === exp.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 space-y-4">
                          <div className="prose prose-sm max-w-none">
                            {exp.experience.split('\n\n').map((paragraph, idx) => {
                              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                                return (
                                  <h4 key={idx} className="text-lg font-semibold text-gray-900 mt-4 mb-2">
                                    {paragraph.replace(/\*\*/g, '')}
                                  </h4>
                                );
                              } else if (paragraph.startsWith('*') && paragraph.includes(':')) {
                                const [title, ...content] = paragraph.split(':');
                                return (
                                  <div key={idx} className="mb-3">
                                    <h5 className="font-semibold text-gray-800">
                                      {title.replace(/\*/g, '')}:
                                    </h5>
                                    <p className="text-gray-600">{content.join(':')}</p>
                                  </div>
                                );
                              } else if (paragraph.startsWith('-')) {
                                return (
                                  <li key={idx} className="text-gray-600 ml-4">
                                    {paragraph.substring(2)}
                                  </li>
                                );
                              } else {
                                return (
                                  <p key={idx} className="text-gray-600">
                                    {paragraph}
                                  </p>
                                );
                              }
                            })}
                          </div>

                          <div className="mt-6 pt-6 border-t">
                            <div className="flex items-center space-x-2 text-gray-700 mb-3">
                              <FiPlayCircle className="text-pink-600" />
                              <span className="font-medium">Watch Video Interview</span>
                            </div>
                            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                              <iframe
                                width="100%"
                                height="100%"
                                src={exp.videoUrl}
                                title={`${exp.name} Interview Experience`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
