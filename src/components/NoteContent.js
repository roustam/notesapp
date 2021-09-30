import React from 'react'
import { connect } from 'react-redux'

const NoteContent = (allNotes) => {
  console.log('note content -->', allNotes.allNotes)
  const listOfTitles = allNotes.allNotes

  return (
    listOfTitles.map(el => <div>{el.title}</div>)
  )
}

const mapStateToProps = state => {
  console.log('STATE ->', state)
  return {
    allNotes: state.notes.notes
  }
}

export default connect(mapStateToProps, null)(NoteContent)