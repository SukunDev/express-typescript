# 🧠 Express + TypeScript + Prisma Auth API

REST API sederhana menggunakan stack:

- ⚙️ Express.js
- 🔐 JWT Authentication
- 🧪 TypeScript
- 📦 Prisma ORM
- 🐘 PostgreSQL

---

## 📂 Fitur

- ✅ Register dan Login user
- ✅ Middleware autentikasi JWT
- ✅ Endpoint `/user` yang dilindungi
- ✅ Prisma ORM untuk akses database
- ✅ Struktur clean (service, controller, route)

---

## 📁 Struktur Folder

```
src/
├── controllers/        # Logic untuk handle request
├── services/           # Business logic (terpisah dari controller)
├── routes/             # Routing modular
├── middlewares/        # Auth middleware dan lainnya
├── utils/            # Prisma client, utils, dll.
├── models/             # (Opsional) interface atau DTO
└── index.ts            # Entry point aplikasi
```

---

## ⚙️ Instalasi

### 1. Clone dan Install

```bash
git clone https://github.com/sukundev/express-typescript.git
cd express-typescript
npm install
```

### 2. Setup Environment

Buat file `.env`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
JWT_SECRET="your_jwt_secret"
PORT=3000
```

### 3. Setup Prisma

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 4. Jalankan Aplikasi

```bash
npm run dev
```

---

## 🔐 Endpoint Autentikasi

### 🔸 Register

```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "user",
  "email": "user@example.com",
  "password": "password"
}
```

### 🔸 Login

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password"
}
```

### 🔸 Profile (Auth Required)

```http
GET /api/user
Authorization: Bearer <your_token_here>
```

---

## 🌱 Seeder

Contoh `prisma/seed.ts`:

```ts
await prisma.user.create({
  data: {
    email: "user@example.com",
    name: "user",
    password: await bcrypt.hash("password", 10),
  },
});
```

Jalankan:

```bash
npx prisma db seed
```

---

## 📄 Lisensi

MIT License © 2025
