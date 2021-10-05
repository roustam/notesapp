import { CREATE_NOTE, SELECT_NOTE, DELETE_NOTE } from "./types";

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

export function  deleteNote(note) {
  return {
    type: DELETE_NOTE,
    payload: note
  }
}