const express = require('express')

module.exports = function({keepsManager}) {
  const router = express.Router()

    router.get('/', (request, response) => {
        keepsManager.getKeeps((errors, keeps) => {
            if(errors.length > 0) {
                response.status(500).json(errors);
            } else {
                response.status(200).json({
                    keeps
                });
            }
        });
    });

    router.get('/:keepId', (request, response) => {
        const keepId = request.params.keepId
        keepsManager.getKeepById(keepId, (errors, keep) => {
            if(errors.length > 0) {
                response.status(500).json(errors);
            } else {
                response.status(200).json({
                    keep
                });
            }
        });
    });

    router.post('/', (request, response) => {

        const newKeep = {
            name: request.body.name, 
        }

        keepsManager.createKeep(newKeep, (errors, callback) => {
            if(errors.length > 0) {
                response.status(500).json(errors);
            } else {
                response.status(201).end();
            }
        })
    });

    router.put('/:keepId', (request, response) => {
        const updatedKeep = {
            id: request.params.keepId,
            name: request.body.name, 
        }

        keepsManager.updateKeep(updatedKeep, (errors, callback) => {
            if(errors.length > 0) {
                response.status(500).json(errors);
            } else {
                response.status(201).end();
            }
        })
    });

    router.put('/:keepId/treasury', (request, response) => {
        const newTreasury = {
            id: request.params.keepId,
            treasury: request.body.treasury, 
        }

        keepsManager.updateKeepTreasuryById(newTreasury, (errors, callback) => {
            if(errors.length > 0) {
                response.status(500).json(errors);
            } else {
                response.status(201).end();
            }
        })
    });

    router.delete('/:keepId', (request, response) => {
        const keepId = request.params.keepId

        keepsManager.deleteKeepById(keepId, (errors, callback) => {
            if(errors.length > 0) {
                response.status(500).json(errors);
            } else {
                response.status(201).end();
            }
        })
    });

  return router
}