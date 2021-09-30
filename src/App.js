import React from "react";
import HeaderPage from "./components/Header";
import FooterPage from "./components/Footer";
import Button from "./components/Button";
import NoteContent from "./components/NoteContent";
import ItemList from "./components/ItemList";

function App() {
  const myItems = ['first post', 'second post', 'third post', 'last post']
  
  const refreshList = () => (console.log('button clicked 123'))
  

  return (
    <div className="container pt-3">
      <div className='row'>
        <div className="col">
          <HeaderPage />
        </div>
      </div>
        <div className='row'>
          <div className="col">
            <ItemList />
          </div>
          <div className='col'>
            <NoteContent />
          </div>
      </div>
      <div className='row'>
        <FooterPage />
      </div>
    </div>

  );
}

export default App;
