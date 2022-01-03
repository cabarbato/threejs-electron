const path = require('path');
const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const { default: installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } = require('electron-devtools-installer');

let win;

const installExtensions = async () => {
  
  const extensions = [REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS];
  for (const extension of extensions) {
    try {
      const installedExt = await installExtension(extension);
      console.log(`Added Extension:  ${installedExt.name}`);
      
    } catch (err) {
      console.log('An error occurred: ', err);
    }
  }
}


function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  })
  
  // const ses = win.webContents.session;
  // ses.loadExtension(`${path.join(__dirname, '/extensions/react_devtools')}`)
  
  // win.loadFile("index.html");
  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
  // Open the DevTools.
  if (isDev) {
    win.webContents.openDevTools({ mode: 'detach' });
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

// app.whenReady().then(createWindow);

app.on("ready", async () => {
  createWindow();

  if (isDev) {
    await installExtensions();
    win.webContents.on("did-frame-finish-load", () => {
      win.webContents.once("devtools-opened", () => {
        win.focus();
      });
      win.webContents.openDevTools({
        mode: 'undocked'
      });
    });
  }
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});