import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// =============================================================
// kanagawashukatsu.com のサブディレクトリ /sougi/ で公開する構成。
// - site + base から sitemap.xml・canonical・OGP の絶対URLが生成される
// - outDir を dist/sougi にして、Cloudflare Workers の静的アセット
//   （アセットディレクトリ = dist）がそのまま /sougi/* のURLに一致するようにする
// - 記事(.md)内のルート相対リンク（/articles/... 等）はビルド時に
//   自動で base プレフィックスを付与する（下の rehype プラグイン）。
//   .astro コンポーネント内のリンクは手書きで /sougi/... にしてある。
// =============================================================

const BASE = "/sougi";

// markdown内の <a href="/..."> に base を自動付与する rehype プラグイン。
// 記事を書くときは従来どおり /articles/スラッグ/ で書けばよい。
function rehypePrefixInternalLinks() {
  const walk = (node) => {
    if (node.type === "element" && node.tagName === "a") {
      const href = node.properties?.href;
      if (
        typeof href === "string" &&
        href.startsWith("/") &&
        !href.startsWith("//") &&
        !href.startsWith(`${BASE}/`) &&
        href !== BASE
      ) {
        node.properties.href = BASE + href;
      }
    }
    if (node.children) node.children.forEach(walk);
  };
  return (tree) => walk(tree);
}

export default defineConfig({
  site: "https://kanagawashukatsu.com",
  base: BASE,
  outDir: `./dist${BASE}`,
  trailingSlash: "ignore",
  integrations: [
    sitemap({
      // noindex のページ（プライバシーポリシー等）は sitemap から除外
      filter: (page) => !page.includes("/privacy"),
      changefreq: "weekly",
      priority: 0.7,
    }),
  ],
  markdown: {
    rehypePlugins: [rehypePrefixInternalLinks],
  },
  build: {
    inlineStylesheets: "auto",
  },
});
