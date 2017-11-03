module.exports.userLogin = (userData) => {
  return {
    type: 'USER_LOGGING_IN',
    payload: userData
  }
}
