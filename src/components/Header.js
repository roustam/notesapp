import React, { useState } from "react";

export default class HeaderPage extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      title:'',
      text:''
    }
  }


  inputHandler = event => {
    this.setState({title: event.target.value})
  }
  
  render() {
    return (
    <>
      <header>Введите тему и текст сообщения</header>
      <div className="row">
        <div className='col'>
         <input 
          type="text" 
          className="form-control" 
          id="title" 
          value={this.state.title}
          onChange={this.inputHandler}
        />        
        </div>
        <div className='col'>
          <input 
          type="text" 
          className="form-control" 
          id="message" 
          value={this.state.title}
          onChange={this.inputHandler}
          />
        </div>
        <hr className={'mt-3 mb-3'}/>
      </div>

        
    </>
    )
  }
}

