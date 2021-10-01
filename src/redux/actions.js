import { CREATE_NOTE, SELECT_NOTE } from "./types";

export function createNote(note) {
  return {
    type: CREATE_NOTE,
    payload: note
  }
}

export function selectNote(id) {
  return {
    type: SELECT_NOTE,
    payload: id
  }
}