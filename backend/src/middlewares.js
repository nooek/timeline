const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv");

module.exports = (app) => {
  app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }))
  app.use(cors())
  app.use(express.json({ limit: '50mb' }))
  dotenv.config()
};
