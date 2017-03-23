"use strict"

const electron = require('electron')
const BrowserWindow = electron.BrowserWindow

const DEBUG = process.env.DEBUG ? true : false

module.exports = class {

  constructor () {

    this.win = new BrowserWindow({
      width      : 600,
      height     : 400,
      show       : true,
      resizable  : true,
      frame      : true,
      transparent: false,
      skipTaskbar: false,
      hasShadow  : true
    })

    this.win.loadURL('file://' + __dirname + '/renderer.html')
  }

  show (x) {
    this.win.show()
    this.win.focus()
  }

  toggle (x) {
    if (this.win.isVisible()) {
      this.win.hide()
    } else {
      this.showWindow(x)
    }
  }
}
