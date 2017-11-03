module.exports.updateNewSeason = (newSeason) => {
  return {
    type: 'ADD_NEW_SEASON',
    payload: newSeason
  }
}

module.exports.updateSeason = (newDetails) => {
  return {
    type: 'ADD_SEASON_DETAILS',
    payload: newDetails
  }
}
