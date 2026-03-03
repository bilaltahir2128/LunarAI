import { motion } from "framer-motion";
import umar from "@/assets/DSC_1550 copy (2).jpg";
import abd from "@/assets/DSC_1544 copy (1).jpg"
const TeamSection = () => {
  const team = [
    {
      name: "Muhammad Umar",
      role: "Chief of Operations",
      description: "Leading AI automation innovation for enterprise solutions",
      image: umar,
    },
    {
      name: "Muhammad Abdullah",
      role: "CEO & AI Strategist",
      description: "Building cutting-edge AI systems and neural networks",
      image: abd,
    },
    {
      name: "Marcus Johnson",
      role: "Head of Automation",
      description: "Designing seamless workflow automation solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="team" className="relative py-20 lg:py-32">
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
            Meet the <span className="gradient-text">LunarAI Team</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Experts in complete AI automation systems
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="gradient-border p-8 text-center transition-all duration-300 card-glow"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="mb-6 flex justify-center"
              >
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/40 via-lunar-violet/40 to-lunar-cyan/40 blur-sm"
                  />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative h-28 w-28 rounded-full object-cover ring-2 ring-primary/30"
                  />
                </div>
              </motion.div>
              <h3 className="mb-1 text-xl font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="mb-4 text-sm font-medium text-primary">
                {member.role}
              </p>
              <p className="text-sm text-muted-foreground">
                {member.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
