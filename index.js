const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");

<<<<<<< HEAD
const loginRoutes = require("./routes/usuarios.routes");
=======
const loginRoutes = require("./routes/usuarios.route");
>>>>>>> 67ff5beeb9845294c0cc7fc75bd077ca8a1faf7a

app.use(cors());
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Autohorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    }
    next();
});

app.use("/usuarios", loginRoutes);

module.exports = app; 
