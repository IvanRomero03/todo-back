const deletePriority = (con, req, res) => {
  const priority = req.body.priority;
  const idUser = req.body.idUser;
  if (!priority || !idUser) {
    res.status(400).send("Missing parameters");
    return;
  } else {
    con.query(
      `UPDATE todoTable SET priority = 10 WHERE priority = ${priority} AND idUser = ${idUser};`,
      (err, result) => {
        if (err) {
          console.log(err);
        }
      }
    );
    con.query(
      `DELETE FROM priorityTable WHERE idPriority = "${priority}" AND idUser = ${idUser};`,
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
module.exports = deletePriority;
