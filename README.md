## Requirements
* Laravel 12 (PHP 8.2.28)
* NodeJS > 20.19.0
* Composer

## How to install

### Clone Repository
open your terminal, go to the directory that you will install this project, then run the following command:

bash
git clone https://github.com/shendy234/library.git

### Install packages
Install vendor using composer

bash
composer update

Install node module using npm

bash
npm install


### Configure .env
Copy .env.example file

bash
cp .env.example .env


Then run the following command :

php
php artisan key:generate


### Migrate Data
create an empty database with mysql 8.x version, then setup that fresh db at your .env file, then run the following command to generate all tables and seeding dummy data:

php
php artisan migrate:fresh --seed

### Public Disk
To make these files accessible from the web, you should create a symbolic link from public/storage to storage/app/public.
To create the symbolic link, you may use the storage:link Artisan command:

php
php artisan storage:link


### Running Application
To serve the laravel app, you need to run the following command in the project director (This will serve your app, and give you an adress with port number 8000 or etc)
- *Note: You need run the following command into new terminal tab*

php
php artisan serve


bash
npm run dev
