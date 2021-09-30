import React from 'react'
import { connect } from 'react-redux'

const ItemList = ({allNotes}) => {
  if (allNotes.length === 0) { 
    return <div>нет записей</div>
  } else {
    //console.log('all notes --->', allNotes, typeof(allNotes) )
    return allNotes.map((note) => <div className={"border mb-3 p-3 bg-light"} key={note.id}><p>{note.title}</p></div>)
  }
}

const mapStateToProps = state => {
  console.log('STATE ->', state)
  return {
    allNotes: state.notes.notes
  }
}

export default connect(mapStateToProps, null)(ItemList)