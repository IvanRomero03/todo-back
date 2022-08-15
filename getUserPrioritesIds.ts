const getUserPrioritiesIds = (con, req, res) => {
  const idUser = req.body.idUser;
  if (!idUser) {
    console.log("No idUser provided");
    res.sendStatus(400);
  } else {
    con.query(
      `SELECT idPriority, priority, priorityColor FROM priorityTable WHERE idUser = ${idUser};`,
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
module.exports = getUserPrioritiesIds;
