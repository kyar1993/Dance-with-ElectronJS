Git-проекта

https://github.com/electron

Интересная статья с полезностями

https://habr.com/post/278951/


Структура:

index.html — HTML-страница, отвечает за внешний вид;
main.js — создаёт окна и управляет системными событиями;
package.json — описание пакета (имя, зависимости и т.д.) для npm;
renderer.js — управляет процессами рендеринга.

Официальная документация:

https://electronjs.org/docs

Electron основан на nodeJs

npm install electron -g
добавит dependencies в json файл

# в папке проекта, установка приложения electron в проект
npm install
# в папке проекта, стартуем приложение
npm start

# или установка и запуск
npm install && npm start

# в папке с проектами устанавливаем winstaller
npm install electron-winstaller

# в папке проекта, устанавливаем squirrel
npm install electron-squirrel-startup

# в папке с проектами, установка упаковщика глобально
npm install electron-packager -g

# в папке проекта, запуск упаковки
electron-packager .

# появится новая директория someApp-win32-x64, в ней someApp.exe