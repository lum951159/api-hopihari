const mysql = require('../mysql');


exports.verificarBrinquedo = async (req, res) => {
    try{
        const resultados = mysql.execute(`SELECT * FROM rides WHERE id = ?`, [req.params.idRide]);
        if(resultados.length == 0){
            return res.status(404).send({"Mensagem" : "Brinquedo não encontrado"})
        }
    }catch(error){
        return res.status(500).send(error);
    }
}

exports.entrarFila = async (req, res, nst) => {
    try{
        const resultados = await mysql.execute(`INSERT INTO 'lines' (id_user, id_rides) VALUES(?,?)`,
             [res.locals.idUsuario, req.params.idRide]);
             return res.status(201).send({"Mensagens" : resultados})
    }catch(error){
        return res.status(500).json(error);
    }
}