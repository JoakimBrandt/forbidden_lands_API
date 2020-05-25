const db = require('./db')

module.exports = function({}) {
  return {
    getServants: (callback) => {
      const query = 'SELECT * FROM servants'
      const values = []

      db.query(query, values, (error, servants) => {
        if(error){
          callback(['databaseError: ' + error], null)
        } else {
          callback([], servants)
        }
      })
    },

    getServantById: (servantId, callback) => {
      const query = 'SELECT * FROM servants WHERE id = ?'
      const values = [servantId]

      db.query(query, values, (error, servant) => {
        if(error){
          callback(['databaseError: ' + error], null)
        } else {
          callback([], servant)
        }
      })
    },

    createServant: (servant, callback) => {
        const query = `insert into servants (name, salary, amount, production_amount, production_type) values (?, ?, ?, ?, ?)`
        const values = [servant.name, servant.salary, servant.amount, servant.production_amount, servant.production_type]
        db.query(query, values, (error, result) => {
            if(error){
                callback(['database error: ' + error], null)
            }	else {
                callback([], result)
            }
        })
    },

    updateServantById: (updatedServant, callback) => {
      const query = `UPDATE servants SET name = ?, salary = ?, amount = ?, production_amount = ?, production_type = ? WHERE id = ?`
      const values = [updatedServant.name, updatedServant.salary, updatedServant.amount, updatedServant.production_amount, updatedServant.production_type, updatedServant.id]

      db.query(query, values, (error, result) => {
        if(error){
            callback(['database error: ' + error], null)
        }	else {
            callback([], result)
        }
      })
    },

    deleteServantById: (servantId, callback) => {
      const query = `DELETE FROM servants WHERE id = ?`
      const values = [servantId]

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