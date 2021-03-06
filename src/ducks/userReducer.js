import axios from 'axios'

const GET_PEOPLE = 'GET_PEOPLE'

export function getPeople() {
  return {
    type: GET_PEOPLE,
    payload: axios.get('https://www.swapi.co/api/people'),
  }
}

const initialState = {
  user: {},
  people: [],
  isLoading: false,
}

export default function userReducer(state = initialState, action) {
  console.log('action.type', action.type)
  switch (action.type) {
    case GET_PEOPLE + '_PENDING':
      return {
        ...state,
        isLoading: true,
      }
    case `{GET_PEOPLE}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        people: action.payload.data.results,
      }
    case `{GET_PEOPLE}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        errMessage: action.payload.errMessage,
      }
    default:
      return {
        state,
      }
  }
}
