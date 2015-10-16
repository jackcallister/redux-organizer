import omit from 'lodash/object/omit'

import { ActionTypes } from '../actions/users'

export const initialState = {
  users: {
    1: {
      id: 1,
      username: 'Jack'
    },
    2: {
      id: 2,
      username: 'James'
    }
  }
}

export default function users(state = initialState, action) {

  switch(action.type) {

    case ActionTypes.ADD_USER:
      const id = Object.keys(state.users).length + 1

      return {
        ...state,
        users: {
          ...state,
          [id]: {
            id,
            ...action.payload
          }
        }
      }

    case ActionTypes.REMOVE_USER:
      return {
        ...state,
        users: omit(state.users, action.payload.id)
      }

    default:
      return state
  }
}
