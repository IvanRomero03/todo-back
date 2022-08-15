const updateTodo = (con, req, res) => {
  const idTodo = req.body.idTodo;
  const idUser = req.body.idUser;
  const priority = req.body.priority;
  const title = req.body.title;
  const description = req.body.description;
  const status = req.body.status;
  if (!idTodo || !idUser || !priority || !title || !description || !status) {
    res.status(400).send("Missing parameters");
    return;
  } else {
    con.query(
      `UPDATE todoTable SET idUser = ${idUser}, priority = ${priority}, title = "${title}", description = "${description}", status = ${status} WHERE idTodo = ${idTodo}`,
      (err, result) => {
        if (err) {
          res.status(500).send(err);
          return;
        } else {
          res.status(200).send(result);
          return;
        }
      }
    );
  }
};
module.exports = updateTodo;
