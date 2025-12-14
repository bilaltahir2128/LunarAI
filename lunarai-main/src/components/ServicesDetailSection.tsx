import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

import voiceAiImage from "@/assets/voice-ai.webp";
import customerSupportImage from "@/assets/customer-support.webp";
import socialMediaImage from "@/assets/social-media.webp";
import leadGenImage from "@/assets/lead-gen.webp";

interface ServiceFeature {
  text: string;
}

interface ServiceData {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: ServiceFeature[];
  image: string;
  imageAlt: string;
}

const services: ServiceData[] = [
  {
    id: "voice-ai",
    badge: "Service 01",
    title: "Voice AI Agents",
    description:
      "Transform your appointment scheduling with intelligent voice AI that handles bookings, reschedules, and confirmations automatically. Our voice agents understand natural language and provide a seamless experience for your customers.",
    features: [
      { text: "Natural language processing" },
      { text: "Multi-language support" },
      { text: "Calendar integration" },
    ],
    image: voiceAiImage,
    imageAlt: "Voice AI Technology",
  },
  {
    id: "customer-support",
    badge: "Service 02",
    title: "AI-Powered Customer Support",
    description:
      "Deliver exceptional 24/7 customer support with AI agents that understand context, resolve issues, and escalate when needed. Never miss a customer inquiry again.",
    features: [
      { text: "24/7 availability" },
      { text: "Instant response times" },
      { text: "Smart escalation system" },
    ],
    image: customerSupportImage,
    imageAlt: "AI Customer Support Robot",
  },
  {
    id: "social-media",
    badge: "Service 03",
    title: "Social Media Automation",
    description:
      "Maintain consistent social media presence with automated scheduling, posting, and engagement tracking across all platforms. Focus on strategy while AI handles execution.",
    features: [
      { text: "Multi-platform scheduling" },
      { text: "Content optimization" },
      { text: "Analytics & insights" },
    ],
    image: socialMediaImage,
    imageAlt: "Social Media Analytics Dashboard",
  },
  {
    id: "lead-generation",
    badge: "Service 04",
    title: "AI Lead Generation & Qualification",
    description:
      "Automate your entire lead generation pipeline with AI that researches, qualifies, and scores leads based on your ideal customer profile. Focus on closing, not searching.",
    features: [
      { text: "Automated lead research" },
      { text: "Smart qualification scoring" },
      { text: "CRM integration" },
    ],
    image: leadGenImage,
    imageAlt: "Lead Generation Funnel",
  },
];

const ServiceCard = ({
  service,
  reverse = false,
  index,
}: {
  service: ServiceData;
  reverse?: boolean;
  index: number;
}) => {
  return (
    <motion.div
      id={service.id}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`grid gap-12 items-center lg:grid-cols-2 ${reverse ? "lg:flex-row-reverse" : ""}`}
    >
      {/* Content */}
      <div className={`flex flex-col gap-6 ${reverse ? "lg:order-2" : ""}`}>
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-flex w-fit rounded-full bg-secondary px-4 py-2 text-sm font-medium text-muted-foreground"
        >
          {service.badge}
        </motion.span>
        <h3 className="text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
          {service.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {service.description}
        </p>
        <ul className="flex flex-col gap-3">
          {service.features.map((feature, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="flex items-center gap-3 text-foreground"
            >
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>{feature.text}</span>
            </motion.li>
          ))}
      </ul>
      </div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`relative ${reverse ? "lg:order-1" : ""}`}
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-2xl neon-border"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-lunar-violet/10 to-lunar-pink/20 blur-xl" />
          <img
            src={service.image}
            alt={service.imageAlt}
            className="relative z-10 h-auto w-full rounded-2xl object-cover"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const ServicesDetailSection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col gap-24 lg:gap-32">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              reverse={index % 2 === 1}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailSection;
