const defaultArray = [
  { priority: "Very Low", priorityColor: "purple" },
  { priority: "Low", priorityColor: "teal" },
  { priority: "Low-Medium", priorityColor: "green" },
  { priority: "Medium", priorityColor: "yellow" },
  { priority: "Medium-High", priorityColor: "orange" },
  { priority: "High", priorityColor: "red" },
  { priority: "Very High", priorityColor: "pink" },
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
