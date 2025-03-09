import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";

const ComingSoon = () => {
  const calculateTimeLeft = () => {
    const launchDate = Math.floor(Date.now() / 1000) + 2 * 24 * 3600; // Launch in 2 days (in seconds)
    const currentTime = Math.floor(Date.now() / 1000);
    return Math.max(launchDate - currentTime, 0);
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => Math.max(prevTime - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (totalSeconds) => {
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="coming-soon-container">
      <div className="overlay">
        <motion.h1
          className="school-name"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          The Elegant School
        </motion.h1>
        <motion.h1
          className="title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Something big is <br /> coming soon
        </motion.h1>
        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          We are launching soon! Stay tuned.
        </motion.p>
        <motion.div
          className="countdown"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="time-box-container">
            <div className="time-box">{days} <span className="label">Days</span></div>
            <div className="time-box">{hours} <span className="label">Hours</span></div>
            <div className="time-box">{minutes} <span className="label">Minutes</span></div>
            <div className="time-box">{seconds} <span className="label">Seconds</span></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComingSoon;
