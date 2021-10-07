import {CREATE_NOTE} from "./types";
const wordList = ['test', 'spam', 'byyh']

export function spamWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type ===  CREATE_NOTE) {
        const found = wordList.filter(w => action.payload.title.includes(w))
        if (found.length) {
          //console.log('обнаружено стоп слово', found)
          alert('обнаружено стоп слово')
          return {} // appr method ?
        }
      }
      return next(action)
    }
  }
}