import React from "react";

interface AnimatedDecorationsProps {
  className?: string;
}

const AnimatedDecorations: React.FC<AnimatedDecorationsProps> = ({
  className = "",
}) => {
  const stars = [
    { left: "10%", top: "15%", delay: "0s", duration: "3s" },
    { right: "15%", top: "25%", delay: "0.5s", duration: "2.5s" },
    { left: "8%", top: "45%", delay: "1s", duration: "3.5s" },
    { right: "12%", top: "60%", delay: "1.5s", duration: "2.8s" },
    { left: "15%", top: "75%", delay: "2s", duration: "3.2s" },
    { left: "25%", top: "35%", delay: "0.8s", duration: "2.7s" },
    { right: "25%", top: "55%", delay: "1.2s", duration: "3.1s" },
    { left: "50%", top: "20%", delay: "0.3s", duration: "2.9s" },
    { right: "35%", top: "70%", delay: "1.8s", duration: "3.3s" },
    { right: "45%", top: "40%", delay: "0.7s", duration: "2.6s" },
    { left: "40%", top: "80%", delay: "2.2s", duration: "3.4s" },
    { right: "60%", top: "30%", delay: "1.3s", duration: "2.4s" },
  ];

  const dots = [
    { left: "20%", top: "20%", delay: "0s", duration: "4s" },
    { right: "20%", top: "30%", delay: "0.5s", duration: "3.5s" },
    { left: "15%", top: "50%", delay: "1s", duration: "4.2s" },
    { right: "18%", top: "65%", delay: "1.5s", duration: "3.8s" },
    { left: "35%", top: "40%", delay: "0.8s", duration: "3.6s" },
    { right: "30%", top: "75%", delay: "2s", duration: "4.1s" },
    { right: "40%", top: "25%", delay: "1.2s", duration: "3.9s" },
    { left: "30%", top: "85%", delay: "1.8s", duration: "3.7s" },
  ];

  return (
    <div
      className={`absolute w-full h-full pointer-events-none left-0 top-0 ${className}`}
    >
      {/* Twinkling Stars */}
      {stars.map((star, index) => (
        <div
          key={`star-${index}`}
          className="absolute text-green-500 text-base opacity-60"
          style={{
            left: star.left,
            right: star.right,
            top: star.top,
            animation: `twinkle ${star.duration} ease-in-out infinite ${star.delay}`,
          }}
          aria-hidden="true"
        >
          ✦
        </div>
      ))}

      {/* Floating Dots */}
      {dots.map((dot, index) => (
        <div
          key={`dot-${index}`}
          className="absolute w-1 h-1 opacity-40 bg-green-500 rounded-[50%]"
          style={{
            left: dot.left,
            right: dot.right,
            top: dot.top,
            animation: `float ${dot.duration} ease-in-out infinite ${dot.delay}`,
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

export default AnimatedDecorations;
