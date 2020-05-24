const express = require('express')

module.exports = function({servantsManager}) {
  const router = express.Router()

  router.get('/', (request, response) => {
    servantsManager.getServants((errors, servants) => {
        if(errors.length > 0) {
            response.status(500).json(errors);
        } else {
            response.status(200).json({
                servants
            });
        }
    });

    router.post('/new', (request, response) => {
        servantsManager.createServant((errors, callback) => {
            if(errors.length > 0) {
                response.status(500).json(errors);
            } else {
                response.status(200).json(callback);
            }
        })
    })
});
  
  return router
}