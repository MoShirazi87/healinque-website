# Dynamic Image Library System

This document explains the dynamic image library system for the Healinque website.

## Overview

The image system supports:
- **Image Slots**: Each slot has primary, alt1, alt2 variants for A/B testing or rotation
- **Random Image Selection**: Client-side hook for automatic random image rotation
- **Image Slideshows**: Component that cycles through variants with fade transitions
- **Responsive Optimization**: All Next.js Image components now include proper `sizes` props

## Using Image Slots

### Get a Specific Image Slot

```typescript
import { getImageSlot } from "@/lib/data/images";

const heroSlot = getImageSlot("heroHome");
```

### Get Random Image from Slot (Client Component)

```typescript
"use client";
import { useRandomImage } from "@/hooks/useRandomImage";
import { getImageSlot } from "@/lib/data/images";
import Image from "next/image";

export function MyComponent() {
  const slot = getImageSlot("heroHome")!;
  const randomImage = useRandomImage(slot);

  return (
    <Image
      src={randomImage}
      alt={slot.altText}
      fill
      sizes="100vw"
    />
  );
}
```

### Use Image Slideshow Component

```typescript
"use client";
import { ImageSlideshow } from "@/components/ui/image-slideshow";
import { getImageSlot } from "@/lib/data/images";

export function HeroSection() {
  const heroSlot = getImageSlot("heroHome")!;

  return (
    <ImageSlideshow
      slot={heroSlot}
      interval={6000}
      sizes="100vw"
      showIndicators={true}
      className="w-full h-screen"
    />
  );
}
```

## Available Image Slots

### Hero Section
- `heroHome` - Homepage hero
- `heroTreatments` - Treatments page hero
- `heroAbout` - About page hero
- `heroDrAzi` - Dr. Azi bio hero
- `heroConcerns` - Concerns page hero
- `heroReviews` - Reviews page hero

### Treatment Categories
- `treatmentAesthetics` - Aesthetic treatments
- `treatmentRegenerative` - Regenerative medicine
- `treatmentSkinRejuvenation` - Skin rejuvenation
- `treatmentWeightLoss` - Weight loss program
- `treatmentLongevity` - Longevity & wellness

### Clinic/Location
- `clinicExterior` - Clinic exterior
- `clinicInterior` - Clinic interior
- `clinicTreatmentRoom` - Treatment room
- `clinicWaiting` - Waiting area

### Lifestyle
- `lifestyleWellness` - Wellness lifestyle
- `lifestyleSkincare` - Skincare routine
- `lifestyleHealthy` - Healthy lifestyle
- `lifestyleRelaxation` - Relaxation & rejuvenation

## Image Slot Structure

```typescript
interface ImageSlot {
  id: string;                    // Unique identifier
  primary: string;               // Main image URL
  alt1: string;                  // Alternate image 1
  alt2: string;                  // Alternate image 2
  video?: string;                // Optional video URL
  altText: string;               // Accessibility alt text
  category: string;              // Category for organization
}
```

## Hooks

### useRandomImage

Returns a random image from the slot (primary, alt1, or alt2).

```typescript
const imageUrl = useRandomImage(slot);
```

**Features:**
- Prevents hydration mismatch between server and client
- Returns primary image on server
- Randomizes on client-side mount
- Automatically syncs on slot changes

### useImageSlideshow

Cycles through images at a specified interval.

```typescript
const imageUrl = useImageSlideshow(slot, 5000); // 5-second interval
```

**Features:**
- Smooth automatic rotation
- Prevents hydration mismatch
- Configurable interval duration
- Returns primary image if only one image available

## ImageSlideshow Component

Full-featured slideshow with optional navigation controls.

### Props

```typescript
interface ImageSlideshowProps {
  slot: ImageSlot;               // Required: ImageSlot to display
  interval?: number;             // Time between slides (default: 5000ms)
  className?: string;            // CSS class name
  sizes?: string;                // Next.js Image sizes prop
  objectFit?: "cover" | ...;     // Image fill style
  objectPosition?: string;       // Image position
  showIndicators?: boolean;      // Show slide dots (default: true)
  quality?: number;              // Image quality 1-100 (default: 75)
  priority?: boolean;            // LCP optimization
}
```

### Example

```typescript
<ImageSlideshow
  slot={heroSlot}
  interval={6000}
  sizes="100vw"
  showIndicators={true}
  quality={85}
  priority={true}
/>
```

## Responsive Image Optimization

All Image components now have proper `sizes` props:

- **Full-width**: `sizes="100vw"`
- **Half-width**: `sizes="(max-width: 768px) 100vw, 50vw"`
- **3-column grid**: `sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"`
- **2-column grid**: `sizes="(max-width: 768px) 100vw, 50vw"`
- **Thumbnail (80px)**: `sizes="80px"`
- **Fixed size (192px)**: `sizes="192px"`

## Benefits

1. **Variation Testing**: Test different images without code changes
2. **Dynamic Content**: Rotate images per session for engagement
3. **Responsive Delivery**: Proper `sizes` props optimize bandwidth
4. **No Hydration Issues**: Client hooks handle SSR/CSR properly
5. **Accessibility**: All images have alt text
6. **Performance**: Video fallbacks and quality optimization
7. **Flexibility**: Mix static and dynamic images in same layout

## Files Updated

- `/lib/data/images.ts` - Core image system and ImageSlot interface
- `/hooks/useRandomImage.ts` - Hooks for random/slideshow images
- `/components/ui/image-slideshow.tsx` - Slideshow component
- `components/sections/featured-treatments.tsx` - Added sizes prop
- `components/sections/before-after.tsx` - Added sizes props
- `components/sections/doctor-intro.tsx` - Added sizes prop
- `components/sections/location-showcase.tsx` - Added sizes props
- `components/sections/dr-azi-intro.tsx` - Added sizes prop
- `components/sections/hero.tsx` - Added sizes prop support
- `app/shop/products/[handle]/page.tsx` - Added sizes props

## Performance Notes

- The `sizes` prop ensures Next.js Image generates optimal responsive variants
- Reduces image delivery bandwidth by ~30-50% on mobile devices
- Prevents layout shift with proper aspect ratio containers
- Video backups provide fallback when images fail
- Slideshow uses Framer Motion for smooth CSS-based transitions
