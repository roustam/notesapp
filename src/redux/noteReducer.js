import {CREATE_NOTE, DELETE_NOTE, FETCH_ALBUMS, FETCH_NOTE} from "./types"
import _ from 'lodash';
const initialState = {
  notes:[],
  fetchedAlbums: [],
  selectedNote:0
}

export const noteReducer = (state=initialState, action) => {
  switch (action.type) {
    // case FETCH_ALBUMS:
    //   return {...state, fetchedAlbums: action.payload}
    case FETCH_NOTE:
   //   const formattedPayload = [...action.payload]
 //     console.log('action payload format ==>', formattedPayload)
      return {...state, notes: state.notes.concat(action.payload)}
    case CREATE_NOTE:
      console.log('REDUCERS > CREATE_NOTE', state)
      return {...state, notes: [...state.notes, action.payload] }
    case DELETE_NOTE:
      console.log('REDUCERS > DELETE_NOTE', state, action.payload.id)
      const indexOfItem = [...state.notes].findIndex(item => item.id === action.payload.id) //getting item index from array
      const clonedNotes = [...state.notes]
      //console.log('index of item', clonedNotes[indexOfItem])
      clonedNotes.splice(indexOfItem,1) // deleting item from array
      //console.log('cloned items --->', clonedNotes)
      //console.log('state --->', state)
      return {...state, notes: clonedNotes}
    default: return state
  }
}