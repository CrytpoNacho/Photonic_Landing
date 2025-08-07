"use client";

import { useEffect, useState } from "react";
import "/styles/circularProgress.css";

export default function CircularProgress() {
  const [progress, setProgress] = useState(0);
  const [fillComplete, setFillComplete] = useState(false);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current > 100) {
        clearInterval(interval);
        setFillComplete(true);
        setFlash(true);

        setTimeout(() => setFlash(false), 1000); // quitamos la clase flash
      } else {
        setProgress(current);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`circular-progress-wrapper ${fillComplete ? "spin-ring" : ""}`}>
      {/* Anillo giratorio brillante */}
      {fillComplete && <div className="progress-glow-ring" />}

      <svg className="progress-ring" width="96" height="96">
        <circle
          className="progress-ring-bg"
          stroke="#f97316"
          strokeWidth="6"
          fill="transparent"
          r="44"
          cx="48"
          cy="48"
        />
        <circle
          className="progress-ring-circle"
          stroke="#f97316"
          strokeWidth="6"
          fill="transparent"
          r="44"
          cx="48"
          cy="48"
          style={{
            strokeDasharray: 276.46,
            strokeDashoffset: 276.46 - (276.46 * progress) / 100,
            transition: "stroke-dashoffset 0.05s ease-out",
          }}
        />
      </svg>

      <div className={`progress-inner-text ${flash ? "flash" : ""}`}>
        <span>{progress}%</span>
      </div>
    </div>
  );
}
