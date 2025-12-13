import { Mic, Headphones, Instagram, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Mic,
      title: "Voice AI Agents",
      description: "Automate appointment booking with intelligent voice assistants",
    },
    {
      icon: Headphones,
      title: "AI Customer Support",
      description: "24/7 automated client support that never sleeps",
    },
    {
      icon: Instagram,
      title: "Social Media Automation",
      description: "Schedule, post, and track engagement automatically",
    },
    {
      icon: TrendingUp,
      title: "Lead Generation AI",
      description: "Automate lead research and qualification scoring",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section id="services" className="relative py-20 lg:py-32">
      {/* Section gradient background */}
      <div className="absolute inset-0 -z-10 section-gradient" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Our <span className="gradient-text">AI Solutions</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Powerful automation tools to transform your business
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group gradient-border p-6 transition-all duration-300 card-glow cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
                className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 transition-colors group-hover:bg-primary/30"
              >
                <solution.icon className="h-7 w-7 text-primary transition-transform group-hover:scale-110" />
              </motion.div>
              <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {solution.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
