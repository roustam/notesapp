import React from "react";
import HeaderPage from "./components/Header";
import FooterPage from "./components/Footer";
import Button from "./components/Button";
import ItemContent from "./components/ItemContent";
import ItemList from "./components/ItemList";

function App() {
  const myItems = ['first post', 'second post', 'third post', 'last post']
  
  const refreshList = () => (console.log('button clicked 123'))


  return (
    <div className="container pt-3">
      <div class='row'>
        <div className="col">
          <HeaderPage />
        </div>
      </div>
        <div className='row'>
        <div className="col">
          <ItemContent />
        </div>
        <div className="col">
          <ItemList ItemList = {myItems} />
        </div>
        <div className='col'>
          <div className="col">
            <button className='button btn-success' onClick={() => console.log('ggggg')}>add</button>
            <hr/>
            <button className='button btn-danger' onClick={() => refreshList()}>remove</button>
          </div>
        </div>
      </div>
      <div className='row'>
        <FooterPage />
      </div>
    </div>

  );
}

export default App;
