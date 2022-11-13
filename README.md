# CRUD Application Using Laravel and React

## How to Install

- Download Xampp from [HERE](https://www.apachefriends.org/download.html)
- Download Composer from [HERE](https://getcomposer.org/Composer-Setup.exe)
- Run the following command in terminal

 ```shell
composer install
```

- make a file called `.env` and open `.env.example` and copy all content in it and paste it in `.env` file

- Make database in from [HERE](http://localhost/phpmyadmin/index.php?route=/server/databases)

- Change the value in `.env` file to that db name

```php
DB_DATABASE=TEST_DATABASE
```

- Run That Commands in terminal

```shell
php artisan key:generate
```

```shell
php artisan migrate
```

```shell
php artisan db:seed
```

```shell
php artisan serve
```

- Your CRUD App url is 

```shell
http://127.0.0.1:8000
```
