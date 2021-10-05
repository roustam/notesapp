import { CREATE_NOTE, DELETE_NOTE } from "./types"
import _ from 'lodash';
const initialState = {
  notes:[],
  selectedNote:0
}

export const noteReducer = (state=initialState, action) => {
  switch (action.type) {
    case CREATE_NOTE:
      console.log('state notes noteReducer-->', state)
      return {...state, notes: [...state.notes, action.payload] }
    case DELETE_NOTE:
      console.log('deleting note, state->', state, action.payload.id)
      const indexOfItem = [...state.notes].findIndex(item => item.id === action.payload.id)
      const clonedNotes = [...state.notes]

      console.log('index of item', clonedNotes[indexOfItem])
      clonedNotes.splice(indexOfItem,1)
      console.log('cloned items --->', clonedNotes)
      console.log('state --->', state)
      return {...state, notes: clonedNotes}
    // case UPDATE_NOTE:
    default: return state
  }
}