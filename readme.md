Инструкция по развертыванию Mortgage
=====

####Установите программы:
* PHP
* NodeJS
* Composer
* VirtualBox
* Vagrant

####Далее нужно выполнить команды:

1. npm install в папке client 
2. composer install в папке api
3. composer install в папке devbox
4. vagrant up --provision в папке devbox
5. vagrant ssh в папке devbox
6. cd mortgage/api
7. php artisan migrate --seed
8. npm run dev в папке client

Далее добавьте в C:\Windows\System32\drivers\etc\hosts строку "192.168.10.10 mortgage.com" и переходите по адресу http://mortgage.com

* Страница для оформления заявки на ипотеку: http://mortgage.com
* Страница для авторизации в административную панель: http://mortgage.com/admin/login
* Страница административной панели: http://mortgage.com/admin
                                           


