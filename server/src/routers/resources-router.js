const express = require('express')

module.exports = function({resourcesManager}) {
  const router = express.Router()

    router.get('/', (request, response) => {
        resourcesManager.getResources((errors, resources) => {
            if(errors.length > 0) {
                response.status(500).json(errors);
            } else {
                response.status(200).json({
                    resources
                });
            }
        });
    });

    router.get('/:resourceId', (request, response) => {
        const resourceId = request.params.resourceId
        resourcesManager.getResourceById(resourceId, (errors, resource) => {
            if(errors.length > 0) {
                response.status(500).json(errors);
            } else {
                response.status(200).json({
                    resource
                });
            }
        });
    });

    router.post('/', (request, response) => {

        const newResource = {
            name: request.body.name, 
            amount: request.body.amount,
        }

        resourcesManager.createResource(newResource, (errors, callback) => {
            if(errors.length > 0) {
                response.status(500).json(errors);
            } else {
                response.status(201).end();
            }
        })
    });

    router.put('/:resourceId', (request, response) => {
        const updatedResource = {
            id: request.params.resourceId,
            name: request.body.name,
            amount: request.body.amount, 
        }

        resourcesManager.updateResource(updatedResource, (errors, callback) => {
            if(errors.length > 0) {
                response.status(500).json(errors);
            } else {
                response.status(201).end();
            }
        })
    });

    router.delete('/:resourceId', (request, response) => {
        const resourceId = request.params.resourceId

        resourcesManager.deleteResourceById(resourceId, (errors, callback) => {
            if(errors.length > 0) {
                response.status(500).json(errors);
            } else {
                response.status(201).end();
            }
        })
    });

  return router
}