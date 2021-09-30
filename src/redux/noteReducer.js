import { CREATE_NOTE } from "./types"

const initialState = {
  notes:[],
  fetchedNotes:[]
}

export const noteReducer = (state=initialState, action) => {
  switch (action.type) {
    case CREATE_NOTE:
      console.log('state notes noteReducer-->', state)
      return {...state, notes: [...state.notes, action.payload] }
    default: return state
  }
}