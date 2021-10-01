import React from "react";
import { connect, useDispatch } from 'react-redux'
import { selectNote } from '../redux/actions'



const ItemList = ({allNotes}) => {
  const dispatch = useDispatch()


  const selectNoteHandler = (el) => {
    dispatch(selectNote(el.id))
    console.log('--selectNoteHandler--> ', el.id);
  }


  if (allNotes.length === 0) { 
    return <div>нет записей</div>
  } else {
    //console.log('all notes --->', allNotes, typeof(allNotes) )
    return allNotes.map((note) => <div className={"border mb-3 p-3 bg-light"} key={note.id}>
    <p onClick={() => selectNoteHandler(note)} >{note.title}</p>
    </div>)
  }
}

const mapStateToProps = state => {
  console.log('STATE ->', state)
  return {
    allNotes: state.notes.notes,
  }
  
}



export default connect(mapStateToProps, null)(ItemList)