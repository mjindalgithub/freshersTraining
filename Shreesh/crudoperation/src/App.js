import React from 'react'
import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>

      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <div>
          {/* <Routes>
            <Route exact path="/create">
              <Create />
            </Route>

            <Route path="/read">
              <Read />
            </Route>

            <Route path="/update">
              <Update />
            </Route>
          </Routes> */}

          <Create /> 
          <Read />
          <Update />

        </div>
      </div>
    </Router>
  );
}

export default App;