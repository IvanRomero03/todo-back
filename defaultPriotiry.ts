const defaultArray = [
  { priority: "Low", priorityColor: "green" },
  { priority: "Medium", priorityColor: "yellow" },
  { priority: "High", priorityColor: "red" },
];

const defaultPriority = (idUser, con) => {
  if (!idUser) {
    console.log("No idUser provided");
  } else {
    defaultArray.map(async (priority) => {
      await con.query(
        `INSERT INTO priorityTable (idUser, priority, priorityColor) VALUES (${idUser}, '${priority.priority}', '${priority.priorityColor}');`,
        (err, result) => {
          if (err) {
            console.log(err);
          }
        }
      );
    });
  }
};
module.exports = defaultPriority;
