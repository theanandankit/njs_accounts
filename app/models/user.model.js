const sql = require("./db.js");

// constructor
const User = function(user) {
  this.id = user.id;
  this.firstName = user.firstName;
  this.lastName = user.lastName;
  this.email = user.email;
  this.phone = user.phone;
  this.password = user.password;
  this.dob = user.dob;
};

User.create = function (newUser, result) {
  sql.query("INSERT INTO USERS SET ?", newUser, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created user: ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};

User.findById = function (id, result)  {
  sql.query(`SELECT * FROM USERS WHERE id = ${id}`, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found tutorial: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

User.getAll = function (title, result) {
  let query = "SELECT * FROM USERS";

  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }

  sql.query(query, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("users: ", res);
    result(null, res);
  });
};

User.updateById = function (id, user, result) {
  sql.query(
    "UPDATE USERS SET firstName = ?, lastName = ?, email = ?, phone = ?, dob = ? WHERE id = ?",
    [user.firstName, user.lastName, user.email, user.phone, user.dob, id],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found User with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated User: ", { id: id, ...user });
      result(null, { id: id, ...user });
    }
  );
};

module.exports = User;