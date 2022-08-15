const getTodoByPriority = (con, req, res) => {
  const priority = req.body.priority;
  const idUser = req.body.idUser;
  if (!priority || !idUser) {
    console.log("priority or idUser is not defined");
    res.sendStatus(400);
  } else {
    con.query(
      `SELECT todoTable.idTodo, todoTable.title, todoTable.description, todoTable.status, priorityTable.priority, priorityTable.priorityColor FROM todoTable INNER JOIN priorityTable On priorityTable.idPriority = todoTable.priority WHERE todoTable.priority = '${priority}' AND todoTable.idUser = ${idUser};`,
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
module.exports = getTodoByPriority;
