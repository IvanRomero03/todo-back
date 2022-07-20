const getValidUser = (con, req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  if (!name || !password) {
    console.log("No name or password provided");
    res.sendStatus(400);
  } else {
    con.query(
      `SELECT * FROM usersTable WHERE name = '${name}' AND password = '${password}';`,
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
module.exports = getValidUser;
