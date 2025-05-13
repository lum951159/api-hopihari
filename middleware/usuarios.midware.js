const jwt = require("jsonwebtoken");

exports.require = async (req, res, next) => {
    try{
        res.locals.idUsuario = 0;

        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, "senhafojwt");

        if (decoded.id) {
            res.locals.idUsuario = decode.id;
            next();
        } else {
            return res.status(401).send({
                "Mensagem": "Usuario nao Autorizado"
            });
        }
    }catch (error) {
        return res.status(500).send({
            "error" : error
        });
    }
}