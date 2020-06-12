module.exports = ({keepsRepository}) => {
    return {
      getKeeps: (keeps) => {
        keepsRepository.getKeeps(keeps)
      },

      getKeepById: (keepId, keep) => {
        keepsRepository.getKeepById(keepId, keep)
      },

      createKeep: (keep, callback) => {
        keepsRepository.createKeep(keep, callback)
      },

      updateKeep: (keep, callback) => {
        keepsRepository.updateKeepById(keep, callback)
      },

      updateKeepTreasuryById: (treasury, callback) => {
        keepsRepository.updateKeepTreasuryById(treasury, callback)
      },

      deleteKeepById: (keepId, callback) => {
        keepsRepository.deleteKeepById(keepId, callback)
      }
    }
  }