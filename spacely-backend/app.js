require("dotenv").config();
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const chalk = require('chalk');
const mongoose = require('mongoose');

// PORT
const port = process.env.PORT || 8000


// DATABASE
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log(chalk.red("Database Connected"));
});

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


// SpaceLY Routes

// User
const authRoutes = require("./routes/user/auth");
const userProfileRoutes = require("./routes/user/userprofile");

//Admin

const adminRoutes = require("./routes/admin/auth");



app.get("/", (req, res) => {
    return res.json({
        msg: 'okok'
    })
});


// SpaceLY routes fixed
app.use("/api", authRoutes);
app.use("/api", userProfileRoutes);

app.use("/api", adminRoutes);



// Server Starting

app.listen(port, () => {
    console.log(chalk.green("Database Connected"));

});