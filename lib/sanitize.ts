/**
 * HTML Sanitization Utility
 *
 * Provides basic HTML sanitization to prevent XSS attacks
 * by removing potentially dangerous script tags and event handlers.
 * For more comprehensive sanitization needs, consider using a library like DOMPurify.
 */

/**
 * Sanitizes HTML string by removing script tags and inline event handlers
 * @param html The HTML string to sanitize
 * @returns Sanitized HTML string
 */
export function sanitizeHtml(html: string): string {
  if (!html) return "";

  // Remove script tags and their content
  let sanitized = html.replace(
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    ""
  );

  // Remove iframe tags
  sanitized = sanitized.replace(
    /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,
    ""
  );

  // Remove event handlers (onclick, onerror, onload, etc.)
  sanitized = sanitized.replace(/on\w+\s*=\s*"[^"]*"/gi, "");
  sanitized = sanitized.replace(/on\w+\s*=\s*'[^']*'/gi, "");
  sanitized = sanitized.replace(/on\w+\s*=\s*[^\s>]*/gi, "");

  // Remove javascript: protocol
  sanitized = sanitized.replace(/href\s*=\s*"javascript:[^"]*"/gi, 'href="#"');
  sanitized = sanitized.replace(/href\s*=\s*'javascript:[^']*'/gi, "href='#'");
  sanitized = sanitized.replace(/src\s*=\s*"javascript:[^"]*"/gi, 'src=""');
  sanitized = sanitized.replace(/src\s*=\s*'javascript:[^']*'/gi, "src=''");

  return sanitized;
}
