const express = require("express")
const route = express.Router()
const HttpsAdapter = require("../../adapters/HttpsAdapter");

const CreateMemory = require("../../returnHttpResponse/memory/create");
const GetMemoryByDate = require("../../returnHttpResponse/memory/getByDate");

route.get("/date", new HttpsAdapter(new GetMemoryByDate()).adapt())
route.post("/", new HttpsAdapter(new CreateMemory()).adapt())

module.exports = route;
