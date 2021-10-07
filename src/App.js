import React from "react";
import HeaderPage from "./components/Header";
import FooterPage from "./components/Footer";
import NoteContent from "./components/NoteContent";
import ItemList from "./components/ItemList";
import Car from "./components/Car";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (
    <div className="container pt-3">
      <Router>
        <Link to="/">Home</Link> ::
        <Link to="/About">About</Link> ::
        <Link to="/Carousel">Carousel</Link> ::
        <Switch>
          <Route exact path="/">
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
            </Route>
            <Route path="/about">
              <About />
            </Route>
          <Route path="/Carousel">
            <Car />
          </Route>
          </Switch>
      </Router>
    </div>

  );
}

export default App;


function Home() {
  return <h2> some cool home </h2>;
}

function About() {
  return (<><h2>About</h2>
    <p>This application is created for educational purposes.</p>
    </>);
}
