const db = require('./db')

module.exports = function({}) {
  return {
    getResources: (callback) => {
      const query = 'SELECT * FROM resources'
      const values = []

      db.query(query, values, (error, resources) => {
        if(error){
          callback(['databaseError: ' + error], null)
        } else {
          callback([], resources)
        }
      })
    },

    getResourceById: (resourceId, callback) => {
      const query = 'SELECT * FROM resources WHERE id = ?'
      const values = [resourceId]

      db.query(query, values, (error, resource) => {
        if(error){
          callback(['databaseError: ' + error], null)
        } else {
          callback([], resource)
        }
      })
    },

    createResource: (resource, callback) => {
        const query = `insert into resources (name, amount) values (?, ?)`
        const values = [resource.name, resource.amount]
        db.query(query, values, (error, result) => {
            if(error){
                callback(['database error: ' + error], null)
            }	else {
                callback([], result)
            }
        })
    },

    updateResourceById: (updatedResource, callback) => {
      const query = `UPDATE resources SET name = ?, amount = ? WHERE id = ?`
      const values = [updatedResource.name, updatedResource.amount, updatedResource.id]

      db.query(query, values, (error, result) => {
        if(error){
            callback(['database error: ' + error], null)
        }	else {
            callback([], result)
        }
      })
    },

    deleteResourceById: (resourceId, callback) => {
      const query = `DELETE FROM resources WHERE id = ?`
      const values = [resourceId]

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