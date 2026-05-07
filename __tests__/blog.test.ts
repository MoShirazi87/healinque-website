import { getAllPostSlugs, getPostBySlug, getAllPosts, getPostsByCategory } from "@/lib/blog";

describe("Blog utilities", () => {
  test("getAllPostSlugs returns an array of strings", () => {
    const slugs = getAllPostSlugs();
    expect(Array.isArray(slugs)).toBe(true);
    expect(slugs.length).toBeGreaterThan(0);
    slugs.forEach((slug) => {
      expect(typeof slug).toBe("string");
      expect(slug).not.toContain(".mdx");
    });
  });

  test("getPostBySlug returns a valid post object", () => {
    const post = getPostBySlug("botox-what-we-recommend");
    expect(post).not.toBeNull();
    expect(post!.title).toBeTruthy();
    expect(post!.slug).toBe("botox-what-we-recommend");
    expect(post!.content).toBeTruthy();
    expect(post!.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(Array.isArray(post!.tags)).toBe(true);
  });

  test("getPostBySlug returns null for non-existent slug", () => {
    const post = getPostBySlug("this-post-does-not-exist");
    expect(post).toBeNull();
  });

  test("getAllPosts returns posts sorted newest first", () => {
    const posts = getAllPosts();
    expect(posts.length).toBeGreaterThan(0);

    // Verify sorted by date descending
    for (let i = 1; i < posts.length; i++) {
      const prev = new Date(posts[i - 1].date).getTime();
      const curr = new Date(posts[i].date).getTime();
      expect(prev).toBeGreaterThanOrEqual(curr);
    }

    // Meta objects should NOT have content field
    posts.forEach((post) => {
      expect("content" in post).toBe(false);
    });
  });

  test("getPostsByCategory filters correctly", () => {
    const posts = getAllPosts();
    if (posts.length === 0) return;

    const category = posts[0].category;
    const filtered = getPostsByCategory(category);
    expect(filtered.length).toBeGreaterThan(0);
    filtered.forEach((post) => {
      expect(post.category.toLowerCase()).toBe(category.toLowerCase());
    });
  });
});
