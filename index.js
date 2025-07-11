const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");


const loginRoutes = require("./routes/usuarios.routes");
const filaRoute = require("./routes/filas.routes"); 
const notificationsRoutes = require("./routes/notications.route");
const BrinquedosRoutes = require("./routes/brinquedos.routes");


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
app.use("/filas", filaRoute); 
app.use("/notifications", notificationsRoutes);
app.use("/brinquedos", BrinquedosRoutes);

module.exports = app; 