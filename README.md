# 📚 Sistem Manajemen Perpustakaan

Proyek sistem perpustakaan berbasis Laravel 12.

## 🧾 Persyaratan

- **PHP**: 8.2.28  
- **Laravel**: 12  
- **Node.js**: > 20.19.0  
- **Composer**  
- **MySQL**: 8.x

---

## 🚀 Panduan Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/shendy234/library.git
cd library
```
### 2. Instalasi Dependensi
```bash
composer update
npm install
```
### 3. Konfigurasi Environment
```bash
cp .env.example .env
php artisan key:generate
```
### 4. Konfigurasi Environment
Buat database baru (MySQL 8.x).
Atur kredensial database di file .env.
Jalankan migrasi dan seed data dummy:
```bash
php artisan migrate:fresh --seed
```
### 5. Linking Storage
```bash
php artisan storage:link
```
### 6. LMenjalankan Aplikasi
```bash
php artisan serve
npm run dev
```
