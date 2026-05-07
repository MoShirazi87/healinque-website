"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle } from "lucide-react";

interface ConsultationFormProps {
  variant?: "default" | "split";
  title?: string;
  subtitle?: string;
}

/**
 * Anti-spam minimum: real humans take longer than this between page render and
 * form submit. Bots that auto-fill + submit usually trip this within a few hundred
 * milliseconds. 2s is the lowest threshold that catches naive bots without
 * frustrating fast typists who jump straight to the form.
 */
const MIN_HUMAN_FILL_MS = 2000;

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
    // Honeypot field — must remain empty. Bots auto-fill every input they see;
    // humans never see this field (visually hidden + tabIndex=-1 + autoComplete off).
    company: "",
  });

  // Form mount time for the submit-time-based anti-spam check. Initialized once
  // via the lazy-init pattern so it's stable across re-renders without useEffect.
  const mountTimeRef = useRef<number>(typeof window === "undefined" ? 0 : Date.now());

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

    // Anti-spam guard 1: honeypot. If the hidden `company` field has any value,
    // it's a bot. Fake-success silently so the bot doesn't learn the field is a trap.
    if (formData.company.trim() !== '') {
      setSubmitted(true);
      return;
    }

    // Anti-spam guard 2: submit-time-based check. Reject if the form was submitted
    // less than MIN_HUMAN_FILL_MS after mount — no real user fills this in <2s.
    if (Date.now() - mountTimeRef.current < MIN_HUMAN_FILL_MS) {
      setSubmitted(true);
      return;
    }

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
          company: "",
        });
        setSubmitted(false);
      }, 8000);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please call or text (858) 337-7999.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20 },
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
          initial={{ y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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
                initial={{ scale: 0.95 }}
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
                  Your consultation request has been received. I&apos;ll be in touch
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
                {/*
                  Honeypot field — visually hidden from humans, visible to bots
                  that scrape the DOM. If `company` is non-empty at submit time,
                  the request is silently fake-succeeded. Do NOT add a label,
                  do NOT use `display: none` (some bots skip those), and DO set
                  tabIndex=-1 + autoComplete="off" so a screen-reader user
                  tabbing through the form skips it cleanly.
                */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    width: "1px",
                    height: "1px",
                    overflow: "hidden",
                  }}
                >
                  <label htmlFor="company-website" aria-hidden="true">
                    Company (leave blank)
                  </label>
                  <input
                    id="company-website"
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label htmlFor="consult-fullName" className="block text-white font-medium text-sm">
                      Full Name *
                    </label>
                    <input
                      id="consult-fullName"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      aria-required="true"
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby={errors.fullName ? "consult-error-fullName" : undefined}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5 text-white placeholder:text-white/40 focus:border-[#C9A227]/60 focus:outline-none transition-all duration-300"
                    />
                    {errors.fullName && (
                      <p id="consult-error-fullName" role="alert" className="text-red-400 text-xs flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" aria-hidden="true" /> {errors.fullName}
                      </p>
                    )}
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <label htmlFor="consult-email" className="block text-white font-medium text-sm">
                      Email *
                    </label>
                    <input
                      id="consult-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      aria-required="true"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "consult-error-email" : undefined}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5 text-white placeholder:text-white/40 focus:border-[#C9A227]/60 focus:outline-none transition-all duration-300"
                    />
                    {errors.email && (
                      <p id="consult-error-email" role="alert" className="text-red-400 text-xs flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" aria-hidden="true" /> {errors.email}
                      </p>
                    )}
                  </motion.div>
                </div>

                {/* Phone & Concern Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label htmlFor="consult-phone" className="block text-white font-medium text-sm">
                      Phone *
                    </label>
                    <input
                      id="consult-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(858) 000-0000"
                      required
                      aria-required="true"
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? "consult-error-phone" : undefined}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5 text-white placeholder:text-white/40 focus:border-[#C9A227]/60 focus:outline-none transition-all duration-300"
                    />
                    {errors.phone && (
                      <p id="consult-error-phone" role="alert" className="text-red-400 text-xs flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" aria-hidden="true" /> {errors.phone}
                      </p>
                    )}
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <label htmlFor="consult-concern" className="block text-white font-medium text-sm">
                      What brings you in?
                    </label>
                    <select
                      id="consult-concern"
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

                {/* Tell me more */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <label htmlFor="consult-message" className="block text-white font-medium text-sm">
                    Tell me more (optional)
                  </label>
                  <textarea
                    id="consult-message"
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
                  <label htmlFor="consult-howYouHeard" className="block text-white font-medium text-sm">
                    How did you hear about me?
                  </label>
                  <select
                    id="consult-howYouHeard"
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
                  <label htmlFor="consult-consent" className="flex items-start gap-3 cursor-pointer">
                    <input
                      id="consult-consent"
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-invalid={Boolean(errors.consent)}
                      aria-describedby={errors.consent ? "consult-error-consent" : undefined}
                      className="mt-1 w-5 h-5 rounded border border-[#C9A227]/40 bg-white/[0.03] accent-[#C9A227] cursor-pointer"
                    />
                    <span className="text-sm text-white/85 leading-relaxed">
                      I understand the $100 consultation fee is credited toward my
                      first treatment.
                    </span>
                  </label>
                  {errors.consent && (
                    <p id="consult-error-consent" role="alert" className="text-red-400 text-xs flex items-center gap-1 ml-8">
                      <AlertCircle className="w-3 h-3" aria-hidden="true" /> {errors.consent}
                    </p>
                  )}
                </motion.div>

                {/* Error Message */}
                {submitError && (
                  <motion.div
                    initial={{ y: -10 }}
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
