import { motion } from "framer-motion";
import lunarLogo from "@/assets/lunar-logo.png";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  // Generate random particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 2 + 1,
    delay: Math.random() * 0.5,
  }));

  // Orbital dots
  const orbitals = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: i * 0.15,
    radius: 80 + i * 10,
  }));

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 3.2 }}
      onAnimationComplete={onComplete}
    >
      {/* Animated Background Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/40"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            y: [-20, -100],
          }}
          transition={{
            duration: particle.duration + 1,
            delay: particle.delay + 0.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Central Logo Container */}
      <div className="relative">
        {/* Outer Glow Rings */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {[1, 2, 3].map((ring) => (
            <motion.div
              key={ring}
              className="absolute rounded-full border border-primary/20"
              style={{
                width: 120 + ring * 40,
                height: 120 + ring * 40,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0.8, 1.1, 1],
                opacity: [0, 0.5, 0.2],
              }}
              transition={{
                duration: 1.5,
                delay: 0.2 * ring,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>

        {/* Orbital Dots */}
        {orbitals.map((orbital) => (
          <motion.div
            key={orbital.id}
            className="absolute left-1/2 top-1/2"
            initial={{ rotate: orbital.id * 45 }}
            animate={{ rotate: orbital.id * 45 + 360 }}
            transition={{
              duration: 3,
              delay: orbital.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-lunar-cyan"
              style={{
                marginLeft: -4,
                marginTop: -orbital.radius,
              }}
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 0.8] }}
              transition={{
                duration: 0.5,
                delay: orbital.delay + 0.3,
              }}
            />
          </motion.div>
        ))}

        {/* Pulsing Background Glow */}
        <motion.div
          className="absolute -inset-16 rounded-full bg-gradient-to-r from-primary/30 via-lunar-violet/20 to-lunar-cyan/30 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
            duration: 1,
          }}
          className="relative z-10"
        >
          {/* Inner Glow */}
          <motion.div
            className="absolute -inset-4 rounded-full bg-primary/50 blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <img
            src={lunarLogo}
            alt="LunarAI Logo"
            className="relative z-10 h-32 w-auto drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]"
          />
        </motion.div>
      </div>

      {/* Company Name Reveal */}
      <motion.div
        className="mt-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.h1
          className="text-3xl font-bold tracking-wider"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-primary via-lunar-violet to-lunar-cyan bg-clip-text text-transparent">
            LUNAR
          </span>
          <span className="text-foreground">AI</span>
        </motion.h1>
      </motion.div>

      {/* Loading Bar */}
      <motion.div
        className="mt-8 h-1 w-56 overflow-hidden rounded-full bg-secondary/50"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 1.2, duration: 0.3 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-primary via-lunar-violet to-lunar-cyan"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.8, delay: 1.4, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Loading Text with Typing Effect */}
      <motion.p
        className="mt-4 text-sm text-muted-foreground tracking-wide"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
      >
        <motion.span
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Launching into the AI Stratosphere...
        </motion.span>
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
