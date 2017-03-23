"use strict"

const electron = require('electron')
const { app, Tray, nativeImage, globalShortcut, ipcMain } = electron
const os = require('os')
const DEBUG = process.env.DEBUG ? true : false
const MAC = os.type() === 'Darwin' ? true : false
const types = require('root/mutation-types')
const AppWindow = require('./window')
if (MAC) app.dock.hide()

app.on('ready', () => {

  var screen = electron.screen

  var appWindow = new AppWindow()

  var trayIcon = nativeImage.createFromPath(__dirname + '/img/tray_icon.png')
  var tray = new Tray(trayIcon)

  appWindow.show()

  ipcMain.on(types.CONNECT_STATE, (event) => {
    event.returnValue = store.state
  })

  ipcMain.on(types.CONNECT_COMMIT, (event, typeName, payload) => {
    if (DEBUG) console.log(typeName, payload)
    player.win.webContents.send(types.CONNECT_COMMIT, typeName, payload)
    controller.win.webContents.send(types.CONNECT_COMMIT, typeName, payload)

    if (typeName === types.QUIT) app.quit()
  })
})

app.on('will-quit', () => {
  globalShortcut.unregisterAll()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
