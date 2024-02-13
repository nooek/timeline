const express = require("express")
const route = express.Router()
const HttpsAdapter = require("../../adapters/HttpsAdapter");

const CreateUser = require("../../returnHttpResponse/user/create");
const LoginUser = require("../../returnHttpResponse/user/login");

route.get("/login", new HttpsAdapter(new LoginUser()).adapt())
route.post("/", new HttpsAdapter(new CreateUser()).adapt())

module.exports = route;
