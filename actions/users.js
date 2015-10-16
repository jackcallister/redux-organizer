export const ActionTypes = {
  ADD_USER: 'ADD_USER',
  REMOVE_USER: 'REMOVE_USER',
}

export function removeUser({ id }) {
  return {
    type: ActionTypes.REMOVE_USER,
    payload: {
      id
    }
  }
}

export function addUser({ username }) {
  return {
    type: ActionTypes.ADD_USER,
    payload: {
      username
    }
  }
}
