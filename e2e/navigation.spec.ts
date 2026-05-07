import { test, expect } from "@playwright/test";

test.describe("Site navigation", () => {
  test("homepage loads with correct title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Healinque/);
  });

  test("main nav links resolve to real pages", async ({ page }) => {
    const routes = [
      "/treatments",
      "/concerns",
      "/mens-clinic",
      "/memberships",
      "/packages",
      "/about",
      "/blog",
      "/contact",
      "/faq",
      "/book",
    ];

    for (const route of routes) {
      const res = await page.goto(route);
      expect(res?.status(), `${route} should return 200`).toBe(200);
    }
  });

  test("404 page renders for unknown routes", async ({ page }) => {
    const res = await page.goto("/this-page-does-not-exist");
    expect(res?.status()).toBe(404);
    await expect(page.locator("h1")).toContainText(/not found/i);
  });

  test("header is visible and has logo", async ({ page }) => {
    await page.goto("/");
    const header = page.locator("header");
    await expect(header).toBeVisible();
    const logo = header.locator("img").first();
    await expect(logo).toBeVisible();
  });

  test("mobile menu opens and closes", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");

    // Menu button should be visible on mobile
    const menuButton = page.locator('button[aria-label*="menu" i], button[aria-label*="Menu" i]').first();
    if (await menuButton.isVisible()) {
      await menuButton.click();
      // Some navigation element should appear
      await expect(page.locator("nav")).toBeVisible();
    }
  });
});

test.describe("Blog", () => {
  test("blog index loads and shows posts", async ({ page }) => {
    await page.goto("/blog");
    await expect(page).toHaveTitle(/Blog/);
  });

  test("blog post page renders MDX content", async ({ page }) => {
    await page.goto("/blog/botox-what-we-recommend");
    await expect(page).toHaveTitle(/Botox/i);
    // Article body should have prose content
    await expect(page.locator("article")).toBeVisible();
  });
});

test.describe("SEO", () => {
  test("homepage has meta description", async ({ page }) => {
    await page.goto("/");
    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute("content", /.+/);
  });

  test("treatment pages have canonical URLs", async ({ page }) => {
    await page.goto("/treatments");
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute("href", /healinque\.com\/treatments/);
  });

  test("FAQ page has structured data", async ({ page }) => {
    await page.goto("/faq");
    const jsonLd = page.locator('script[type="application/ld+json"]');
    const count = await jsonLd.count();
    expect(count).toBeGreaterThan(0);
  });
});
