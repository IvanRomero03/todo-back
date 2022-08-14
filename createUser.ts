const createUser = (con, req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  if (!name || !password) {
    console.log("No name or password provided");
    res.sendStatus(400);
  } else {
    con.query(
      `INSERT INTO usersTable (name, password) VALUES ('${name}', '${password}');`,
      (err, result) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          const defaultPriority = require("./defaultPriority.ts");
          defaultPriority(result.insertId, con);
          res.status(200).json(result.insertId);
        }
      }
    );
  }
};

module.exports = createUser;
