import { CREATE_NOTE } from "./types";

export function createNote(note) {
  return {
    type: CREATE_NOTE,
    payload: note
  }
}