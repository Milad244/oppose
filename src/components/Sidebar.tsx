import Logo from "../assets/oppose_cropped_icon.png";

export default function Sidebar() {
  return (
    <div className="w-80 h-screen flex flex-col items-start py-4 px-8">
      {/* Logo / Icon */}
      <div className="mb-8 flex items-center gap-2">
        <img src={Logo} alt="Logo" className="w-24 h-24 md:w-20 md:h-20 object-contain" />
        {/* Title only shows on medium screens and above */}
        <span className="hidden md:inline text-white font-bold text-4xl" style={{ fontFamily: 'Rye, sans-serif' }}>
          Oppose
        </span>
      </div>

      {/* Sidebar buttons */}
      <div className="flex flex-col gap-4">
        <button className="w-12 h-12 bg-gray-700 rounded-lg hover:bg-gray-600 transition flex items-center justify-center">
          🏠
        </button>
        <button className="w-12 h-12 bg-gray-700 rounded-lg hover:bg-gray-600 transition flex items-center justify-center">
          🔔
        </button>
        <button className="w-12 h-12 bg-gray-700 rounded-lg hover:bg-gray-600 transition flex items-center justify-center">
          ⚙️
        </button>
      </div>
    </div>
  );
}
