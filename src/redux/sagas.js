import {takeEvery, put, call} from 'redux-saga/effects'
import { FETCH_ALBUMS, FETCH_ALBUMS_SUCCESS } from "./types";

export function* sagaWatcher() {
  yield takeEvery(FETCH_ALBUMS, fetchAlbumsSaga)
  yield takeEvery(FETCH_ALBUMS_SUCCESS, fetchAlbumSagaSuccess)
}

function* fetchAlbumsSaga() {
  console.log('check FETCH ALB SAGA ---->')
  try {
    const payload = yield call(fetchAlbumsData)
    //console.log('PAYLOAD ->', payload)
    yield put({type:FETCH_ALBUMS_SUCCESS, payload})
  } catch (e) {
    console.log('Error ocured ', e)
  }
}

function* fetchAlbumSagaSuccess(payload) {
  console.log('FETCH ALBUM SAGA SUCCESS -> Payload', payload)
}

async function fetchAlbumsData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums?_limit=5')
  console.log('FETCHING ALBUMS >', response)
  return await response.json()
}