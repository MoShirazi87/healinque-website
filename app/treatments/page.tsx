'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { PageHero } from '@/components/sections/hero';
import { BreadcrumbSchema } from '@/components/seo/schema';
import { pexelsUrl, pageImages, pickImage, videos } from '@/lib/data/images';
import { treatments as allTreatments, Treatment, TreatmentCategory } from '@/lib/data/treatments';
import { Disclaimer } from '@/components/ui/disclaimer';

// Helper to format treatment price for display
function formatPrice(treatment: Treatment): string {
  if (treatment.pricing.range) return treatment.pricing.range;
  if (treatment.pricing.starting) return `From $${treatment.pricing.starting}`;
  return 'Consultation Required';
}

// Category configuration
const categories = [
  { id: 'aesthetics' as TreatmentCategory, label: 'Aesthetics', display: 'AESTHETIC ENHANCEMENTS' },
  { id: 'skin-rejuvenation' as TreatmentCategory, label: 'Skin Rejuvenation', display: 'SKIN REJUVENATION' },
  { id: 'regenerative' as TreatmentCategory, label: 'Regenerative', display: 'REGENERATIVE MEDICINE' },
  { id: 'mens-health' as TreatmentCategory, label: 'Men\'s Health', display: 'MEN\'S HEALTH' },
  { id: 'wellness' as TreatmentCategory, label: 'Wellness', display: 'WELLNESS & LONGEVITY' },
] as const;

type CategoryId = TreatmentCategory;

const categoryDescriptions: Record<CategoryId, string> = {
  aesthetics:
    'Precision aesthetic treatments designed to enhance your natural beauty with sophisticated, personalized results.',
  'skin-rejuvenation':
    'Advanced clinical treatments to restore radiance, texture, and luminosity to your skin.',
  regenerative:
    'Cutting-edge regenerative medicine harnessing your body\'s natural healing abilities for optimal restoration.',
  'mens-health':
    'Specialized wellness protocols designed for masculine vitality, confidence, and optimal performance.',
  wellness:
    'Comprehensive longevity and wellness programs designed to optimize your health from the cellular level.',
};

export default function TreatmentsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryId | 'all'>('all');
  const treatments = allTreatments;

  const breadcrumbItems = [
    { name: "Home", url: "https://www.healinque.com" },
    { name: "Treatments", url: "https://www.healinque.com/treatments" },
  ];

  const filteredTreatments =
    activeCategory === 'all'
      ? treatments
      : treatments.filter((t) => t.category === activeCategory);

  const getTreatmentsByCategory = (categoryId: CategoryId) => {
    return treatments.filter((t) => t.category === categoryId);
  };

  return (
    <main className="bg-navy-deep text-white">
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Hero Section */}
      <PageHero
        variant="page"
        subtitle="OUR COLLECTION"
        title="Treatments & Services"
        description="Explore our comprehensive collection of physician-performed aesthetic enhancements, advanced skin science, regenerative medicine, and longevity protocols. Every treatment is personally delivered or directly supervised by Dr. Azi Shirazi."
        image={pexelsUrl(pageImages.treatmentsHero.primary, 1920)}
        video={videos.heroTreatments}
      />

      {/* Intro — CREAM */}
      <section className="relative py-20 bg-cream">
        <div className="container-healinque">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-[#C9A227]" />
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-navy-deep/50">
                The Collection
              </p>
              <div className="h-px w-12 bg-[#C9A227]" />
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-navy-deep mb-6 leading-tight">
              Physician-Performed,{' '}
              <span className="text-[#C9A227] italic">Patient-Centered</span>
            </h2>
            <p className="text-navy-deep/70 text-lg leading-relaxed">
              Every treatment is personally delivered or directly supervised by Dr. Azi Shirazi. Explore by category or view everything at once. Each treatment works in concert — addressing your concerns from the inside out.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Premium Category Filter */}
      <motion.section
        className="sticky top-0 z-40 bg-navy-deep/98 backdrop-blur-xl border-b border-gold/20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="container-healinque">
          <div className="flex overflow-x-auto py-5 gap-2 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:justify-start">
            <motion.button
              onClick={() => setActiveCategory('all')}
              className={`flex-shrink-0 px-5 py-2.5 rounded-full font-medium transition-all whitespace-nowrap text-sm tracking-wide ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-gold to-gold/70 text-navy-deep shadow-lg shadow-gold/20'
                  : 'border border-gold/20 text-white/70 hover:text-white hover:border-gold/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All Treatments
            </motion.button>

            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full font-medium transition-all whitespace-nowrap text-sm tracking-wide ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-gold to-gold/70 text-navy-deep shadow-lg shadow-gold/20'
                    : 'border border-gold/20 text-white/70 hover:text-white hover:border-gold/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="bg-navy-deep py-20 md:py-32 orb-bg has-particles relative overflow-hidden" data-wipe>
        <div className="container-healinque space-y-32">
          {activeCategory === 'all' ? (
            // Show all categories with section dividers
            <>
              {categories.map((category, categoryIndex) => {
                const categoryTreatments = getTreatmentsByCategory(category.id);

                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ delay: categoryIndex * 0.1 }}
                    className="space-y-12"
                  >
                    {/* Category Header with Accent Line */}
                    <div className="space-y-6 border-l-2 border-gold pl-8">
                      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase">
                        {category.display}
                      </p>
                      <h2 className="font-serif text-5xl md:text-6xl text-white leading-tight">
                        {category.label}
                      </h2>
                      <p className="text-white/60 text-lg max-w-2xl leading-relaxed font-light">
                        {categoryDescriptions[category.id]}
                      </p>
                    </div>

                    {/* Treatment Masonry Grid */}
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: { staggerChildren: 0.1 },
                        },
                      }}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-100px' }}
                    >
                      {categoryTreatments.map((treatment, index) => (
                        <TreatmentCard
                          key={treatment.id}
                          treatment={treatment}
                          isFeatured={treatment.popular}
                          index={index}
                        />
                      ))}
                    </motion.div>

                    {/* Category Divider */}
                    {categoryIndex < categories.length - 1 && (
                      <motion.div
                        className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent my-16"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </>
          ) : (
            // Show single category
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              {categories.map(
                (cat) =>
                  cat.id === activeCategory && (
                    <div key={cat.id} className="space-y-12">
                      {/* Category Header */}
                      <div className="space-y-6 border-l-2 border-gold pl-8">
                        <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase">
                          {cat.display}
                        </p>
                        <h2 className="font-serif text-5xl md:text-6xl text-white leading-tight">
                          {cat.label}
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl leading-relaxed font-light">
                          {categoryDescriptions[cat.id]}
                        </p>
                      </div>

                      {/* Treatments Grid */}
                      <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max"
                        variants={{
                          hidden: { opacity: 0 },
                          visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1 },
                          },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                      >
                        {getTreatmentsByCategory(activeCategory).map((treatment, index) => (
                          <TreatmentCard
                            key={treatment.id}
                            treatment={treatment}
                            isFeatured={treatment.popular}
                            index={index}
                          />
                        ))}
                      </motion.div>
                    </div>
                  )
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gold/10 via-navy-deep to-navy-deep border-t border-gold/20 py-24 md:py-32 has-particles" data-wipe>
        {/* Accent Elements */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

        <motion.div
          className="container-healinque relative z-10 text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase">
              NEXT STEPS
            </p>
            <h2 className="font-serif text-5xl md:text-6xl text-white leading-tight">
              Ready to Get Started?
            </h2>
            <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed font-light">
              Schedule your consultation with Dr. Azi Shirazi. We&apos;ll discuss which treatments align with your goals and build a plan that works for you.
            </p>
          </div>

          <motion.div
            className="pt-4 flex justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/book"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gold to-gold/80 text-navy-deep font-semibold rounded-lg hover:shadow-2xl hover:shadow-gold/40 transition-all duration-300 text-lg tracking-wide"
            >
              Book Your Consultation
              <svg
                className="ml-3 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </motion.div>
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <Disclaimer className="text-white/50" />
          </div>
        </motion.div>
      </section>
    </main>
  );
}

// Treatment Card Component
interface TreatmentCardProps {
  treatment: Treatment;
  isFeatured?: boolean;
  index: number;
}

// Get image with rotation support (picks random from primary + alts)
function getTreatmentImage(treatment: Treatment): string {
  return pickImage(treatment.image, treatment.imageAlts);
}

function TreatmentCard({ treatment, isFeatured, index }: TreatmentCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className={`${isFeatured ? 'md:col-span-2 md:row-span-2' : ''}`}
    >
      <Link href={`/treatments/${treatment.slug}`} className="group h-full block">
        <motion.div
          data-interactive=""
          data-tilt=""
          data-ripple=""
          className="h-full flex flex-col bg-gradient-to-br from-white/5 to-white/2 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-gold/30 transition-all duration-500 card-interactive"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{ y: -8 }}
        >
          {/* Premium Image Container */}
          <div
            className={`relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 ${
              isFeatured ? 'aspect-square' : 'aspect-video'
            }`}
          >
            <Image
              src={getTreatmentImage(treatment)}
              alt={treatment.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500" />

            {/* Top Badges */}
            <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="flex-1"
              >
                <span className="inline-block px-4 py-2 text-xs font-semibold bg-white/10 text-white rounded-full backdrop-blur-md border border-white/20">
                  {categories.find((c) => c.id === treatment.category)?.label}
                </span>
              </motion.div>

              <div className="flex gap-2">
                {treatment.comingSoon && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.15 }}
                    className="inline-block px-3 py-1 text-xs font-semibold bg-white/10 text-white rounded-full backdrop-blur-md border border-white/20"
                  >
                    Coming Soon
                  </motion.span>
                )}
                {treatment.popular && !treatment.comingSoon && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.15 }}
                    className="inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r from-gold to-gold/70 text-navy-deep rounded-full shadow-lg shadow-gold/30"
                  >
                    ★ Popular
                  </motion.span>
                )}
              </div>
            </div>

            {/* Description Reveal on Hover */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-white text-center text-sm leading-relaxed font-light">
                    {treatment.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Premium Content Section */}
          <div className="flex-1 p-8 flex flex-col bg-gradient-to-b from-white/3 to-transparent">
            {/* Title with Gold Accent */}
            <div className="mb-4 space-y-2">
              <motion.h3
                className="font-serif text-2xl md:text-3xl text-white leading-tight group-hover:text-gold transition-colors duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {treatment.name}
              </motion.h3>
              <div className="h-0.5 w-12 bg-gradient-to-r from-gold to-gold/0 group-hover:w-full transition-all duration-500" />
            </div>

            {/* Tagline */}
            <p className="text-white/70 text-sm md:text-base mb-6 italic font-light leading-relaxed">
              {treatment.tagline}
            </p>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Premium Pricing */}
            <motion.div
              className="mb-6 pt-6 border-t border-gold/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-gold text-sm font-semibold tracking-wide">
                {formatPrice(treatment)}
              </p>
            </motion.div>

            {/* Learn More Link */}
            <motion.div
              className="inline-flex items-center gap-3 text-gold font-semibold group/link transition-all"
              whileHover={{ x: 4 }}
            >
              <span className="relative">
                Learn More
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gold"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </span>
              <svg
                className="w-5 h-5 transition-transform group-hover/link:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
