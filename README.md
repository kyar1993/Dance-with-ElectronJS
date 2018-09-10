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
# windows
electron-packager .
electron-packager . electron-tutorial-app --overwrite --asar=true --platform=win32 --arch=ia32 --icon=assets/icons/win/icon.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName="Electron Tutorial App"

# linux
electron-packager . glavpunkt-linux-app --overwrite --asar=true --platform=linux --arch=x64 --prune=true --out=release-builds

# mac
electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icons/mac/icon.icns --prune=true --out=release-builds

# появится новая директория someApp-win32-x64, в ней someApp.exe