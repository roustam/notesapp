import React from "react";
import { connect, useDispatch } from 'react-redux'
import { selectNote, deleteNote } from '../redux/actions'

const ItemList = ({allNotes}) => {
  const dispatch = useDispatch()

  const selectNoteHandler = (el) => {
    dispatch(selectNote(el.id))
    console.log('--selectNoteHandler--> ', el.id);
  }
  const deleteNoteHandler = (el) => {
    console.log('--deleteNoteHandler-->', el)
    dispatch(deleteNote(el))
  }

  if (allNotes.length === 0) {
    return <div>нет записей</div>
  } else {
    //console.log('all notes --->', allNotes, typeof(allNotes) )
    return allNotes.map((note) => <div className={"border mb-3 p-3 bg-light"} id={(Math.floor(Math.random()*100000+1)).toString()}>
      <p onClick={() => selectNoteHandler(note)} >{note.title}</p>
      <u onClick={() => deleteNoteHandler(note)}> Удалить </u>
    </div>)
  }
}

const mapStateToProps = state => {
  console.log('STATE ->', state)
  return {
    allNotes: state.notes.notes,
    currentNote: state.selectedNote.selectedNote
  }
  
}



export default connect(mapStateToProps, null)(ItemList)