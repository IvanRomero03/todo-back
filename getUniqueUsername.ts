const getUniqueUsername = (con, req, res) => {
  const name = req.body.name;
  if (!name) {
    console.log("No name provided");
    res.sendStatus(400);
  } else {
    con.query(
      `SELECT COUNT(*) FROM usersTable WHERE name = '${name}';`,
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

module.exports = getUniqueUsername;
