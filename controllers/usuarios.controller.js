const mysql = require("../mysql");

exports.atualizarUsuario = async (req, res) => {
    try{
        const idusuario = Number(req.params);

        const resultado = await mysql.execute(
            `UPDATE users
            SET name = "?",
             email = "?",
            password = "?"
            where id = 1;`,

            [req.body.name,
             req.body.email,
             req.body.password,
             idUsuario
            ]
        );

        return res.status(200).send({
            "Mensagem": "Usuario atualizado com sucesso",
            "Resultado": resultado
        });
    
    }catch (error) {
        return res.status(500).send({"Mensagem": error});

    }

}