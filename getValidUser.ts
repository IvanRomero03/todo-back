const getValidUser = (con, req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  if (!name || !password) {
    console.log("No name or password provided");
    res.sendStatus(400);
  } else {
    con.query(
      `SELECT userId FROM usersTable WHERE name = '${name}' AND password = '${password}';`,
      (err, result) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          if (result[0]["userId"] === 1) {
            res.status(200).json(true);
          } else {
            res.status(200).json(false);
          }
        }
      }
    );
  }
};
module.exports = getValidUser;
