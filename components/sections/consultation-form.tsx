"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle } from "lucide-react";

interface ConsultationFormProps {
  variant?: "default" | "split";
  title?: string;
  subtitle?: string;
}

export function ConsultationForm({
  variant = "default",
  title,
  subtitle,
}: ConsultationFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    concern: "aesthetic-concerns",
    message: "",
    howYouHeard: "other",
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const concerns = [
    { value: "aesthetic-concerns", label: "Aesthetic Concerns" },
    { value: "skin-health", label: "Skin Health" },
    { value: "hair-loss", label: "Hair Loss" },
    { value: "weight-management", label: "Weight Management" },
    { value: "hormone-optimization", label: "Hormone Optimization" },
    { value: "general-wellness", label: "General Wellness" },
    { value: "other", label: "Other" },
  ];

  const howYouHeardOptions = [
    { value: "google", label: "Google Search" },
    { value: "instagram", label: "Instagram" },
    { value: "referral", label: "Friend/Family Referral" },
    { value: "other", label: "Other" },
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.consent)
      newErrors.consent = "Please accept the consultation fee";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    if (!validateForm()) return;

    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          concern: formData.concern,
          message: formData.message,
          howYouHeard: formData.howYouHeard,
          formType: 'consultation',
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to send request');
      }

      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          concern: "aesthetic-concerns",
          message: "",
          howYouHeard: "other",
          consent: false,
        });
        setSubmitted(false);
      }, 8000);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please call us at (858) 337-7999.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-24 md:py-40 bg-[#0a1628] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#C9A227]/8 to-transparent rounded-full filter blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-gradient-to-l from-blue-500/8 to-transparent rounded-full filter blur-3xl opacity-15 -z-10" />

      <div className="container-healinque relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20 max-w-2xl mx-auto"
        >
          <p className="text-[#C9A227] font-medium tracking-[0.2em] uppercase text-xs mb-6">
            {subtitle || "LET'S BEGIN"}
          </p>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-2 leading-tight">
            {title ? title : <>Request Your{" "}<span className="text-[#C9A227] italic">Consultation</span></>}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#C9A227] to-[#C9A227]/40 mx-auto mt-10 mb-10" />
          <p className="text-lg text-white/75 leading-relaxed">
            The $100 consultation fee is credited toward your first treatment.
          </p>
        </motion.div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="text-center py-12 md:py-16"
              >
                <div className="inline-flex w-16 h-16 items-center justify-center rounded-full bg-[#C9A227]/10 mb-6">
                  <CheckCircle className="w-8 h-8 text-[#C9A227]" />
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                  Thank You!
                </h3>
                <p className="text-lg text-white/75 mb-8 leading-relaxed">
                  Your consultation request has been received. We&apos;ll be in touch
                  within 24 hours to confirm your appointment.
                </p>
                <p className="text-sm text-white/60">
                  Expected consultation fee: $100 (credited toward your first treatment)
                </p>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label className="block text-white font-medium text-sm">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5 text-white placeholder:text-white/40 focus:border-[#C9A227]/60 focus:outline-none transition-all duration-300"
                    />
                    {errors.fullName && (
                      <p className="text-red-400 text-xs flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </p>
                    )}
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <label className="block text-white font-medium text-sm">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5 text-white placeholder:text-white/40 focus:border-[#C9A227]/60 focus:outline-none transition-all duration-300"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </motion.div>
                </div>

                {/* Phone & Concern Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label className="block text-white font-medium text-sm">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(858) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5 text-white placeholder:text-white/40 focus:border-[#C9A227]/60 focus:outline-none transition-all duration-300"
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-xs flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <label className="block text-white font-medium text-sm">
                      What brings you in?
                    </label>
                    <select
                      name="concern"
                      value={formData.concern}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5 text-white focus:border-[#C9A227]/60 focus:outline-none transition-all duration-300"
                    >
                      {concerns.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                </div>

                {/* Tell us more */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <label className="block text-white font-medium text-sm">
                    Tell us more (optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share any specific concerns or goals..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5 text-white placeholder:text-white/40 focus:border-[#C9A227]/60 focus:outline-none transition-all duration-300 resize-none"
                  />
                </motion.div>

                {/* How did you hear */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <label className="block text-white font-medium text-sm">
                    How did you hear about us?
                  </label>
                  <select
                    name="howYouHeard"
                    value={formData.howYouHeard}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5 text-white focus:border-[#C9A227]/60 focus:outline-none transition-all duration-300"
                  >
                    {howYouHeardOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </motion.div>

                {/* Consent Checkbox */}
                <motion.div
                  variants={itemVariants}
                  className="space-y-3 p-6 rounded-xl bg-white/[0.02] border border-white/5"
                >
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-1 w-5 h-5 rounded border border-[#C9A227]/40 bg-white/[0.03] accent-[#C9A227] cursor-pointer"
                    />
                    <span className="text-sm text-white/80 leading-relaxed">
                      I understand the $100 consultation fee is credited toward my
                      first treatment.
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="text-red-400 text-xs flex items-center gap-1 ml-8">
                      <AlertCircle className="w-3 h-3" /> {errors.consent}
                    </p>
                  )}
                </motion.div>

                {/* Error Message */}
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-300 text-sm"
                  >
                    {submitError}
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.div variants={itemVariants}>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitting}
                    className="w-full rounded-xl bg-[#C9A227] text-[#0a1628] hover:bg-[#C9A227]/90 font-semibold h-auto px-8 py-4 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(201,162,39,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Sending...' : 'Request Consultation'}
                  </Button>
                </motion.div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
