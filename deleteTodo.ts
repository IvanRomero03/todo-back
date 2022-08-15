const deleteTodo = (con, req, res) => {
  const idTodo = req.body.idTodo;
  const idUser = req.body.idUser;
  if (!idTodo || !idUser) {
    res.status(400).send("Missing parameters");
    return;
  } else {
    con.query(
      `DELETE FROM todoTable WHERE idTodo = ${idTodo};`,
      (err, result) => {
        if (err) {
          console.log(err);
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
module.exports = deleteTodo;
