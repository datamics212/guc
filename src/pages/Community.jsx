import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiMessageCircle, FiBookmark, FiPlus } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';
import Card from '../components/Card';
import Button from '../components/Button';

export default function Community() {
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem('communityPosts');
    return saved ? JSON.parse(saved) : [
      {
        id: 1,
        author: 'Sarah Chen',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        type: 'post',
        content: 'Just landed my first software engineering internship at Google! The interview prep resources here were invaluable. Special thanks to everyone in the community who helped me along the way!',
        likes: 45,
        comments: 12,
        tags: ['Success Story', 'Internship'],
      },
      {
        id: 2,
        author: 'Priya Sharma',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
        timestamp: new Date(Date.now() - 7200000).toISOString(),
        type: 'blog',
        title: 'My Journey from Backend to Machine Learning',
        content: `# From Backend to ML: A Career Transition Story

After 3 years as a backend developer, I decided to pivot to machine learning. Here's what I learned:

## Key Takeaways
- **Math matters**: Brush up on linear algebra and statistics
- **Start small**: Begin with simple projects before tackling complex models
- **Community is everything**: Join study groups and attend meetups

The transition took 6 months of dedicated study, but it was worth it!`,
        likes: 78,
        comments: 23,
        tags: ['Career', 'Machine Learning'],
      },
      {
        id: 3,
        author: 'Maya Johnson',
        avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100',
        timestamp: new Date(Date.now() - 10800000).toISOString(),
        type: 'post',
        content: 'Looking for study partners for the upcoming AWS certification exam! Drop a comment if you are interested in forming a study group.',
        likes: 34,
        comments: 18,
        tags: ['Study Group', 'AWS'],
      },
    ];
  });

  const [showNewPostModal, setShowNewPostModal] = useState(false);
  const [newPost, setNewPost] = useState({
    type: 'post',
    title: '',
    content: '',
    tags: [],
  });

  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

  useEffect(() => {
    localStorage.setItem('communityPosts', JSON.stringify(posts));
  }, [posts]);

  const handleLike = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, likes: post.likes + 1 }
        : post
    ));
  };

  const handleCreatePost = (e) => {
    e.preventDefault();
    const post = {
      id: Date.now(),
      author: currentUser.name || 'Anonymous',
      avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100',
      timestamp: new Date().toISOString(),
      ...newPost,
      likes: 0,
      comments: 0,
      tags: newPost.tags.split(',').map(tag => tag.trim()).filter(Boolean),
    };
    setPosts([post, ...posts]);
    setNewPost({ type: 'post', title: '', content: '', tags: [] });
    setShowNewPostModal(false);
  };

  const formatTimestamp = (timestamp) => {
    const now = new Date();
    const postTime = new Date(timestamp);
    const diffMs = now - postTime;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
  };

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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Community Wall</h1>
              <p className="text-xl text-pink-100">
                Share your journey, ask questions, and inspire others
              </p>
            </div>
            <Button
              onClick={() => setShowNewPostModal(true)}
              variant="secondary"
              className="flex items-center space-x-2"
            >
              <FiPlus />
              <span>New Post</span>
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover={false}>
                <div className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <img
                      src={post.avatar}
                      alt={post.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900">{post.author}</h3>
                          <p className="text-sm text-gray-500">{formatTimestamp(post.timestamp)}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          post.type === 'blog'
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-green-100 text-green-600'
                        }`}>
                          {post.type === 'blog' ? 'Blog Post' : 'Update'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {post.title && (
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h2>
                  )}

                  <div className="prose prose-sm max-w-none mb-4">
                    {post.type === 'blog' ? (
                      <ReactMarkdown>{post.content}</ReactMarkdown>
                    ) : (
                      <p className="text-gray-700">{post.content}</p>
                    )}
                  </div>

                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center space-x-6 pt-4 border-t">
                    <button
                      onClick={() => handleLike(post.id)}
                      className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors"
                    >
                      <FiHeart />
                      <span className="text-sm">{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors">
                      <FiMessageCircle />
                      <span className="text-sm">{post.comments}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors">
                      <FiBookmark />
                      <span className="text-sm">Save</span>
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {showNewPostModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <h3 className="text-2xl font-semibold mb-4">Create New Post</h3>
            <form onSubmit={handleCreatePost} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Post Type
                </label>
                <select
                  value={newPost.type}
                  onChange={(e) => setNewPost({ ...newPost, type: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <option value="post">Quick Update</option>
                  <option value="blog">Blog Post (Markdown)</option>
                </select>
              </div>

              {newPost.type === 'blog' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    required={newPost.type === 'blog'}
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Enter blog title"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Content {newPost.type === 'blog' && '(Markdown supported)'}
                </label>
                <textarea
                  required
                  rows="6"
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder={newPost.type === 'blog' ? 'Write your blog post in markdown...' : 'What\'s on your mind?'}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  value={newPost.tags}
                  onChange={(e) => setNewPost({ ...newPost, tags: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="e.g., Career, JavaScript, Tips"
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <Button type="submit" className="flex-1">
                  Publish
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => {
                    setShowNewPostModal(false);
                    setNewPost({ type: 'post', title: '', content: '', tags: [] });
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
