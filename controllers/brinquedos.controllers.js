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