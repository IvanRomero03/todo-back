const getValidUser = (con, req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (!username || !password) {
    console.log("No username or password provided");
    res.sendStatus(400);
  } else {
    con.query(
      `SELECT COUNT(*) FROM userTable WHERE username = '${username}' AND password = '${password}';`,
      (err, result) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          console.log(result);
          res.status(200).json(result);
        }
      }
    );
  }
};
module.exports = getValidUser;
