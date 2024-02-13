const app = require("./index")
const mongoose = require("mongoose")

mongoose.connect(process.env.DB_URI).then((result) => {
    console.log("================ SUCCESFULLY CONNECTED TO MONGODB ================")
    app.listen(8080, () => {
        console.log("================ Server running on port 8080 ================")
    });
})
