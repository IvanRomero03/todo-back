const getUniqueUsername = (con, req, res) => {
  const username = req.body.username;
  if (!username) {
    console.log("No username provided");
    res.sendStatus(400);
  } else {
    con.query(
      `SELECT COUNT(*) FROM userTable WHERE username = '${username}';`,
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
