import React, { Component } from 'react';
import MainLayout from './components/MainLayout';
import TabacoList from './pages/TabacoList';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MainLayout>
            <Route exact path="/" component={TabacoList} />
            <Route path="/tabaco/add" component={About} />
          </MainLayout>

        </div>
      </Router>
    );
  }
}

export default App;


const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;