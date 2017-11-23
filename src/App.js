import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

import PokemonList from './components/PokemonList'
import Pokemon from './components/Pokemon'

import './App.css'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Pokemon App"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <div className="App">
            <PokemonList />
            <Pokemon id="1" />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App
