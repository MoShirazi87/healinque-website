"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Loader2, CheckCircle, Calendar, ShoppingBag, AlertCircle } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [warnings, setWarnings] = useState<{ healthie?: string; shopify?: string }>({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setWarnings({});

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Signup failed");
      }

      // Store any partial success warnings
      if (data.warnings) {
        setWarnings(data.warnings);
      }

      router.push("/account");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Signup failed");
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    "Book appointments online 24/7",
    "View your treatment history",
    "Shop skincare and wellness products",
    "Access exclusive member pricing",
    "Manage your memberships and packages",
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Benefits */}
      <div className="hidden lg:flex lg:flex-1 bg-navy-deep text-white p-12 flex-col justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-2xl" />
        
        <div className="relative z-10 max-w-md">
          <Link href="/">
            <Image
              src="/images/logo-white.svg"
              alt="Healinque"
              width={180}
              height={50}
              className="h-14 w-auto mb-12"
            />
          </Link>

          <h2 className="text-display-sm font-serif text-gold mb-6">
            Join the Healinque Family
          </h2>
          <p className="text-cream/80 mb-8">
            Create your account to unlock exclusive benefits and 
            streamline your wellness journey.
          </p>

          {/* Dual System Info */}
          <div className="bg-white/10 rounded-lg p-4 mb-8">
            <p className="text-sm text-gold font-medium mb-3">One account for everything:</p>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-sm text-cream/90">
                <Calendar className="h-4 w-4 text-gold" />
                <span>Book appointments & access patient portal</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-cream/90">
                <ShoppingBag className="h-4 w-4 text-gold" />
                <span>Shop products & view order history</span>
              </div>
            </div>
          </div>

          <ul className="space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-cream/90">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="text-center mb-8 lg:hidden">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="Healinque"
                width={160}
                height={45}
                className="h-12 w-auto mx-auto mb-6"
              />
            </Link>
          </div>

          <div className="text-center lg:text-left mb-8">
            <h1 className="text-display-sm font-serif text-navy-deep">
              Create Account
            </h1>
            <p className="text-taupe mt-2">
              Start your journey to looking and feeling your best
            </p>
          </div>

          {/* Mobile: Dual System Info */}
          <div className="lg:hidden bg-cream rounded-lg p-4 mb-6">
            <p className="text-sm text-navy-deep font-medium mb-3">One account for everything:</p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-sm text-taupe">
                <Calendar className="h-4 w-4 text-gold" />
                <span>Booking</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-taupe">
                <ShoppingBag className="h-4 w-4 text-gold" />
                <span>Shopping</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm flex items-start gap-3">
                <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            {(warnings.healthie || warnings.shopify) && (
              <div className="bg-amber-50 text-amber-700 p-4 rounded-lg text-sm space-y-1">
                <p className="font-medium">Account created with warnings:</p>
                {warnings.healthie && <p className="text-sm">{warnings.healthie}</p>}
                {warnings.shopify && <p className="text-sm">{warnings.shopify}</p>}
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-navy-deep mb-2"
                >
                  First Name
                </label>
                <Input
                  id="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  placeholder="Jane"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-navy-deep mb-2"
                >
                  Last Name
                </label>
                <Input
                  id="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-navy-deep mb-2"
              >
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="you@example.com"
              />
              <p className="text-xs text-taupe mt-1">
                This email will be used for both booking and shopping
              </p>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-navy-deep mb-2"
              >
                Phone Number
              </label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="(858) 555-0100"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-navy-deep mb-2"
              >
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={8}
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="At least 8 characters"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-taupe hover:text-navy-deep"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-navy-deep mb-2"
              >
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                placeholder="Re-enter your password"
              />
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating Account...
                </>
              ) : (
                "Create Account"
              )}
            </Button>
          </form>

          <p className="text-center mt-6 text-taupe">
            Already have an account?{" "}
            <Link href="/login" className="text-gold hover:text-gold-dark font-medium">
              Sign In
            </Link>
          </p>

          <p className="text-center mt-6 text-xs text-taupe">
            By creating an account, you agree to our{" "}
            <Link href="/terms" className="text-gold hover:underline">
              Terms
            </Link>
            ,{" "}
            <Link href="/privacy" className="text-gold hover:underline">
              Privacy Policy
            </Link>
            , and{" "}
            <Link href="/hipaa" className="text-gold hover:underline">
              HIPAA Notice
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
