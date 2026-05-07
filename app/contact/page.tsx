'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageHero as Hero } from '@/components/sections/hero';
import { pexelsUrl, pageImages } from '@/lib/data/images';

const contactDetails = {
  address: '15644 Pomerado Road, Suite 103, Poway, CA 92064',
  phone: '(858) 337-7999',
  email: 'info@healinque.com',
  hours: [
    { day: 'Monday', hours: '10:00 AM - 12:00 PM, 1:00 PM - 6:00 PM' },
    { day: 'Tuesday', hours: 'Closed' },
    { day: 'Wednesday', hours: '10:00 AM - 12:00 PM, 1:00 PM - 6:00 PM' },
    { day: 'Thursday', hours: 'Closed' },
    { day: 'Friday', hours: "10:00 AM - 12:00 PM, 1:00 PM - 6:00 PM (Men's Clinic Focus Day)" },
    { day: 'Saturday', hours: '10:00 AM - 1:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ],
};

const services = [
  'Botox & Dysport',
  'Dermal Fillers',
  'Microneedling',
  'Chemical Peels',
  'PRP Therapy',
  'IV Therapy',
  'P-Shot',
  'Thread Lift',
  'Hair Restoration',
];

const containerVariants = {
  hidden: {},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const cardHoverVariants = {
  rest: { y: 0, borderColor: 'rgba(255, 255, 255, 0.1)' },
  hover: {
    y: -8,
    borderColor: 'rgba(201, 162, 39, 0.3)',
    boxShadow: '0 20px 40px rgba(201, 162, 39, 0.1)',
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError('');
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          formType: 'contact',
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setSubmitted(false), 8000);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please call (858) 337-7999.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="bg-navy-deep">
      <Hero
        variant="page"
        title="Visit Healinque"
        subtitle="Get in Touch"
        description="Physician-led aesthetics in Poway, serving Rancho Bernardo, Scripps Ranch, Escondido, San Marcos, and Del Mar."
        image={pexelsUrl(pageImages.contactHero.primary, 1920)}
        overlay="dark"
      />

      {/* Contact Grid Section */}
      <section className="section-padding bg-navy-deep">
        <div className="container-healinque">
          <motion.div
            className="grid lg:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Visit My Clinic Card */}
            <motion.div
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm cursor-pointer"
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-C9A227 to-C9A227/60 flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <MapPin className="h-7 w-7 text-white" />
              </motion.div>
              <h3 className="font-serif text-2xl text-white mb-3">Visit the Clinic</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                {contactDetails.address}
              </p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(contactDetails.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-C9A227 hover:text-C9A227/80 transition-colors font-medium text-sm"
              >
                View on Maps →
              </a>
            </motion.div>

            {/* Call or Text Card */}
            <motion.div
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm cursor-pointer"
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-C9A227 to-C9A227/60 flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Phone className="h-7 w-7 text-white" />
              </motion.div>
              <h3 className="font-serif text-2xl text-white mb-3">Call or Text</h3>
              <p className="text-white/70 mb-6">
                <a
                  href={`tel:${contactDetails.phone}`}
                  className="hover:text-C9A227 transition-colors font-medium"
                >
                  {contactDetails.phone}
                </a>
              </p>
              <p className="text-white/60 text-sm">
                Call or text during business hours. I typically reply within one business day.
              </p>
            </motion.div>

            {/* Email Card */}
            <motion.div
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm cursor-pointer"
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-C9A227 to-C9A227/60 flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Mail className="h-7 w-7 text-white" />
              </motion.div>
              <h3 className="font-serif text-2xl text-white mb-3">Email</h3>
              <p className="text-white/70 mb-6">
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="hover:text-C9A227 transition-colors font-medium"
                >
                  {contactDetails.email}
                </a>
              </p>
              <p className="text-white/60 text-sm">
                I typically respond within one business day.
              </p>
            </motion.div>
          </motion.div>

          {/* Hours Section */}
          <motion.div
            className="bg-gradient-to-r from-C9A227/10 via-transparent to-C9A227/10 border border-C9A227/20 rounded-2xl p-8 max-w-2xl mx-auto mb-16"
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Clock className="h-6 w-6 text-C9A227" />
              <h3 className="font-serif text-2xl text-white">Hours of Operation</h3>
            </div>
            <div className="space-y-3">
              {contactDetails.hours.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex justify-between items-center pb-3 border-b border-C9A227/20 last:border-b-0"
                  initial={{ x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                >
                  <span className="text-white font-medium">{item.day}</span>
                  <span className="text-C9A227">{item.hours}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-white/2 border-y border-white/5">
        <div className="container-healinque max-w-3xl">
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-serif text-4xl text-white mb-4">Send Me a Message</h2>
            <p className="text-white/70">
              If you&apos;d like to talk through what&apos;s right for you before booking, send me a note. I&apos;d recommend avoiding any medical history or personal health details here—I review every consultation request personally and will discuss sensitive information during your appointment.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {submitted && (
              <motion.div
                initial={{ y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-C9A227/20 border border-C9A227/50 rounded-lg text-C9A227"
              >
                Thank you! I&apos;ve received your message and will be in touch shortly.
              </motion.div>
            )}

            <div className="mb-8 p-4 bg-white/5 border border-white/10 rounded-lg">
              <p className="text-white/60 text-xs leading-relaxed">
                <span className="text-white/80 font-medium">Note:</span> For your privacy and security, please do not include sensitive medical history, health conditions, or other protected information in this form. You&apos;ll discuss those details confidentially during your consultation with Dr. Shirazi.
              </p>
            </div>

            {/* Name Field */}
            <motion.div variants={itemVariants} className="mb-6">
              <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-C9A227 focus:ring-1 focus:ring-C9A227/50 transition-colors"
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-2">{errors.name}</p>
              )}
            </motion.div>

            {/* Email Field */}
            <motion.div variants={itemVariants} className="mb-6">
              <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-C9A227 focus:ring-1 focus:ring-C9A227/50 transition-colors"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-2">{errors.email}</p>
              )}
            </motion.div>

            {/* Phone Field */}
            <motion.div variants={itemVariants} className="mb-6">
              <label htmlFor="phone" className="block text-white/80 text-sm font-medium mb-2">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(858) 337-7999"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-C9A227 focus:ring-1 focus:ring-C9A227/50 transition-colors"
              />
            </motion.div>

            {/* Service Interest Dropdown */}
            <motion.div variants={itemVariants} className="mb-6">
              <label htmlFor="service" className="block text-white/80 text-sm font-medium mb-2">
                What you&apos;d like to discuss
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-C9A227 focus:ring-1 focus:ring-C9A227/50 transition-colors appearance-none cursor-pointer"
              >
                <option value="" className="bg-navy-deep">
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service} value={service} className="bg-navy-deep">
                    {service}
                  </option>
                ))}
              </select>
            </motion.div>

            {/* Message Field */}
            <motion.div variants={itemVariants} className="mb-8">
              <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your wellness goals..."
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-C9A227 focus:ring-1 focus:ring-C9A227/50 transition-colors resize-none"
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-2">{errors.message}</p>
              )}
            </motion.div>

            {/* Error Message */}
            {submitError && (
              <motion.div
                initial={{ y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm"
              >
                {submitError}
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              variants={itemVariants}
              type="submit"
              disabled={submitting}
              whileHover={submitting ? {} : { scale: 1.02 }}
              whileTap={submitting ? {} : { scale: 0.98 }}
              className="w-full px-6 py-4 bg-gradient-to-r from-C9A227 to-C9A227/80 hover:from-C9A227/90 hover:to-C9A227/70 text-navy-deep font-serif text-lg font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-C9A227/20 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? 'Sending...' : 'Send Inquiry'}
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-96 bg-white/5 border-t border-white/5 overflow-hidden">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{}}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || 'AIzaSyDZlQZpYEV8xD2zHjLh8wXmH7tKzgWaVpY'}&q=${encodeURIComponent(contactDetails.address)}`}
          ></iframe>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-b from-white/5 to-navy-deep border-t border-white/5">
        <motion.div
          className="container-healinque text-center max-w-2xl mx-auto"
          initial={{ y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl text-white mb-4">Ready to Begin?</h2>
          <p className="text-white/70 mb-8">
            Call my Poway clinic to discuss your wellness goals with me or schedule your consultation.
          </p>
          <motion.a
            href={`tel:${contactDetails.phone}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-C9A227 hover:bg-C9A227/90 text-navy-deep font-serif font-bold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-C9A227/30"
          >
            Call Today: {contactDetails.phone}
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}
