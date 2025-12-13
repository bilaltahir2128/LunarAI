import { Button } from "@/components/ui/button";
import heroRobot from "@/assets/hero-robot.png";
import { Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";

const HeroSection = () => {
  const { displayedText, isComplete } = useTypewriter({
    text: "Launch Your Business into the",
    speed: 40,
    delay: 500,
  });

  const stats = [
    { value: "500+", label: "Hours Saved" },
    { value: "10000+", label: "Tasks Automated" },
    { value: "95+", label: "% Efficiency" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section id="home" className="relative min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2"
            >
              <Rocket className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI Automation Agency</span>
            </motion.div>

            <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              {displayedText}
              {!isComplete && <span className="animate-pulse">|</span>}
              {isComplete && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {" "}
                  <span className="glow-text gradient-text">AI Stratosphere</span>
                </motion.span>
              )}
            </h1>

            <motion.p
              variants={itemVariants}
              className="max-w-lg text-lg text-muted-foreground"
            >
              Save time, reduce costs, and boost productivity with cutting-edge AI automation solutions tailored for your business.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="#contact">
                  <Button variant="hero" size="lg">
                    Request a Consultation
                  </Button>
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="heroOutline" size="lg">
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-8 lg:gap-12"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 + index * 0.2 }}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col"
                >
                  <span className="text-3xl font-bold text-foreground md:text-4xl">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/30 via-lunar-violet/20 to-lunar-pink/30 blur-2xl" />
              <img
                src={heroRobot}
                alt="AI Robot Assistant"
                className="relative z-10 h-auto w-full max-w-md rounded-2xl object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 left-0 h-64 w-64 rounded-full bg-lunar-violet/10 blur-3xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;
