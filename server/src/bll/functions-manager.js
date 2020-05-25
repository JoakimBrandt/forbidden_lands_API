module.exports = ({functionsRepository}) => {
    return {
      getFunctions: (functions) => {
        functionsRepository.getFunctions(functions)
      },

      getFunctionById: (functionId, func) => {
        functionsRepository.getFunctionById(functionId, func)
      },

      createFunction: (func, callback) => {
        functionsRepository.createFunction(func, callback)
      },

      updateFunction: (func, callback) => {
        functionsRepository.updateFunctionById(func, callback)
      },

      deleteFunctionById: (functionId, callback) => {
        functionsRepository.deleteFunctionById(functionId, callback)
      }
    }
  }