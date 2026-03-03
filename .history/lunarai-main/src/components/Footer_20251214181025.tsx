import LunarLogo from "./LunarLogo";
import { Mail, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const footerLinks = {
    services: [
      { label: "Voice AI Agents", href: "#voice-ai" },
      { label: "AI Customer Support", href: "#customer-support" },
      { label: "Social Media Automation", href: "#social-media" },
      { label: "Lead Generation", href: "#lead-generation" },
    ],
    company: [
      { label: "About Us", href: "#team" },
      { label: "Contact", href: "#contact" },
    ],
  };

  const socialLinks = [
    { icon: Mail, href: "mailto:admin@lunarai.agency", label: "Email" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/lunar_ai1/", label: "Instagram" },
  ];

  return (
    <footer className="border-t border-border/30 bg-background py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 sm:gap-12 grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <motion.div whileHover={{ scale: 1.05 }} className="w-fit">
              <LunarLogo />
            </motion.div>
            <p className="mt-4 text-sm text-muted-foreground">
              Launching businesses into the AI stratosphere
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Services</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary inline-block"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Company</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary inline-block"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all hover:bg-primary/20 hover:text-primary"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 lg:mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/30 pt-6 lg:pt-8 md:flex-row"
        >
          <p className="text-sm text-muted-foreground">
            © 2026 LunarAI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
