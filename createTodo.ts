const createTodo = (con, req, res) => {
  const idUser = req.body.idUser;
  const title = req.body.title;
  const description = req.body.description;
  const status = req.body.status;
  const priority = req.body.priority;

  if (!idUser || !title || !description || !status || !priority) {
    console.log(
      "No idUser or title or description or status or priority provided"
    );
    res.status(400).json({
      message:
        "No idUser or title or description or status or priority provided",
      recivedData: req.body,
    });
  } else {
    con.query(
      `INSERT INTO todoTable (idUser, title, description, status, priority) VALUES (${idUser}, '${title}', '${description}', '${status}', ${priority});`,
      (err, result) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          res.status(200).json(result.insertId);
        }
      }
    );
  }
};
module.exports = createTodo;
