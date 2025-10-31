import { useState } from "react";

export default function FeedNav() {
  const [active, setActive] = useState("home");

  return (
    <div className="flex gap-6 p-4 border-b border-[#2a2a2a]">
      {["home", "explore"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`relative px-6 py-3 text-gray-300 hover:text-white transition text-[1.33em] font-medium ${
            active === tab ? "text-white" : ""
          }`}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}

          {/* Animated underline */}
          <span
            className={`absolute left-0 bottom-0 h-[2px] bg-[#ffff80] rounded-full transition-all duration-300 ease-out
              ${active === tab ? "w-full opacity-100" : "w-0 opacity-0"}
            `}
          />
        </button>
      ))}
    </div>
  );
}
