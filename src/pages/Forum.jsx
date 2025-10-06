import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMessageSquare, FiSend, FiPlus, FiUsers } from 'react-icons/fi';
import Card from '../components/Card';
import Button from '../components/Button';

export default function Forum() {
  const [rooms, setRooms] = useState([
    { id: 1, name: 'General Discussion', members: 1245, messages: [] },
    { id: 2, name: 'Career Advice', members: 892, messages: [] },
    { id: 3, name: 'Interview Prep', members: 654, messages: [] },
    { id: 4, name: 'Web Development', members: 1120, messages: [] },
    { id: 5, name: 'AI & Machine Learning', members: 980, messages: [] },
    { id: 6, name: 'Job Opportunities', members: 1450, messages: [] },
  ]);

  const [selectedRoom, setSelectedRoom] = useState(null);
  const [messageInput, setMessageInput] = useState('');
  const [showNewRoomModal, setShowNewRoomModal] = useState(false);
  const [newRoomName, setNewRoomName] = useState('');

  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageInput.trim() || !selectedRoom) return;

    const newMessage = {
      id: Date.now(),
      user: currentUser.name || 'Anonymous',
      text: messageInput,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setRooms(
      rooms.map((room) =>
        room.id === selectedRoom.id
          ? { ...room, messages: [...room.messages, newMessage] }
          : room
      )
    );

    setSelectedRoom({
      ...selectedRoom,
      messages: [...selectedRoom.messages, newMessage],
    });

    setMessageInput('');
  };

  const handleCreateRoom = (e) => {
    e.preventDefault();
    if (!newRoomName.trim()) return;

    const newRoom = {
      id: rooms.length + 1,
      name: newRoomName,
      members: 1,
      messages: [],
    };

    setRooms([...rooms, newRoom]);
    setNewRoomName('');
    setShowNewRoomModal(false);
  };

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
    if (room.messages.length === 0) {
      const welcomeMessage = {
        id: 1,
        user: 'System',
        text: `Welcome to ${room.name}! Start a conversation.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      const updatedRoom = { ...room, messages: [welcomeMessage] };
      setSelectedRoom(updatedRoom);
      setRooms(rooms.map((r) => (r.id === room.id ? updatedRoom : r)));
    }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Discussion Forums</h1>
            <p className="text-xl text-pink-100">
              Connect with the community and share knowledge
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <Card hover={false}>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Chat Rooms</h2>
                  <button
                    onClick={() => setShowNewRoomModal(true)}
                    className="text-pink-600 hover:text-pink-700"
                  >
                    <FiPlus size={20} />
                  </button>
                </div>

                <div className="space-y-2">
                  {rooms.map((room) => (
                    <button
                      key={room.id}
                      onClick={() => handleRoomClick(room)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedRoom?.id === room.id
                          ? 'bg-pink-100 text-pink-600'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <FiMessageSquare />
                          <span className="font-medium">{room.name}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-gray-500">
                          <FiUsers size={12} />
                          <span>{room.members}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-2">
            {selectedRoom ? (
              <Card hover={false} className="h-[600px] flex flex-col">
                <div className="p-4 border-b bg-gray-50">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">{selectedRoom.name}</h2>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <FiUsers />
                      <span>{selectedRoom.members} members</span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {selectedRoom.messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${
                        message.user === currentUser.name ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.user === 'System'
                            ? 'bg-gray-100 text-gray-600 text-center'
                            : message.user === currentUser.name
                            ? 'bg-pink-600 text-white'
                            : 'bg-gray-200 text-gray-800'
                        }`}
                      >
                        {message.user !== 'System' && (
                          <div className="text-xs font-medium mb-1">
                            {message.user}
                          </div>
                        )}
                        <div className="text-sm">{message.text}</div>
                        <div className="text-xs mt-1 opacity-70">{message.timestamp}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="p-4 border-t bg-gray-50">
                  <form onSubmit={handleSendMessage} className="flex space-x-2">
                    <input
                      type="text"
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                    <Button type="submit" className="flex items-center space-x-2">
                      <FiSend />
                      <span>Send</span>
                    </Button>
                  </form>
                </div>
              </Card>
            ) : (
              <Card hover={false} className="h-[600px] flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <FiMessageSquare size={48} className="mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Select a chat room to start messaging</p>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>

      {showNewRoomModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-6 max-w-md w-full"
          >
            <h3 className="text-xl font-semibold mb-4">Create New Room</h3>
            <form onSubmit={handleCreateRoom}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Room Name
                </label>
                <input
                  type="text"
                  value={newRoomName}
                  onChange={(e) => setNewRoomName(e.target.value)}
                  placeholder="Enter room name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  autoFocus
                />
              </div>
              <div className="flex space-x-3">
                <Button type="submit" className="flex-1">
                  Create
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => {
                    setShowNewRoomModal(false);
                    setNewRoomName('');
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
