"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Calendar, Menu } from "lucide-react";
import { getPhoneLink } from "@/lib/config/site";

// Hide on pages where the bar would be redundant or in the way
// Session 21: trimmed deleted routes (/login, /signup, /account, /shop/cart removed in cleanup).
const hiddenOnPaths = ["/book"];

export function MobileCtaBar() {
  const pathname = usePathname();

  if (hiddenOnPaths.some((p) => pathname?.startsWith(p))) {
    return null;
  }

  const openMenu = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("healinque:open-mobile-menu"));
    }
  };

  return (
    <nav
      className="mobile-bottom-bar"
      role="navigation"
      aria-label="Mobile quick actions"
    >
      <a href={getPhoneLink()} className="mbb-icon" aria-label="Call Healinque">
        <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
        <span>Call</span>
      </a>

      <Link href="/book" className="mbb-primary" aria-label="Book consultation">
        <Calendar className="h-[18px] w-[18px]" aria-hidden="true" />
        <span>Book Consultation</span>
      </Link>

      <button
        type="button"
        onClick={openMenu}
        className="mbb-icon"
        aria-label="Open menu"
      >
        <Menu className="h-[18px] w-[18px]" aria-hidden="true" />
        <span>Menu</span>
      </button>
    </nav>
  );
}
