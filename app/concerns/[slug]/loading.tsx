export default function ConcernLoading() {
  return (
    <div className="bg-navy-deep min-h-screen">
      {/* Hero Image Skeleton */}
      <div className="relative h-64 md:h-96 bg-navy-light overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-light to-navy-deep animate-pulse"></div>
      </div>

      {/* Content Container */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        {/* Header Skeleton */}
        <div className="mb-12">
          <div className="h-12 bg-white/5 rounded animate-pulse mb-4 max-w-lg"></div>
          <div className="h-6 bg-white/5 rounded animate-pulse max-w-2xl"></div>
        </div>

        {/* Description Section */}
        <div className="mb-12 pb-12 border-b border-white/10">
          <div className="space-y-3">
            <div className="h-4 bg-white/5 rounded animate-pulse"></div>
            <div className="h-4 bg-white/5 rounded animate-pulse"></div>
            <div className="h-4 bg-white/5 rounded animate-pulse max-w-lg"></div>
          </div>
        </div>

        {/* Treatments Grid */}
        <div className="mb-12">
          <div className="h-6 w-48 bg-white/5 rounded animate-pulse mb-6"></div>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-32 bg-white/5 rounded-lg animate-pulse"
              ></div>
            ))}
          </div>
        </div>

        {/* CTA Skeleton */}
        <div className="h-12 w-40 bg-white/5 rounded animate-pulse"></div>
      </div>
    </div>
  );
}
