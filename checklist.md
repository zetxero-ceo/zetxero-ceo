# ● Checklist: GitHub Profile README + เว็บพอร์ตโฟลิโอ

> **วิธีใช้:** ทำข้อไหนเสร็จให้แก้ `[ ]` เป็น `[x]` · ข้อที่ติ๊กแล้วตรวจจริงเมื่อ 2026-11-19
> **กฎหลัก:** ทุกครั้งที่แก้หน้าโปรไฟล์ แก้ทั้ง `README.md` (EN, หน้าหลัก) และ `README.th.md` (TH) ใน commit เดียวกัน

| ไฟล์ / ที่อยู่ | คืออะไร |
|---|---|
| `README.md`, `README.th.md` | หน้าโปรไฟล์ https://github.com/zetxero-ceo |
| `src/`, `public/`, `astro.config.mjs` | เว็บพอร์ตโฟลิโอ https://zetxero-ceo.github.io/zetxero-ceo/ (คู่มือ: `docs/portfolio.md`) |
| `public/agency/index.html` | หน้าเอเจนซี่ https://zetxero-ceo.github.io/zetxero-ceo/agency/ |
| `.github/workflows/` | `deploy.yml` (เว็บ), `snake.yml` (งู ทุก 12 ชม.) |

---

## 🗺️ แผนงานที่เหลือ (ทำตามลำดับ)

### ขั้นที่ 1 — `opencode-lab` และ `claude-lab`: ไม่ย้าย (ตัดสินใจ 2026-11-19)
- [x] ยกเลิกการย้าย — สอง repo อยู่ที่ `sakzeed` เว็บอยู่ที่ `sakzeed.github.io/<repo>/` ลิงก์ใน README ถูกต้องอยู่แล้ว
- [ ] **อย่ากดยอมรับ** อีเมลขอย้ายสองตัวนี้ในกล่องของ zetxero-ceo (คำขอเก่าจะหมดอายุเอง)
- [ ] เอา `sakzeed` ออกจาก org `zetxero-main` (ทำเองที่ github.com/orgs/zetxero-main/people) — ไม่จำเป็นต้องเป็น admin แล้ว

### ขั้นที่ 2 — Cloudflare (ทำเองใน dashboard)
- [ ] Workers & Pages → `portfolio` → Settings → Build: เปลี่ยน repo จาก `sakzeed/sakzeed` เป็น `zetxero-ceo/zetxero-ceo`
- [ ] Build command `yarn build`, Deploy command `npx wrangler deploy`, **ห้าม** ตั้ง `GITHUB_PAGES`
- [ ] Branch control: build เฉพาะ `main` (branch `output` ของงูไม่มี `package.json`)
- [ ] เช็คว่า https://portfolio.saharatyok.workers.dev แสดงชื่อ "สหรัฐ ยกทวน (ลิก)" และผลงาน 6 ชิ้น
- [ ] (ไม่บังคับ) เปลี่ยน subdomain เป็น `zetxero-ceo` → `portfolio.zetxero-ceo.workers.dev` แล้วแก้ `site` ใน `astro.config.mjs`

### ขั้นที่ 3 — เนื้อหาที่ต้องตัดสินใจ
- [ ] ใส่ลิงก์จริงแทน `#` 17 ตัวในส่วนติดต่อ (GitLab, Freelancer, Behance, Product Hunt, AI 6 ตัว, Pinterest, Reddit, WhatsApp, Messenger, Slack, Signal, Twitch) หรือลบตัวที่ไม่มีบัญชี
- [x] คำอธิบาย repo `salary` ("record salary of CPALL") บอกชื่อนายจ้าง — แก้แล้ว 2026-11-25 เป็น "เว็บบันทึกเงินเดือนส่วนตัว" (ตาราง README ลิสต์เป็นชื่อลิงก์ ไม่มีคำอธิบาย จึงไม่ต้องแก้)
- [x] แปล `README.th.md` ให้เป็นไทยจริง (ข้อความพิมพ์เอง คำอธิบาย repo หัวข้อส่วนติดต่อ)
- [ ] เว็บพอร์ตโฟลิโอ: ป้าย "พร้อมรับงานใหม่" / "ติดต่อจ้างงาน" เน้นฟรีแลนซ์ — ปรับให้ตรงกับเป้าหางานจูเนียร์ถ้าต้องการ
- [ ] บล็อกมีแค่ `hello.md` (บทความตั้งต้นของ template) — เขียนบทความแรกจริง
- [ ] ตัดสินใจเรื่อง `~/portfolio` ในเครื่อง (ยังชี้ repo ของ sakzeed) — ลบ หรือเก็บไว้

### ขั้นที่ 4 — เอกสาร
- [x] อัปเดต `~/AUDIT.md` (สถานะหลังรวม repo ไว้ที่ zetxero-ceo)
- [x] อัปเดต `~/CLAUDE.md` (ตารางโปรเจกต์ บัญชี gh, org zetxero-main เหลือ 3 repo)

---

## ✅ หน้าโปรไฟล์ (README)

### โครงสร้างและภาษา
- [x] repo ชื่อตรงกับ username (`zetxero-ceo/zetxero-ceo`) เป็น Public และหน้าโปรไฟล์เปิดได้ (HTTP 200)
- [x] `README.md` ภาษาอังกฤษเป็นหน้าหลัก `README.th.md` ภาษาไทยเป็นหน้ารอง
- [x] ลิงก์สลับภาษาเปิดไฟล์ถูก และภาษาที่เป็นตัวหนาตรงกับหน้านั้น
- [x] สองไฟล์ยาวเท่ากัน (325 บรรทัด) และมีชุดลิงก์เหมือนกันทุกตัว
- [x] ทุกประโยคแปลตรงกัน (ชื่อแบรนด์ในส่วนติดต่อคงเป็นภาษาอังกฤษ)

### ส่วนหัว
- [x] แบนเนอร์คลื่นไล่สีด้านบนและด้านล่าง
- [x] โลโก้ Z (`assets/zetxero-z-monochrome.svg`) และหัวข้อ ZETXERO
- [x] ข้อความพิมพ์อัตโนมัติ 4 ประโยค
- [x] badge สีตามแบรนด์ 4 อัน และป้ายผู้ติดตาม
- [ ] ป้ายจำนวนผู้เข้าชม (komarev.com) — ตอนตรวจบริการไม่ตอบ ลองเปิดดูอีกครั้ง

### ผลงานและ repo
- [x] ไอคอนเทคโนโลยี 16 ตัวแสดงครบ (skillicons.dev)
- [x] การ์ด pin ผลงานเด่น 6 ใบ
- [x] ตาราง repo สาธารณะทั้งหมด (ใช้งานอยู่ / Fork / เก็บถาวร) พร้อมลิงก์เว็บ
- [x] ไม่มี repo private ในหน้าโปรไฟล์ (`python-thai`, `laura` ฯลฯ ไม่ปรากฏ)
- [ ] ตาราง repo อัปเดตเองไม่ได้ — สร้าง/ลบ repo แล้วต้องแก้ตารางเอง

### สถิติ
- [x] การ์ดสถิติ ภาษาที่ใช้บ่อย streak และกราฟ contribution แสดงผล
- [x] งู: `snake.yml` รันผ่าน มี branch `output` พร้อม `github-snake.svg` และ `github-snake-dark.svg`

### ช่องทางติดต่อ
- [x] แถวหลัก GitHub, Portfolio, LinkedIn, Email, Facebook ใช้ลิงก์ล่าสุด
- [x] ลิงก์ `mailto:` อยู่ในรูปแบบที่ถูกต้อง
- [x] ไอคอนทุกตัวโหลดได้ (LinkedIn ใช้ skillicons, OpenAI/Slack ใช้ iconify เพราะ Simple Icons ไม่มีแล้ว)
- [ ] ลิงก์ `#` 17 ตัว (ดูขั้นที่ 3)
- [ ] คลิกทดสอบลิงก์โซเชียลทุกตัวด้วยตัวเอง (เว็บโซเชียลบล็อกการเช็คอัตโนมัติ)

### ทดสอบการแสดงผล
- [x] รูปในหน้าโปรไฟล์ 53 จาก 54 รายการตอบ HTTP 200 (ที่เหลือคือตัวนับผู้เข้าชม)
- [x] ไม่มีเบอร์โทร ที่อยู่บ้าน หรือเลขบัตรประชาชนในหน้าโปรไฟล์และหน้าเอเจนซี่
- [ ] ทดสอบโหมดสว่าง (ไอคอนสีขาวบางตัวจะมองไม่เห็น)
- [ ] ทดสอบโหมดมืด
- [ ] ทดสอบบนมือถือ (เบราว์เซอร์และแอป GitHub)

---

## 🌐 เว็บพอร์ตโฟลิโอ

- [x] GitHub Pages ใช้ workflow `deploy.yml` รันผ่าน ทุกหน้าตอบ 200 (หน้าแรก ผลงาน บล็อก เกี่ยวกับ ติดต่อ ขอบคุณ agency)
- [x] ลิงก์ภายในใช้ `import.meta.env.BASE_URL` ทั้งหมด build ได้ทั้ง GitHub Pages และ Cloudflare
- [x] ลิงก์เก่า `zetxero-ceo.github.io/portfolio/` พาไปเว็บใหม่ และ repo `portfolio` archive แล้ว
- [x] ฟอร์มติดต่อ (Web3Forms) ส่งต่อไปหน้า `/thanks/` ของเว็บที่ถูกต้อง
- [x] favicon เป็นโลโก้ Z
- [ ] Cloudflare build จาก repo นี้ (ดูขั้นที่ 2)

---

## 🔄 ดูแลหลังเผยแพร่

- [ ] **ทุกเดือน:** เช็กว่าการ์ดสถิติ ตัวนับ และงูยังแสดงผล
- [ ] **ทุกเดือน:** อัปเดตข้อความ "กำลังเรียนรู้" และการ์ดผลงานเด่น
- [ ] **ทุกครั้งที่สร้าง/ลบ repo:** แก้ตาราง repo ทั้งสองไฟล์
- [ ] **ทุกครั้งที่แก้:** แก้ทั้ง TH และ EN ใน commit เดียวกัน

```bash
# หา placeholder ที่ยังเหลือ (TODO ในส่วนติดต่อคือลิงก์ # ที่ยังไม่มี)
grep -nE "TODO|YOUR_|SKILL_IDS|href=\"#\"" README.md README.th.md

# เทียบจำนวนบรรทัดของสองภาษา
wc -l README.md README.th.md
```

---

## 📝 บันทึกงานวันนี้ (2026-11-25)

หน้าโปรไฟล์ (README EN + TH แก้คู่กันทุกครั้ง):
- About Me: Goal → "อิสระทางการเงิน + ธุรกิจ Data Center", Learning → "Python พื้นฐาน (ตอนนี้ถึง loop)"
- ลบ badge "open to junior dev roles" ออก
- ลิงก์ X → `x.com/zetxero`
- merge PR #4 (branch `beta`) แบบเลือกของดี: `<em>ZETXERO</em>` (แก้แท็ก h1 ที่เพี้ยน), โลโก้กว้าง 150, badge Claude Code สี Orangered, สลับภาษาเป็น italic, บรรทัดเกริ่นเป็น blockquote, เพิ่มไอคอน Stack (go, ai, java, react, notion ...) — คงตาราง repo ของ main ไว้ (ข้ามเวอร์ชันค้างของ beta)
- ลบ branch `beta` (merged แล้ว), sync สไตล์ทั้งหมดลง `README.th.md` ให้ตรงกับ EN

repo อื่น:
- `salary`: แก้ description ตัดชื่อนายจ้างออก (ดูด้านบน)
- `money-app`: rename branch `claude/new-session-vddulo` → `main` (ตั้ง default ให้อัตโนมัติ) และ merge ฟีเจอร์งบประมาณ (PR #1: service + API + MCP + UI, เทสต์ 27/27 ผ่าน) — บันทึกไว้ใน `~/AUDIT.md` ด้วย
