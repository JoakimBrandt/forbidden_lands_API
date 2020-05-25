const db = require('./db')

module.exports = function({}) {
  return {
    getFunctions: (callback) => {
      const query = 'SELECT * FROM functions'
      const values = []

      db.query(query, values, (error, functions) => {
        if(error){
          callback(['databaseError: ' + error], null)
        } else {
          callback([], functions)
        }
      })
    },

    getFunctionById: (functionId, callback) => {
      const query = 'SELECT * FROM functions WHERE id = ?'
      const values = [functionId]

      db.query(query, values, (error, func) => {
        if(error){
          callback(['databaseError: ' + error], null)
        } else {
          callback([], func)
        }
      })
    },

    createFunction: (func, callback) => {
        const query = `insert into functions (name, amount) values (?, ?)`
        const values = [func.name, func.amount]
        db.query(query, values, (error, result) => {
            if(error){
                callback(['database error: ' + error], null)
            }	else {
                callback([], result)
            }
        })
    },

    updateFunctionById: (updatedFunction, callback) => {
      const query = `UPDATE functions SET name = ?, amount = ? WHERE id = ?`
      const values = [updatedFunction.name, updatedFunction.amount, updatedFunction.id]

      db.query(query, values, (error, result) => {
        if(error){
            callback(['database error: ' + error], null)
        }	else {
            callback([], result)
        }
      })
    },

    deleteFunctionById: (functionId, callback) => {
      const query = `DELETE FROM functions WHERE id = ?`
      const values = [functionId]

      db.query(query, values, (error, result) => {
        if(error){
            callback(['database error: ' + error], null)
        }	else {
            callback([], result)
        }
      })
    },
  }
}