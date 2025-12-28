"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

interface ConsultationFormProps {
  variant?: "default" | "split" | "minimal";
  title?: string;
  subtitle?: string;
}

export function ConsultationForm({
  variant = "default",
  title = "Request a Free Consultation",
  subtitle,
}: ConsultationFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    concern: "",
    message: "",
    subscribeEmail: true,
    subscribeSMS: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const concerns = [
    "Fine Lines & Wrinkles",
    "Volume Loss / Sagging",
    "Weight Management",
    "Hormone Optimization",
    "Skin Rejuvenation",
    "General Consultation",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-cream rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="h-8 w-8 text-gold" />
        </div>
        <h3 className="font-serif text-2xl text-navy-deep mb-2">Thank You!</h3>
        <p className="text-taupe">
          We&apos;ve received your request. Our team will contact you within 24 hours to schedule your consultation.
        </p>
      </div>
    );
  }

  if (variant === "split") {
    return (
      <section className="section-padding bg-cream">
        <div className="container-healinque">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-subtitle">{subtitle || "Book Your Visit"}</p>
              <h2 className="section-title mb-6">{title}</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name *"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="input-elegant"
                  />
                  <input
                    type="text"
                    placeholder="Last Name *"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="input-elegant"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email *"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-elegant"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="input-elegant"
                  />
                </div>
                <select
                  value={formData.concern}
                  onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                  className="input-elegant"
                  required
                >
                  <option value="">Select Your Primary Concern *</option>
                  {concerns.map((concern) => (
                    <option key={concern} value={concern}>
                      {concern}
                    </option>
                  ))}
                </select>
                <textarea
                  placeholder="Tell us more about your goals (optional)"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="input-elegant resize-none"
                />
                <div className="space-y-2">
                  <label className="flex items-start gap-2 text-sm text-taupe cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.subscribeEmail}
                      onChange={(e) => setFormData({ ...formData, subscribeEmail: e.target.checked })}
                      className="mt-0.5"
                    />
                    <span>Subscribe to receive offers, tips, and updates via email</span>
                  </label>
                  <label className="flex items-start gap-2 text-sm text-taupe cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.subscribeSMS}
                      onChange={(e) => setFormData({ ...formData, subscribeSMS: e.target.checked })}
                    />
                    <span>Subscribe to receive text message reminders</span>
                  </label>
                </div>
                <p className="text-xs text-taupe">
                  By submitting, you agree to be contacted by Healinque. Message & data rates may apply.
                </p>
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Book Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden hidden lg:block">
              <Image
                src="https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Consultation at Healinque"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-card p-6 md:p-8">
      <h3 className="font-serif text-xl text-navy-deep mb-4">{title}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name *"
            required
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className="input-elegant"
          />
          <input
            type="text"
            placeholder="Last Name *"
            required
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            className="input-elegant"
          />
        </div>
        <input
          type="email"
          placeholder="Email *"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="input-elegant"
        />
        <input
          type="tel"
          placeholder="Phone Number *"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="input-elegant"
        />
        <select
          value={formData.concern}
          onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
          className="input-elegant"
          required
        >
          <option value="">Select Your Primary Concern *</option>
          {concerns.map((concern) => (
            <option key={concern} value={concern}>
              {concern}
            </option>
          ))}
        </select>
        <Button type="submit" className="w-full">
          Request Consultation
        </Button>
        <p className="text-xs text-taupe text-center">
          Free consultation • No obligation
        </p>
      </form>
    </div>
  );
}

