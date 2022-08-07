const getTodo = (con, req, res) => {
  const idTodo = req.body.idTodo;
  con.query(
    `SELECT todoTable.idTodo, todoTable.title, todoTable.description, todoTable.status, priorityTable.priority, priorityTable.priorityColor FROM todoTable INNER JOIN priorityTable On priorityTable.idPriority = todoTable.priority where idTodo = ${idTodo};`,
    (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.status(200).json(result);
      }
    }
  );
};
module.exports = getTodo;
