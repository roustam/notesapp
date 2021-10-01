import {combineReducers} from 'redux'
import { noteReducer } from './noteReducer'
import { selectedNoteReducer } from './selectNote'


export const rootReducer = combineReducers({
    notes: noteReducer,
    selectedNote: selectedNoteReducer
  }
)