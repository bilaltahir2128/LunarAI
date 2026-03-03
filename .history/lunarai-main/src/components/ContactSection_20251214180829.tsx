import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin , Instagram } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }
    if (!formData.service) {
      newErrors.service = "Please select a service";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });
      
      if (error) throw error;
      
      setShowSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "admin@lunarai.agency",
    },
    {
      icon: Instagram,
      title: "DM us",
      detail: "@lunar_ai1",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "Islamabad , Pakistan",
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 xl:py-32 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 lg:mb-16 text-center"
        >
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base lg:text-lg text-muted-foreground px-4">
            Ready to transform your business with AI automation?
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl w-full"
        >
          <div className="gradient-border p-4 sm:p-6 md:p-8 lg:p-10 w-full">
            <div className="grid gap-4 sm:gap-5 lg:gap-6 w-full">
              {/* Name Row */}
              <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 w-full">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col gap-2 w-full"
                >
                  <label className="text-xs sm:text-sm font-medium text-foreground">
                    First Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => {
                      setFormData({ ...formData, firstName: e.target.value });
                      if (errors.firstName) setErrors({ ...errors, firstName: "" });
                    }}
                    className={`w-full ${errors.firstName ? "border-destructive" : ""}`}
                  />
                  {errors.firstName && (
                    <span className="text-xs text-destructive">{errors.firstName}</span>
                  )}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col gap-2 w-full"
                >
                  <label className="text-xs sm:text-sm font-medium text-foreground">
                    Last Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => {
                      setFormData({ ...formData, lastName: e.target.value });
                      if (errors.lastName) setErrors({ ...errors, lastName: "" });
                    }}
                    className={`w-full ${errors.lastName ? "border-destructive" : ""}`}
                  />
                  {errors.lastName && (
                    <span className="text-xs text-destructive">{errors.lastName}</span>
                  )}
                </motion.div>
              </div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col gap-2 w-full"
              >
                <label className="text-xs sm:text-sm font-medium text-foreground">
                  Email Address <span className="text-destructive">*</span>
                </label>
                <Input
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: "" });
                  }}
                  className={`w-full ${errors.email ? "border-destructive" : ""}`}
                />
                {errors.email && (
                  <span className="text-xs text-destructive">{errors.email}</span>
                )}
              </motion.div>

              {/* Company */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-2 w-full"
              >
                <label className="text-xs sm:text-sm font-medium text-foreground">
                  Company Name <span className="text-destructive">*</span>
                </label>
                <Input
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={(e) => {
                    setFormData({ ...formData, company: e.target.value });
                    if (errors.company) setErrors({ ...errors, company: "" });
                  }}
                  className={`w-full ${errors.company ? "border-destructive" : ""}`}
                />
                {errors.company && (
                  <span className="text-xs text-destructive">{errors.company}</span>
                )}
              </motion.div>

              {/* Service Interest */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col gap-2 w-full"
              >
                <label className="text-xs sm:text-sm font-medium text-foreground">
                  Service Interest <span className="text-destructive">*</span>
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => {
                    setFormData({ ...formData, service: e.target.value });
                    if (errors.service) setErrors({ ...errors, service: "" });
                  }}
                  className={`flex h-10 sm:h-12 w-full rounded-lg border bg-secondary px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-foreground ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary/50 ${
                    errors.service ? "border-destructive" : "border-border/50"
                  }`}
                >
                  <option value="">Select a service</option>
                  <option value="Voice AI Agents">Voice AI Agents</option>
                  <option value="AI Customer Support">AI Customer Support</option>
                  <option value="Social Media Automation">Social Media Automation</option>
                  <option value="Lead Generation">Lead Generation</option>
                </select>
                {errors.service && (
                  <span className="text-xs text-destructive">{errors.service}</span>
                )}
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-col gap-2 w-full"
              >
                <label className="text-xs sm:text-sm font-medium text-foreground">
                  Message <span className="text-destructive">*</span>
                </label>
                <textarea
                  placeholder="Tell us about your automation needs..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: "" });
                  }}
                  className={`flex w-full rounded-lg border bg-secondary px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-foreground ring-offset-background transition-all duration-200 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary/50 resize-none ${
                    errors.message ? "border-destructive" : "border-border/50"
                  }`}
                />
                {errors.message && (
                  <span className="text-xs text-destructive">{errors.message}</span>
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full"
              >
                <Button 
                  onClick={handleSubmit}
                  variant="hero" 
                  size="xl" 
                  className="w-full mt-2 text-sm sm:text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Schedule Your Free Consultation"}
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 sm:mt-12 lg:mt-16 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-3 w-full"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex flex-col items-center text-center w-full"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="mb-3 sm:mb-4 flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-primary/20"
              >
                <info.icon className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
              </motion.div>
              <h3 className="mb-1 text-sm sm:text-base font-semibold text-foreground">{info.title}</h3>
              <p className="text-xs sm:text-sm lg:text-base text-muted-foreground break-all">{info.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md mx-4">
          <DialogHeader>
            <DialogTitle className="text-center text-lg sm:text-xl">
              Thank you for contacting us!
            </DialogTitle>
            <DialogDescription className="text-center pt-2 text-sm sm:text-base">
              We will contact you soon on your provided email address.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-4">
            <Button variant="hero" onClick={() => setShowSuccess(false)} className="text-sm sm:text-base">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactSection;