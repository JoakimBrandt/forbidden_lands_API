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

    createServant: (callback) => {
        const query = `insert into data.servants (name, salary, amount, produces_amount, produces_type) values (?, ?, ?, ?, ?)`
        const values = ["stenhuggare", 3, 6, 4, "sten"]
        
        db.query(query, values, (error, result) => {
            if(error){
                callback(['databaseError'], null)
            }	else {
                callback([], result)
            }
        })
    }
  }
}