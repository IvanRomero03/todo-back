const getTodo = (con, req, res) => {
  const idTodo = req.body.idTodo;
  con.query(`SELECT * FROM todoTable WHERE id = ${idTodo};`, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.status(200).json(result);
    }
  });
};
module.exports = getTodo;
