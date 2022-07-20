const createUser = (con, req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (!username || !password) {
    console.log("No username or password provided");
    res.sendStatus(400);
  } else {
    con.query(
      `INSERT INTO userTable (username, password) VALUES ('${username}', '${password}');`,
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
