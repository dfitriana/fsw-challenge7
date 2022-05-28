# FSW Challenge 07
Diyah Ayu Fitriana - FSW6

## Getting Started

Sebelum memulai untuk menjalankan projek ini ada beberapa hal yang harus disiapkan.
1. Jalankan front-end
2. Jalankan back-end

`Jalankan front-end dan back-end secara BERSAMAAAN (buka dua tab)`

## Front-End

Buka folder project `fsw-challenge7`, lalu install semua dependencies, dengan menjalankan
```
yarn install
```

Kemudian, jalankan program
```
yarn start
```

## Back-End
Buka folder project `fsw-challenge7`, lalu `cd/backend` untuk berpindah ke folder `backend`. Selanjutnya install semua dependencies, dengan menjalankan
```
yarn install
```

Kemudian, lakukan migration ke database
```
sequelize db:migrate
```

Masukkan beberapa data yang diperlukan dengan menjalankan
```
sequelize db:seed:all
```

Selanjutnya untuk menjalankan project backend, jalankan dengan perintah
```
yarn develop
```

## Cloud Database
Database yang digunakan dalam database ini menggunakan database cloud, gunakan aplikasi `TablePlus` kemudian create new connection menggunakan URL berikut
```
postgres://jilkeiou:V7TzxoODuLCQ7dmhalVZ5hQ1BYP2j0xJ@tiny.db.elephantsql.com/jilkeiou
```

## Database Management

Di dalam repository ini sudah terdapat beberapa script yang dapat digunakan dalam memanage database, yaitu:

- `yarn db:create` digunakan untuk membuat database
- `yarn db:drop` digunakan untuk menghapus database
- `yarn db:migrate` digunakan untuk menjalankan database migration
- `yarn db:seed` digunakan untuk melakukan seeding
- `yarn db:rollback` digunakan untuk membatalkan migrasi terakhir
