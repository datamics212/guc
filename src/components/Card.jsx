export default function Card({ children, className = '', hover = true }) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${
        hover ? 'transition-transform hover:scale-105 hover:shadow-xl' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
