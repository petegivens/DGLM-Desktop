export default function reducer (state={}, action) {
  switch(action.type) {

    case "ADD_NEW_SEASON":
      let numberOfRounds = action.payload.roundTotal
      let rounds = [];
      for (let i = 1; i <= numberOfRounds; i++) {
        rounds.push({
          course: null,
          date: null,
          round_number: i,
          completed: false,
          scores: [],
          players: [],
          cards: [],
          season: null,
        })
      }
      return Object.assign({}, state, {
        newSeason: {
          ...action.payload,
          rounds: rounds
        }
      });

    case "ADD_SEASON_DETAILS":
      return Object.assign({}, state, {
        roundData: action.payload
      });

    case "ADD_NEW_CLUB":
      return Object.assign({}, state, {
        newClub: action.payload
      });

    case "START_NEW_COURSE":
    let holes = [];
    var numOfHoles = action.payload.holeTotal
    for (let i = 1; i <= numOfHoles; i++) {
      holes.push(
        {}
      )
    }
      return Object.assign({}, state, {
        newCourse: {
          ...action.payload,
          holeData: holes
        }
      });

    case "ADD_COURSE_DATA":
      return Object.assign({}, state, {
        newCourse: {
          ...action.payload,
        }
      });

      case "USER_LOGGING_IN":
        return Object.assign({}, state, {
          userData: {
            ...action.payload,
          },
          userId: action.payload.userData
        });

      default:
        return state;
  }
}
