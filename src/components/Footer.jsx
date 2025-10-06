import { Link } from 'react-router-dom';
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">GU</span>
              </div>
              <span className="text-xl font-bold">Girl Up Coders</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Empowering women in tech through education, mentorship, and community support.
              Join us on the journey to shape the future of technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <FiGithub size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <FiInstagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/mentorship" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Mentorship
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <FiMail size={16} />
                <span>contact@girlupcoders.org</span>
              </li>
              <li className="text-gray-400">
                123 Tech Street<br />
                Silicon Valley, CA 94000
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Girl Up Coders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
