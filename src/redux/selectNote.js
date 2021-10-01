import { SELECT_NOTE } from "./types";

const initialState = {
  selectedNote: 0
}

export const selectedNoteReducer = (state=initialState, action) => {
  switch(action.type) {
      case SELECT_NOTE: 
      console.log('select note reducer ', action.payload)
      return {...state, selectedNote: action.payload}
    default: return state
  }
}