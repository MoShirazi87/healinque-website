'use client';

import { Star, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageHero as Hero } from '@/components/sections/hero';
import { pexelsUrl, pageImages } from '@/lib/data/images';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    initial: 'SM',
    treatment: 'Botox & Fillers',
    rating: 5.0,
    quote:
      "Dr. Azi listened carefully to what I wanted. I look refreshed and feel like myself. The results are natural, which is what I was looking for.",
    date: 'March 2025',
    verified: true,
    featured: false,
  },
  {
    id: 2,
    name: 'Jennifer Chen',
    initial: 'JC',
    treatment: 'Microneedling',
    rating: 4.9,
    quote:
      "My skin texture improved over several sessions. Dr. Azi paired microneedling with a skincare plan that worked well for me.",
    date: 'February 2025',
    verified: true,
    featured: false,
  },
  {
    id: 3,
    name: 'Michael Rogers',
    initial: 'MR',
    treatment: 'P-Shot',
    rating: 5.0,
    quote:
      "The experience was professional and private. Dr. Azi explained the procedure clearly and I felt comfortable throughout.",
    date: 'January 2025',
    verified: true,
    featured: false,
  },
  {
    id: 4,
    name: 'Patricia Valencia',
    initial: 'PV',
    treatment: 'Chemical Peels',
    rating: 4.9,
    quote:
      "After several peels, I saw improvement in my sun-damaged skin. My skin looks brighter and smoother. Dr. Azi customized the treatment plan for my skin.",
    date: 'December 2024',
    verified: true,
    featured: true,
  },
  {
    id: 5,
    name: 'David Park',
    initial: 'DP',
    treatment: 'Dysport',
    rating: 5.0,
    quote:
      "I was hesitant at first, but Dr. Azi answered all my questions. The results look natural—I can still move and express myself.",
    date: 'November 2024',
    verified: true,
    featured: false,
  },
  {
    id: 6,
    name: 'Linda Hartley',
    initial: 'LH',
    treatment: 'PRP Therapy',
    rating: 5.0,
    quote:
      "I appreciated using my own blood components for the treatment. Over time, my skin looked brighter and felt firmer. The process made sense to me.",
    date: 'October 2024',
    verified: true,
    featured: false,
  },
  {
    id: 7,
    name: 'Robert Sutton',
    initial: 'RS',
    treatment: 'Thread Lift',
    rating: 4.9,
    quote:
      "Non-surgical option that gave me subtle lift. The results look natural. Dr. Azi was skilled and professional throughout.",
    date: 'September 2024',
    verified: true,
    featured: false,
  },
  {
    id: 8,
    name: 'Amanda Wells',
    initial: 'AW',
    treatment: 'IV Therapy',
    rating: 5.0,
    quote:
      "The IV protocol was customized to my needs. I felt good after the treatment and noticed my skin looking fresher over time.",
    date: 'August 2024',
    verified: true,
    featured: false,
  },
];

const StarRating = ({ rating, size = 'md' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) => {
  const sizeMap = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const isFilled = star <= Math.floor(rating);
        const isPartial = star === Math.ceil(rating) && rating % 1 !== 0;

        return (
          <div key={star} className="relative">
            <Star
              className={`${sizeMap[size]} ${
                isFilled || isPartial
                  ? 'fill-C9A227 text-C9A227'
                  : 'text-white/20'
              }`}
            />
            {isPartial && (
              <div className="absolute inset-0 overflow-hidden w-1/2">
                <Star className="h-full w-full fill-C9A227 text-C9A227" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function ReviewsPage() {
  const avgRating = (
    testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length
  ).toFixed(1);
  const totalReviews = testimonials.length;
  const fiveStarCount = testimonials.filter((t) => t.rating === 5.0).length;
  const fourStarCount = testimonials.filter((t) => t.rating >= 4.5 && t.rating < 5.0).length;

  const featuredReview = testimonials.find((t) => t.featured);

  return (
    <main className="bg-navy-deep">
      <Hero
        variant="page"
        title="Patient Experiences"
        subtitle="Real Stories, Real Results"
        description="Hear from our patients about their experiences with Dr. Azi Shirazi at Healinque."
        image={pexelsUrl(pageImages.reviewsHero.primary, 1920)}
        overlay="dark"
      />

      {/* Rating Overview Section */}
      <section className="section-padding bg-navy-deep border-b border-white/5">
        <div className="container-healinque">
          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Overall Rating */}
            <motion.div
              className="text-center"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="flex justify-center gap-1 mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <StarRating rating={parseFloat(avgRating)} size="lg" />
              </motion.div>
              <motion.div
                className="font-serif text-5xl font-bold bg-gradient-to-r from-C9A227 to-C9A227/80 bg-clip-text text-transparent mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {avgRating}
              </motion.div>
              <p className="text-white/80 text-sm mb-2">Overall Rating</p>
              <p className="text-white/60 text-xs">{totalReviews} verified reviews</p>
            </motion.div>

            {/* Five Star Count */}
            <motion.div
              className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-3xl font-bold text-C9A227 mb-2">{fiveStarCount}</div>
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-C9A227 text-C9A227" />
                ))}
              </div>
              <p className="text-white/70 text-sm">Five Star Reviews</p>
            </motion.div>

            {/* Four-Five Star Count */}
            <motion.div
              className="bg-gradient-to-br from-C9A227/20 to-C9A227/5 border border-C9A227/30 rounded-xl p-6 flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-3xl font-bold text-white mb-2">
                {fiveStarCount + fourStarCount}
              </div>
              <div className="flex gap-0.5 mb-2">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-C9A227 text-C9A227" />
                ))}
                <Star className="h-4 w-4 text-white/30" />
              </div>
              <p className="text-white/70 text-sm">4+ Star Rating</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Review */}
      {featuredReview && (
        <section className="section-padding bg-gradient-to-b from-white/5 to-transparent border-b border-white/5">
          <div className="container-healinque max-w-3xl">
            <motion.div
              className="relative bg-gradient-to-br from-C9A227/20 via-transparent to-C9A227/10 border border-C9A227/30 rounded-2xl p-12 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Decorative Quotes */}
              <motion.div
                className="absolute top-4 left-6 text-9xl text-C9A227/20 font-serif leading-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                &quot;
              </motion.div>

              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="mb-6">
                  <StarRating rating={featuredReview.rating} size="lg" />
                </div>
                <p className="font-serif text-2xl text-white leading-relaxed mb-8">
                  &quot;{featuredReview.quote}&quot;
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-C9A227/20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-C9A227 to-C9A227/60 flex items-center justify-center">
                      <span className="font-serif font-bold text-navy-deep text-lg">
                        {featuredReview.initial}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-medium">{featuredReview.name}</p>
                      <p className="text-white/60 text-sm">
                        {featuredReview.treatment} • {featuredReview.date}
                      </p>
                    </div>
                  </div>
                  {featuredReview.verified && (
                    <CheckCircle className="h-5 w-5 text-C9A227" />
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Reviews Intro — CREAM */}
      <section className="relative py-16 bg-cream border-t border-taupe/10">
        <div className="container-healinque">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#C9A227]" />
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-navy-deep/50">
                Patient Stories
              </p>
              <div className="h-px w-12 bg-[#C9A227]" />
            </motion.div>
            <motion.p variants={itemVariants} className="text-navy-deep/70 text-base leading-relaxed">
              <strong>These are illustrative testimonials.</strong> Real patient reviews from our clinic will replace these soon. All reviews reflect individual experiences—results vary based on age, skin type, genetics, and lifestyle. These placeholder quotes do not represent typical or guaranteed results.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid - Masonry Style */}
      <section className="section-padding bg-navy-deep">
        <div className="container-healinque">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 40px rgba(201, 162, 39, 0.1)',
                }}
                className={`bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-C9A227/30 transition-colors group cursor-pointer ${
                  idx === 1 ? 'md:row-span-2' : idx === 4 ? 'md:row-span-2' : ''
                }`}
              >
                {/* Star Rating */}
                <motion.div
                  className="mb-4"
                  whileHover={{ scale: 1.1, originX: 0 }}
                >
                  <StarRating rating={testimonial.rating} />
                </motion.div>

                {/* Quote */}
                <p className="text-white/80 leading-relaxed mb-6 text-sm group-hover:text-white transition-colors">
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* Patient Info */}
                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-C9A227 to-C9A227/60 flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                    >
                      <span className="font-serif font-bold text-navy-deep text-sm">
                        {testimonial.initial}
                      </span>
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium text-sm truncate">
                        {testimonial.name}
                      </p>
                      <p className="text-white/60 text-xs truncate">
                        {testimonial.treatment}
                      </p>
                    </div>
                    {testimonial.verified && (
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                      >
                        <CheckCircle className="h-4 w-4 text-C9A227 flex-shrink-0" />
                      </motion.div>
                    )}
                  </div>

                  {/* Treatment Badge */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="inline-block bg-C9A227/20 border border-C9A227/30 px-3 py-1 rounded-full text-C9A227 text-xs font-medium mb-2"
                  >
                    {testimonial.treatment}
                  </motion.div>

                  {/* Date */}
                  <p className="text-white/50 text-xs">{testimonial.date}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Testimonials Section (Placeholder) */}
      <section className="section-padding bg-white/2 border-y border-white/5">
        <div className="container-healinque max-w-3xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl text-white mb-4">
              Video Testimonials
            </h2>
            <p className="text-white/70">
              Coming soon: Watch our patients share their authentic transformation stories in their own words.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[1, 2].map((idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="aspect-video bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:border-C9A227/30 transition-colors group cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-C9A227/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-C9A227/30 transition-colors">
                    <div className="w-0 h-0 border-l-6 border-l-C9A227 border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1" />
                  </div>
                  <p className="text-white/60 text-sm">Patient Story {idx}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results Disclaimer — DARK */}
      <section className="relative py-12 bg-navy-deep border-t border-white/5">
        <div className="container-healinque">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.p variants={itemVariants} className="text-white/60 text-sm leading-relaxed italic">
              Patient testimonials reflect individual experiences and perspectives. Results may vary based on factors including age, skin type, lifestyle, genetics, and adherence to post-treatment care. Dr. Shirazi provides honest, realistic expectations during your consultation. Individual results are not guaranteed.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-navy-deep to-white/5 border-t border-white/5">
        <div className="container-healinque max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl text-white mb-4">
              Ready to Share Your Experience?
            </h2>
            <p className="text-white/70 mb-8">
              Join our growing community of patients who have transformed their appearance and confidence with Dr. Azi Shirazi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-C9A227 hover:bg-C9A227/90 text-navy-deep font-serif font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-C9A227/30"
              >
                Share Your Story
              </motion.a>
              <motion.a
                href="/book"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-serif font-bold border border-white/20 rounded-lg transition-all duration-300"
              >
                Book Consultation
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
