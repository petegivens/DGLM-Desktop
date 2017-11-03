module.exports.addNewClub = (clubDetails) => {
  return {
    type: 'ADD_NEW_CLUB',
    payload: clubDetails
  }
}
