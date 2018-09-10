const {app, BrowserWindow} = require('electron');
const {$, jQuery} = require('jquery');
const {webContents} = require('electron');

// Или используйте 'remote' в renderer процессе.
// const {BrowserWindow} = require('electron').remote


app.commandLine.appendSwitch('disable-web-security');
app.commandLine.appendSwitch('web-security');
app.commandLine.appendSwitch('allow-displaying-insecure-content');
app.commandLine.appendSwitch('ignore-certificate-errors');

let win = null;

function createWindow() {

    win = new BrowserWindow({
        width: 800,
        height: 600,
        'web-preferences': {
            'web-security': false
        },
        preload: './renderer.js'
    // 'node-integration': false
});

    // win.loadURL('https://glavpunkt.ru');
    win.loadFile('index.html');

    // win.webContents.openDevTools({mode: 'detach'});
    // win.webContents.openDevTools();



    win.on('closed', () => {
        win = null;
    });
}

    app.on('ready', createWindow);

    app.on('window-all-closed', function () {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    });

    app.on('activate', function () {
        if (mainWindow === null) {
            createWindow()
        }
    });