const mysql = require("../mysql");

exports.cadastraBrinquedo = async (req, res) => {
    try {
        const resultados = await mysql.execute(
            `INSERT INTO atracoes (nome, tempo_espera, status, area)
            VALUES (?, ?, ?, ?);`,
            [
                req.body.nome,
                req.body.tempo_espera,
                req.body.status,
                req.body.area,
            ]
        );
        return res.status(201).send({
            "Mensagem": "Brinquedo cadastrado com sucesso",
            "Resultado": resultados
        });
    } catch (error) {
        return res.status(500).send({ error });
    }
};


exports.getBrinquedosByAreaName = async (req, res) => {
    try{
        const areaName = req.params.areaName.trim();
        resultados = await mysql.execute(
            `SELECT * FROM rides WHERE id_areas = (
            SELECT id FROM areas WHERE name = ?);`,
            [areaName]
        );

    

        if(resultados.length == 0){
            return res.status(404).send({ "Mensagem": "Nenhum brinquedo encontrado para esta área." });
        }

        return res.status(200).send({
            "Mensagem": "Brinquedos encontrados com sucesso",
            "Resultado": resultados
        });
    }catch (error) {
        return res.status(500).send(error);
    }   
}