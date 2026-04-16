export default function TreatmentLoading() {
  return (
    <div className="bg-navy-deep min-h-screen">
      {/* Hero Image Skeleton */}
      <div className="relative h-80 md:h-[500px] bg-navy-light overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-light to-navy-deep animate-pulse"></div>
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        {/* Header Skeleton */}
        <div className="mb-12">
          <div className="h-4 w-32 bg-white/5 rounded animate-pulse mb-4"></div>
          <div className="h-12 bg-white/5 rounded animate-pulse mb-4 max-w-lg"></div>
          <div className="h-6 bg-white/5 rounded animate-pulse max-w-2xl"></div>
        </div>

        {/* Quick Facts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 pb-12 border-b border-white/10">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-3">
              <div className="h-4 w-20 bg-white/5 rounded animate-pulse"></div>
              <div className="h-6 w-24 bg-white/5 rounded animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Description Section */}
        <div className="mb-12">
          <div className="h-6 w-40 bg-white/5 rounded animate-pulse mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-white/5 rounded animate-pulse"></div>
            <div className="h-4 bg-white/5 rounded animate-pulse"></div>
            <div className="h-4 bg-white/5 rounded animate-pulse max-w-lg"></div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-12">
          <div className="h-6 w-40 bg-white/5 rounded animate-pulse mb-6"></div>
          <div className="grid md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-24 bg-white/5 rounded-lg animate-pulse"
              ></div>
            ))}
          </div>
        </div>

        {/* Steps Section */}
        <div className="mb-12">
          <div className="h-6 w-40 bg-white/5 rounded animate-pulse mb-6"></div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex gap-4">
                <div className="h-10 w-10 bg-white/5 rounded-full flex-shrink-0 animate-pulse"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-32 bg-white/5 rounded animate-pulse"></div>
                  <div className="h-3 bg-white/5 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <div className="h-6 w-40 bg-white/5 rounded animate-pulse mb-6"></div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-16 bg-white/5 rounded-lg animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
