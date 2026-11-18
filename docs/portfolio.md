# เว็บพอร์ตโฟลิโอ + บล็อก

โค้ด Astro ที่ root ของ repo นี้ (`README.md` คือหน้าโปรไฟล์ GitHub ส่วนไฟล์นี้คือคู่มือเว็บ)
build ได้สองที่จากโค้ดชุดเดียว:

| ที่ | ที่อยู่ | build |
|---|---|---|
| GitHub Pages | https://zetxero-ceo.github.io/zetxero-ceo/ | `.github/workflows/deploy.yml` ตั้ง `GITHUB_PAGES=1` ทุกครั้งที่ push `main` |
| Cloudflare Workers | https://portfolio.saharatyok.workers.dev | Workers Builds รัน `yarn build` (ไม่ตั้ง `GITHUB_PAGES`) |

หน้าเอเจนซี่เดิมอยู่ที่ `public/agency/index.html` → เปิดที่ `/agency/`

ลิงก์ภายในเว็บต้องขึ้นต้นด้วย `import.meta.env.BASE_URL` (เช่น `` href={`${import.meta.env.BASE_URL}contact/`} ``) ไม่งั้นบน GitHub Pages จะหลุดไปที่ `zetxero-ceo.github.io/contact/` ซึ่งไม่มี

## แก้เนื้อหา

| อยากแก้ | ไฟล์ |
|---|---|
| ชื่อ ตำแหน่ง คำโปรย ลิงก์โซเชียล key ของฟอร์ม | `src/config.ts` |
| หน้าเกี่ยวกับ (ประวัติ ทักษะ ประสบการณ์) | `src/pages/about.astro` |
| เพิ่ม/แก้ผลงาน | ไฟล์ `.md` ใน `src/content/projects/` |
| เพิ่ม/แก้บทความ | ไฟล์ `.md` ใน `src/content/blog/` |
| สี ฟอนต์ | `src/styles/global.css` |

หัวไฟล์ผลงาน:

```yaml
---
title: ชื่องาน
summary: สรุปหนึ่งบรรทัด
year: 2026
role: ทำส่วนไหน
tags: [Astro, ออกแบบ]
link: https://...   # ไม่ใส่ก็ได้
order: 1            # เลขน้อยขึ้นก่อน
draft: false        # true = ยังไม่โชว์
---
```

หัวไฟล์บทความ:

```yaml
---
title: หัวข้อ
description: สรุปสั้นๆ
date: 2026-11-18
draft: false
---
```

แก้เสร็จแล้ว `git add . && git commit -m "..." && git push` เว็บจะอัปเดตเองภายในไม่กี่นาที

## รันบนเครื่อง

ต้องใช้ Node 22 ขึ้นไป (บนมือถือเครื่องนี้อยู่ที่ `~/.local/node22`) และใช้ Yarn
เพราะ npm บน proot ติดตั้งแพ็กเกจไม่ผ่าน

```bash
export PATH=~/.local/node22/bin:$PATH
yarn install        # ครั้งแรก
yarn dev            # http://127.0.0.1:4321
yarn build          # สร้างไฟล์จริงใน dist/
```

## Deploy (Cloudflare Workers)

เว็บผูกกับ repo ผ่าน Workers Builds (ต้องตั้งใน Cloudflare ให้ชี้ `zetxero-ceo/zetxero-ceo`) **push ขึ้น `main` = เว็บจริงอัปเดตเองภายในประมาณ 1 นาที**
(ไม่ต้องรันคำสั่ง deploy บนเครื่อง)

ทุกครั้งที่ push Cloudflare จะทำตามนี้:

1. ติดตั้ง Node ตาม `.node-version` (22) และ Yarn ตาม `packageManager` ใน `package.json` (1.22.22)
2. `yarn install` ตาม `yarn.lock`
3. `yarn build` ได้ไฟล์เว็บใน `dist/`
4. `npx wrangler deploy` อ่านค่าจาก `wrangler.jsonc` แล้วอัปโหลด `dist/` ขึ้น Worker ชื่อ `portfolio`

ไฟล์ที่เกี่ยวข้อง:

| ไฟล์ | หน้าที่ |
|---|---|
| `wrangler.jsonc` | ชื่อ Worker, โฟลเดอร์ที่จะเสิร์ฟ (`dist`) และให้ใช้ `404.html` เมื่อไม่พบหน้า |
| `.node-version` | เวอร์ชัน Node ที่ใช้ build |
| `package.json` → `packageManager` | ล็อก Yarn 1 ไว้ ถ้าลบ Cloudflare จะใช้ Yarn 4 แล้ว build ล้ม เพราะ `yarn.lock` เป็นของ Yarn 1 |
| `public/_headers` | security headers ที่ Cloudflare ส่งไปกับทุกหน้า |

ดูสถานะหรือ log ตอน build ล้ม: https://dash.cloudflare.com → **Workers & Pages** → `portfolio` → **Deployments**
(ถ้า log ขึ้น `yarn@4.x` ให้เพิ่มตัวแปร `YARN_VERSION` = `1.22.22` ที่ **Settings → Build → Variables and secrets**)

ใช้โดเมนของตัวเอง: `portfolio` → **Settings → Domains & Routes → Add → Custom domain**
แล้วแก้ `site` ใน `astro.config.mjs` เป็นโดเมนใหม่ และ push อีกรอบ

## ความปลอดภัย

- เว็บนี้ไม่มีรหัสลับ ถ้าวันหน้ามี ให้เก็บใน `.env` (มีใน `.gitignore` แล้ว) หรือใน Environment variables ของ Cloudflare
- ห้ามใส่เบอร์โทร ที่อยู่บ้าน หรือข้อมูลส่วนตัวที่ไม่อยากให้คนแปลกหน้าเห็น
- Access Key ของ Web3Forms อยู่ในหน้าเว็บได้ (ออกแบบมาแบบนั้น) ส่วนการตรวจข้อมูลและกันสแปมเป็นหน้าที่ฝั่ง Web3Forms
- security headers อยู่ที่ `public/_headers`
