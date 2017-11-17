'use strict';

const db = require("../config/db")

class Question{

  static CreateTable(){
    let getTableInfo = new Promise(function (resolve){
      const sql = `SELECT * FROM sqlite_master WHERE type = 'table' AND name = ?`
      db.get(sql, [ tableName ], function(err, row){
          resolve(row)})
  }

}


module.exports = Question;
