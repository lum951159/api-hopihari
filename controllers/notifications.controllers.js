const mysql = require('../mysql');

exports.getNotificacoes = async (req, res) => {
  try {
    const id_user = res.locals.idUsuario; 

    const query = 'SELECT * FROM notifications WHERE id_user = ? AND ativa = TRUE';
    const results = await mysql.execute(query, [id_user]);
    return res.send(201).send({"mensagens": results});

  } catch (error) {
    console.error('Erro ao buscar notificações:', error);
    return res.status(500).json({ erro: 'Erro ao buscar notificações' });
  }
};