const getPriorityId = (con, req, res) => {
  const idUser = req.body.idUser;
  const priority = req.body.priority;
  const priorityColor = req.body.priorityColor;
  if (!idUser || !priority || !priorityColor) {
    console.log("No idUser or priority or priorityColor provided");
    res.sendStatus(400);
  } else {
    con.query(
      `SELECT idPriority FROM priorityTable WHERE idUser = ${idUser} AND priority = '${priority}' AND priorityColor = '${priorityColor}';`,
      (err, result) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          if (result.length === 0) {
            res.sendStatus(404);
          } else {
            res.status(200).json(result[0]?.idPriority);
          }
        }
      }
    );
  }
};
module.exports = getPriorityId;
