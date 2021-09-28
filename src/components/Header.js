import React, { useState } from "react";
import {connect} from 'react-redux'
import { createNote } from "../redux/actions";

class HeaderPage extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      title:'',
      text:''
    }
  }


  inputTopicHandler = event => {
    this.setState({title: event.target.value})
  }
  

  inputMessageHandler = event => {
    this.setState({text: event.target.value})
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
    console.log('vals =>', newNote)
  }

  render() {
    return (
    <>
      <header>Введите тему и текст сообщения</header>
      <form onSubmit={this.onSubmitNote}>
        <div className="row">
          <div className='col'>
          <input 
            type="text" 
            className="form-control" 
            id="title" 
            value={this.state.title}
            onChange={this.inputTopicHandler}
          />        
          </div>
          <div className='col'>
            <input 
            type="text" 
            className="form-control" 
            id="message" 
            value={this.state.text}
            onChange={this.inputMessageHandler}
            />
          </div>
          <button className={"button btn bnt-success"} type='submit'>Submit</button>
          <hr className={'mt-3 mb-3'}/>
        </div>
      </form>
        
    </>
    )
  }
}

const mapDispatchToProps = {
  createNote
}

export default connect(null, mapDispatchToProps)(HeaderPage)

