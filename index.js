const express = require("express")

class HttpProxy {
  constructor() {
    this.app = express()

    this.app.get("/", (req, res) => {
      console.log("server web app bundle here")
    })

    this.app.get("/contract", (req, res) => {
      console.log("fetch from contract here")
    })

    this.app.listen(3001)
    console.log("http server listening on port 3001")
  }
}

const httpProxy = new HttpProxy()
