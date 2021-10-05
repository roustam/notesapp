import React from 'react'
import { connect } from 'react-redux'

const NoteContent = ({currentNote, allNotes}) => {
  const currentNoteText = allNotes.find(note => note.id === currentNote)
//  console.log('-all notes->' , currentNote, currentNoteText);
  return (
    <div>
      <p> {Date(currentNote)}  </p>  
      <p> {currentNoteText === undefined ? 'пусто' : currentNoteText['text']}</p>
    </div>
  )
}

const mapStateToProps = state => {
  console.log('STATE ->', state)
  return {
    allNotes: state.notes.notes,
    currentNote: state.selectedNote.selectedNote
  }
}

export default connect(mapStateToProps, null)(NoteContent)