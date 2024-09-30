let express = require('express');
const router = require('./routes');
let cors = require("cors");
let app = express()

app.use(
    cors({
        config: "*",
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/v1', router)

app.listen(8001, () => {
    console.log("server connected successfully");
})
