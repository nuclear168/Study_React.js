const db = require("../utils/database");

module.exports = class Test {
  constructor(id, item) {
    this.id = id;
    this.item = item;
  }

  static getAll() {
    return db.execute("SELECT * FROM test");
    // return [
    //   {
    //     id: 1,
    //     item: "test1",
    //   },
    //   {
    //     id: 2,
    //     item: "test2",
    //   },
    // ];
  }
};
