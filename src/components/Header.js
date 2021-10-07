import React, { useState } from "react";
import {connect} from 'react-redux'
import { createNote, fetchNote, fetchAlbums } from "../redux/actions"

class HeaderPage extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      title:'',
      text:'',
      id:''
    }
  }

  inputTopicHandler = event => {
    this.setState({title: event.target.value})
  }
  
  inputMessageHandler = event => {
    this.setState({text: event.target.value})
  }
  handleFetchClick = event => {
    event.preventDefault()
    this.props.fetchNote()
  }

  onSubmitNote = event => {
    event.preventDefault()
    const newNote = {
      title: this.state.title,
      text: this.state.text,
      id: Date.now().toString()
    }
    this.props.createNote(newNote)
    this.setState({title:'', text:''})
    console.log('newNote vals =>', newNote)
  }


  render() {
    return (
    <>
      <header>Введите тему и текст заметки</header>
      <form onSubmit={this.onSubmitNote}>
        <div className={'row'}>
          <div className='col mb-3'>
          <input 
            type="text" 
            className="form-control" 
            placeholder='Введите тему заметки'
            id="title" 
            value={this.state.title}
            onChange={this.inputTopicHandler}
          />        
          </div>
          <div className='col'>
            <input 
            type="text" 
            placeholder='Введите текст заметки'
            className="form-control" 
            id="message" 
            value={this.state.text}
            onChange={this.inputMessageHandler}
            />
            
          </div>
          <div>
          <button className={'button btn-success pt3'} type='submit'>Submit</button>
          <button className={'button btn-warning pt3'} onClick={e => this.handleFetchClick(e)}>Fetch</button>

          </div>
            <hr className={'mt-3 mb-3'}/>
        </div>
      </form>
      <button className={'button btn-info pt3'} onClick={this.props.fetchAlbums} >Saga call</button>
    </>
    )
  }
}

const mapDispatchToProps = {
  createNote,
  fetchNote,
  fetchAlbums,
}

export default connect(null, mapDispatchToProps)(HeaderPage)