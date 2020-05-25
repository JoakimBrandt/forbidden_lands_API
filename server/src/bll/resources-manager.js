module.exports = ({resourcesRepository}) => {
    return {
      getResources: (resources) => {
        resourcesRepository.getResources(resources)
      },

      getResourceById: (resourceId, resource) => {
        resourcesRepository.getResourceById(resourceId, resource)
      },

      createResource: (resource, callback) => {
        resourcesRepository.createResource(resource, callback)
      },

      updateResource: (resource, callback) => {
        resourcesRepository.updateResourceById(resource, callback)
      },

      deleteResourceById: (resourceId, callback) => {
        resourcesRepository.deleteResourceById(resourceId, callback)
      }
    }
  }