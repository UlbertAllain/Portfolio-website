# Developer Portfolio (Earlier Version)

Website portfolio pribadi berbasis Next.js yang menampilkan profil, keahlian, proyek, dan kanal kontak. Repository ini adalah implementasi portfolio terdahulu; konten proyek disimpan di `data/projects.ts`.

## Konten

Homepage dirakit dari komponen `Hero`, `About`, `Projects`, `Contact`, `Navbar`, dan `Footer`. Data proyek saat ini memuat Finish Your Quest, Sistem Rekomendasi Ban Motor, dan Personal Finance Tracker.

## Stack

Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion, dan Lucide React.

## Setup

```bash
npm ci
npm run dev
```

Buka `http://localhost:3000`.

## Mengubah isi portfolio

- Edit daftar dan tautan proyek di `data/projects.ts`.
- Ubah section pada `components/`.
- Atur layout/styling umum di `app/globals.css`.
- Simpan screenshot proyek di `public/projects/` dan cocokkan path gambar dengan data.

## Pemeriksaan

```bash
npm run lint
npm run build
```

Tautan demo dan informasi profil perlu diperiksa sebelum deployment. Repository ini terpisah dari portfolio terbaru sehingga kontennya tidak otomatis tersinkron dengan versi lain.
