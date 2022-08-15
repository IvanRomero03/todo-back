const getTodosByStatus = (con, req, res) => {
  const status = req.body.status;
  const idUser = req.body.idUser;
  if (!status || !idUser) {
    console.log("status or idUser is not defined");
    res.sendStatus(400);
  } else {
    con.query(
      `SELECT todoTable.idTodo, todoTable.title, todoTable.description, todoTable.status, priorityTable.priority, priorityTable.priorityColor FROM todoTable INNER JOIN priorityTable On priorityTable.idPriority = todoTable.priority WHERE todoTable.status = '${status}' AND todoTable.idUser = ${idUser};`,
      (err, result) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          res.status(200).json(result);
        }
      }
    );
  }
};
module.exports = getTodosByStatus;
