import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import PokemonList from './components/PokemonList'
import Pokemon from './components/Pokemon'

import './App.css'

const Home = () => (
  <div className="Content">
    <h2>Home</h2>
  </div>
)

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Pokemon App"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <Router>
            <div>
              <div className="App">
                <PokemonList />
                <div className="Content">
                  <Route exact path="/" component={Home} />
                  <Route path="/pokemon/:id" component={Pokemon}/>
                </div>
              </div>
            </div>
          </Router>
        </div>

      </MuiThemeProvider>
    );
  }
}

export default App
