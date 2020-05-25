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
    });

    router.get('/:servantId', (request, response) => {
        const servantId = request.params.servantId
        servantsManager.getServantById(servantId, (errors, servant) => {
            if(errors.length > 0) {
                response.status(500).json(errors);
            } else {
                response.status(200).json({
                    servant
                });
            }
        });
    });

    router.post('/', (request, response) => {
        const servant = {
            name: request.body.name, 
            salary: request.body.salary,
            amount: request.body.amount,
            production_amount: request.body.production_amount,
            production_type: request.body.production_type
        }

        servantsManager.createServant(servant, (errors, callback) => {
            if(errors.length > 0) {
                response.status(500).json(errors);
            } else {
                response.status(201).end();
            }
        })
    });

    router.put('/:servantId', (request, response) => {
        const updatedServant = {
            id: request.params.servantId,
            name: request.body.name, 
            salary: request.body.salary,
            amount: request.body.amount,
            production_amount: request.body.production_amount,
            production_type: request.body.production_type
        }

        servantsManager.updateServant(updatedServant, (errors, callback) => {
            if(errors.length > 0) {
                response.status(500).json(errors);
            } else {
                response.status(201).end();
            }
        })
    });

    router.delete('/:servantId', (request, response) => {
        const servantId = request.params.servantId

        servantsManager.deleteServantById(servantId, (errors, callback) => {
            if(errors.length > 0) {
                response.status(500).json(errors);
            } else {
                response.status(201).end();
            }
        })
    });

  return router
}