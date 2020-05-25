const express = require('express')

module.exports = function({functionsManager}) {
  const router = express.Router()

    router.get('/', (request, response) => {
        functionsManager.getFunctions((errors, functions) => {
            if(errors.length > 0) {
                response.status(500).json(errors);
            } else {
                response.status(200).json({
                    functions
                });
            }
        });
    });

    router.get('/:functionId', (request, response) => {
        const functionId = request.params.functionId
        functionsManager.getFunctionById(functionId, (errors, func) => {
            if(errors.length > 0) {
                response.status(500).json(errors);
            } else {
                response.status(200).json({
                    func
                });
            }
        });
    });

    router.post('/', (request, response) => {

        const newFunction = {
            name: request.body.name, 
            amount: request.body.amount,
        }

        functionsManager.createFunction(newFunction, (errors, callback) => {
            if(errors.length > 0) {
                response.status(500).json(errors);
            } else {
                response.status(201).end();
            }
        })
    });

    router.put('/:functionId', (request, response) => {
        const updatedFunction = {
            id: request.params.functionId,
            name: request.body.name,
            amount: request.body.amount, 
        }

        functionsManager.updateFunction(updatedFunction, (errors, callback) => {
            if(errors.length > 0) {
                response.status(500).json(errors);
            } else {
                response.status(201).end();
            }
        })
    });

    router.delete('/:functionId', (request, response) => {
        const functionId = request.params.functionId

        functionsManager.deleteFunctionById(functionId, (errors, callback) => {
            if(errors.length > 0) {
                response.status(500).json(errors);
            } else {
                response.status(201).end();
            }
        })
    });

  return router
}