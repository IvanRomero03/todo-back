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
          console.log(result);
          if (result[0]["COUNT(*)"] === 0) {
            res.status(200).json(true);
          } else {
            res.status(200).json(false);
          }
        }
      }
    );
  }
};

module.exports = getUniqueUsername;
