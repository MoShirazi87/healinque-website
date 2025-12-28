"use client";

import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import { siteConfig, getPhoneLink } from "@/lib/config/site";
import { usePathname } from "next/navigation";

// Pages where the mobile CTA bar should be hidden
const hiddenOnPaths = ["/book", "/login", "/signup", "/account", "/shop/cart"];

export function MobileCtaBar() {
  const pathname = usePathname();
  
  // Hide on specific pages
  if (hiddenOnPaths.some(path => pathname?.startsWith(path))) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-navy-deep border-t border-navy-deep/50 safe-area-bottom">
      <div className="flex">
        {/* Call Button */}
        <a
          href={getPhoneLink()}
          className="flex-1 flex items-center justify-center gap-2 py-4 text-cream hover:bg-navy-deep/80 transition-colors"
        >
          <Phone className="h-5 w-5" />
          <span className="font-medium text-sm">Call Now</span>
        </a>
        
        {/* Divider */}
        <div className="w-px bg-cream/20" />
        
        {/* Book Button */}
        <Link
          href="/book"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-gold text-white hover:bg-gold-dark transition-colors"
        >
          <Calendar className="h-5 w-5" />
          <span className="font-medium text-sm">Book Now</span>
        </Link>
      </div>
    </div>
  );
}

