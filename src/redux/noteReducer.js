import { CREATE_NOTE } from "./types"

const initialState = {
  text:'test text',
  title:'title text'
}

export const noteReducer = (state=initialState, action) => {
  switch (action.type) {
    case CREATE_NOTE:
      console.log('state notes noteReducer-->', state)
      return{...state }
    default: return state
  }
}