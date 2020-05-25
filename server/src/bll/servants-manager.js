module.exports = ({servantsRepository}) => {
    return {
      getServants: (servants) => {
        servantsRepository.getServants(servants)
      },

      getServantById: (servantId, servant) => {
        servantsRepository.getServantById(servantId, servant)
      },

      createServant: (servant, callback) => {
          servantsRepository.createServant(servant, callback)
      },

      updateServant: (servant, callback) => {
        servantsRepository.updateServantById(servant, callback)
      },

      deleteServantById: (servantId, callback) => {
        servantsRepository.deleteServantById(servantId, callback)
      }
    }
  }