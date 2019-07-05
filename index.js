const express = require("express")
const axios = require("axios")
const cors = require("cors")
class HttpProxy {
  constructor() {
    this.app = express()
    this.app.use(cors())

    this.app.get("/", (req, res) => {
      console.log("server web app bundle here")
      res.send("transaction here")
    })

    this.app.get("/contract", async (req, res) => {
      console.log("fetch from contract here")
      const supply = await axios({
        method: "GET",
        url: "http://localhost:3002/supply",
        data: JSON.stringify({}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      res.send(supply)
    })

    this.app.listen(3002)
    console.log("http server listening on port 3002")
  }
}

const httpProxy = new HttpProxy()
