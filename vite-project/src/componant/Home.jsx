import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import agentIcon from "../assets/agentIcon.png";
// import adminIcon from "../assets/admin.png";

const LoginCard = ({ title, icon, type, hovered, setHovered }) => {
  const isHovered = hovered === type;

  return (
    <motion.div
      onMouseEnter={() => setHovered(type)}
      onMouseLeave={() => setHovered(null)}
      animate={{
        scale: isHovered ? 1.15 : hovered ? 0.9 : 1,
        zIndex: isHovered ? 10 : 1,
      }}
      transition={{ duration: 0.4 }}
      className={`relative w-80 h-${isHovered ? "auto" : "64"} bg-white/10 rounded-2xl shadow-2xl backdrop-blur-lg text-white px-6 py-6 overflow-hidden`}
    >
      <div className="flex flex-col items-center">
        <img src={icon} alt={`${type} icon`} className="w-20 h-20 mb-3" />
        <h3 className="text-xl font-bold mb-2">{title}</h3>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4 }}
              className="w-full mt-4 space-y-3"
            >
              <input
                type="text"
                placeholder={`${type.toUpperCase()} Username`}
                className="w-full px-4 py-2 rounded bg-white/80 text-black focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 rounded bg-white/80 text-black focus:outline-none"
              />
              <button className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 transition text-white py-2 rounded font-semibold">
                Login
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Home = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500 px-4 py-12">
      <h1 className="text-5xl font-extrabold text-white mb-12 drop-shadow-lg">
        Dial<span className="text-yellow-300">Pro</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-12 transition-all">
        <LoginCard
          title="Agent Login"
          icon={agentIcon}
          type="agent"
          hovered={hovered}
          setHovered={setHovered}
        />
        <LoginCard
          title="Admin Login"
          icon={agentIcon}
          type="admin"
          hovered={hovered}
          setHovered={setHovered}
        />
      </div>
    </div>
  );
};

export default Home;
