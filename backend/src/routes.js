const userRouter = require("./presentation/routes/user/user")
const memoryRouter = require("./presentation/routes/memory/memory")

module.exports = (app) => {
    app.get("/", (req, res) => {
        res.send("Hi there!")
    })
    app.use("/user", userRouter)
    app.use("/memory", memoryRouter)
}
