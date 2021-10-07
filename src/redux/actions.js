import {CREATE_NOTE, SELECT_NOTE, DELETE_NOTE, FETCH_NOTE,
  FETCH_ALBUMS, FETCH_ALBUMS_SUCCESS} from "./types";

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

export function deleteNote(note) {
  return {
    type: DELETE_NOTE,
    payload: note
  }
}

export function fetchNote() {
  return async dispatch => {
    const response = await fetch ('https://jsonplaceholder.typicode.com/posts?_limit=10')
    const json = await response.json()
    console.log('json --->', json)
    dispatch({ type: FETCH_NOTE, payload: json})
  }
}
export function fetchAlbums() {
  console.log('ACTION > FetchAlbums 123')
  return {
    type: FETCH_ALBUMS
  }
}

export function fetchAlbumsSuccess() {
  console.log('ACTION > Fetch Albums success')
  return {
    type: FETCH_ALBUMS_SUCCESS
  }
}
