"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Loader2, Calendar, ShoppingBag, CheckCircle, AlertCircle } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [warnings, setWarnings] = useState<{ healthie?: string; shopify?: string }>({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setWarnings({});

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Login failed");
      }

      // Store any partial success warnings
      if (data.warnings) {
        setWarnings(data.warnings);
      }

      router.push("/account");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="Healinque"
                width={160}
                height={45}
                className="h-12 w-auto mx-auto mb-6"
              />
            </Link>
            <h1 className="text-display-sm font-serif text-navy-deep">
              Welcome Back
            </h1>
            <p className="text-taupe mt-2">
              Sign in to access your account
            </p>
          </div>

          {/* Services Indicator */}
          <div className="bg-cream rounded-lg p-4 mb-6">
            <p className="text-sm text-navy-deep font-medium mb-3">One account for everything:</p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-sm text-taupe">
                <Calendar className="h-4 w-4 text-gold" />
                <span>Booking & Portal</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-taupe">
                <ShoppingBag className="h-4 w-4 text-gold" />
                <span>Shop & Orders</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm flex items-start gap-3">
                <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            {(warnings.healthie || warnings.shopify) && (
              <div className="bg-amber-50 text-amber-700 p-4 rounded-lg text-sm space-y-1">
                <p className="font-medium">Partial login:</p>
                {warnings.healthie && <p className="text-sm">{warnings.healthie}</p>}
                {warnings.shopify && <p className="text-sm">{warnings.shopify}</p>}
              </div>
            )}

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
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-navy-deep"
                >
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-gold hover:text-gold-dark"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="Enter your password"
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

            <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          <p className="text-center mt-8 text-taupe">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-gold hover:text-gold-dark font-medium">
              Create Account
            </Link>
          </p>

          <div className="mt-8 pt-8 border-t border-cream-dark text-center">
            <p className="text-sm text-taupe">
              By signing in, you agree to our{" "}
              <Link href="/terms" className="text-gold hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-gold hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block lg:flex-1 relative">
        <Image
          src="/images/auth-bg.jpg"
          alt="Healinque Wellness Clinic"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/40" />
        <div className="absolute bottom-12 left-12 right-12 text-white">
          <blockquote className="text-2xl font-serif leading-relaxed mb-4">
            &ldquo;My patient portal makes it so easy to book appointments, 
            see my treatment history, and shop for skincare products.&rdquo;
          </blockquote>
          <p className="text-gold">— Sarah M., Healinque Patient</p>
        </div>
      </div>
    </div>
  );
}
