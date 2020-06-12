const db = require('./db')

module.exports = function({}) {
  return {
    getKeeps: (callback) => {
      const query = 'SELECT * FROM keeps'
      const values = []

      db.query(query, values, (error, keeps) => {
        if(error){
          callback(['databaseError: ' + error], null)
        } else {
          callback([], keeps)
        }
      })
    },

    getKeepById: (keepId, callback) => {
      const query = 'SELECT * FROM keeps WHERE id = ?'
      const values = [keepId]

      db.query(query, values, (error, keep) => {
        if(error){
          callback(['databaseError: ' + error], null)
        } else {
          callback([], keep)
        }
      })
    },

    createKeep: (keep, callback) => {
        const query = `insert into keeps (name) values (?)`
        const values = [keep.name]
        db.query(query, values, (error, result) => {
            if(error){
                callback(['database error: ' + error], null)
            }	else {
                callback([], result)
            }
        })
    },

    updateKeepById: (updatedKeep, callback) => {
      const query = `UPDATE keeps SET name = ? WHERE id = ?`
      const values = [updatedKeep.name, updatedKeep.id]

      db.query(query, values, (error, result) => {
        if(error){
            callback(['database error: ' + error], null)
        }	else {
            callback([], result)
        }
      })
    },

    updateKeepTreasuryById: (newTreasury, callback) => {
      const query = `UPDATE resources SET treasury = ? WHERE id = ?`
      const values = [newTreasury.treasury, newTreasury.id]

      db.query(query, values, (error, result) => {
        if(error){
            callback(['database error: ' + error], null)
        }	else {
            callback([], result)
        }
      })
    },

    deleteKeepById: (keepId, callback) => {
      const query = `DELETE FROM resources WHERE id = ?`
      const values = [keepId]

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