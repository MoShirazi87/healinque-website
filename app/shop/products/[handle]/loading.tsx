export default function ProductLoading() {
  return (
    <div className="bg-navy-deep min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Left: Product Image Skeleton */}
          <div>
            <div className="aspect-square bg-white/5 rounded-lg animate-pulse mb-4"></div>
            {/* Thumbnail placeholders */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-white/5 rounded animate-pulse"
                ></div>
              ))}
            </div>
          </div>

          {/* Right: Product Details Skeleton */}
          <div className="flex flex-col">
            {/* Product Title */}
            <div className="h-10 bg-white/5 rounded animate-pulse mb-4 max-w-sm"></div>

            {/* Rating/Reviews */}
            <div className="h-4 w-40 bg-white/5 rounded animate-pulse mb-6"></div>

            {/* Price */}
            <div className="h-8 w-32 bg-white/5 rounded animate-pulse mb-6"></div>

            {/* Description */}
            <div className="mb-8 space-y-3">
              <div className="h-4 bg-white/5 rounded animate-pulse"></div>
              <div className="h-4 bg-white/5 rounded animate-pulse"></div>
              <div className="h-4 bg-white/5 rounded animate-pulse max-w-sm"></div>
            </div>

            {/* Options/Variants */}
            <div className="mb-8">
              <div className="h-4 w-20 bg-white/5 rounded animate-pulse mb-3"></div>
              <div className="h-10 bg-white/5 rounded animate-pulse"></div>
            </div>

            {/* Add to Cart Button */}
            <div className="h-12 bg-white/5 rounded-lg animate-pulse mb-6"></div>

            {/* Additional Info */}
            <div className="border-t border-white/10 pt-6 space-y-3">
              <div className="h-4 w-48 bg-white/5 rounded animate-pulse"></div>
              <div className="h-4 w-32 bg-white/5 rounded animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Recommendations Section */}
        <div>
          <div className="h-6 w-48 bg-white/5 rounded animate-pulse mb-6"></div>
          <div className="grid md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-3">
                <div className="aspect-square bg-white/5 rounded-lg animate-pulse"></div>
                <div className="h-4 bg-white/5 rounded animate-pulse"></div>
                <div className="h-4 w-20 bg-white/5 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
