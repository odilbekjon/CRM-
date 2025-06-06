# 📊 CRM System — Node.js + Express.js (MVC Architecture)

Bu loyiha Node.js va Express.js yordamida yozilgan CRM (Customer Relationship Management) tizimi bo‘lib, **MVC (Model-View-Controller)** arxitekturasi asosida tuzilgan. Ushbu tizim mijozlar, savdo jarayonlari va kompaniya faoliyatini boshqarishni osonlashtirish uchun mo‘ljallangan.

---

## ⚙️ Texnologiyalar

- **Node.js** — server platformasi
- **Express.js** — web framework
- **EJS / Pug / Handlebars** — serverda render qilinadigan shablon tizimi (siz ishlatganiga qarab o‘zgartiring)
- **MongoDB / MySQL / PostgreSQL** — ma’lumotlar bazasi (siz ishlatganini yozing)
- **Mongoose / Sequelize / Prisma** — ORM/ODM
- **MVC arxitekturasi** — loyihani modul va tartibli qilish uchun
- **dotenv** — muhit o‘zgaruvchilarini boshqarish
- **bcrypt** — parollarni xavfsiz saqlash
- **express-session / JWT** — sessiya va autentifikatsiya boshqaruvi

---

## 🗂️ Loyihaning Tuzilishi (MVC)
/controllers # Biznes logikasi va route handlerlar
/models # Ma’lumotlar bazasi modellar
/views # Shablonlar (EJS, Pug, Handlebars)
public/ # Statik fayllar (CSS, JS, rasmlar)
routes/ # Yo‘llar (Routes) uchun fayllar
config/ # Sozlamalar, DB ulanishlari
app.js # Ilovaning kirish nuqtasi

🔐 Autentifikatsiya
Foydalanuvchilar ro‘yxatdan o‘tishi va tizimga kirishi mumkin.

Parollar xavfsiz tarzda bcrypt yordamida xeshlanadi.

Sessiya yoki JWT orqali autentifikatsiya amalga oshiriladi.

📋 Funksiyalar
Mijozlar bazasini boshqarish (CRUD operatsiyalar)

Savdo jarayonlarini kuzatish

Foydalanuvchilar va rollarni boshqarish

Hisobotlar va statistik ma’lumotlar

Kirish huquqlarini boshqarish (role-based access control)
