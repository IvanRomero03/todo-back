const createPriority = (con, req, res) => {
  const idUser = req.body.idUser;
  const priority = req.body.priority;
  const priorityColor = req.body.priorityColor;
  if (!idUser || !priority || !priorityColor) {
    console.log("No idUser or priority or priorityColor provided");
    res.sendStatus(400);
  } else {
    con.query(
      `INSERT INTO priorityTable (idUser, priority, priorityColor) VALUES (${idUser}, '${priority}', '${priorityColor}');`,
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
module.exports = createPriority;
