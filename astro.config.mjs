// @ts-check
import { defineConfig } from 'astro/config';

// build ได้สองที่จากโค้ดชุดเดียว:
// - GitHub Pages (workflow ตั้ง GITHUB_PAGES=1): https://zetxero-ceo.github.io/zetxero-ceo/
// - Cloudflare Workers (ไม่ตั้งค่า): https://portfolio.saharatyok.workers.dev
const pages = !!process.env.GITHUB_PAGES;

export default defineConfig(
  pages
    ? { site: 'https://zetxero-ceo.github.io', base: '/zetxero-ceo/' }
    : { site: 'https://portfolio.saharatyok.workers.dev' },
);
