module.exports = ({servantsRepository}) => {
    return {
      getServants: (servants) => {
        servantsRepository.getServants(servants)
      },

      createServant: (callback) => {
          servantsRepository.createServant(callback)
      }
    }
  }