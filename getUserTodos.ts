const getUserTodos = (con, req, res) => {
  const idUser = req.body.idUser;
  if (!idUser) {
    console.log("No idUser provided");
    res.sendStatus(400);
  } else {
    con.query(
      `SELECT * FROM todoTable WHERE idUser = ${idUser};`,
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
module.exports = getUserTodos;
