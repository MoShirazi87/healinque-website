"use client";

/**
 * SectionErrorBoundary — standard React error boundary scoped to a section.
 *
 * If a section throws during render, we surface a minimal inline notice (dev)
 * or a quiet empty block (prod) so the rest of the page stays intact. The
 * loud striped "Section render error" placeholder from earlier sessions was
 * removed as part of the Session 23 luxury cleanup — it belonged to an older
 * debug-first posture.
 */

import React from "react";

interface Props {
  name: string;
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class SectionErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line no-console
      console.error(
        `[SectionErrorBoundary: ${this.props.name}] Section failed to render:`,
        error,
        errorInfo,
      );
    }
  }

  render() {
    if (this.state.hasError) {
      if (process.env.NODE_ENV === "development") {
        return (
          <section
            data-section-error={this.props.name}
            className="py-10 text-center"
            role="alert"
          >
            <p className="text-sm text-red-500 font-mono">
              [dev] {this.props.name} failed to render: {this.state.error?.message ?? "unknown"}
            </p>
          </section>
        );
      }
      // Production: fail silently — rest of the page continues.
      return null;
    }

    return this.props.children;
  }
}

/**
 * SafeSection — small convenience wrapper so consumers do not need to
 * import the boundary class directly.
 */
export function SafeSection({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <SectionErrorBoundary name={name}>{children}</SectionErrorBoundary>
  );
}
