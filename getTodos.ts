const getTodos = (con, req, res) => {
  con.query(`SELECT * FROM todoTable;`, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.status(200).json(result);
    }
  });
};

module.exports = getTodos;
