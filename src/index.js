import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBcEVXUAWMKfxSr9NisVAFGTU-m8I8vf-M'

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}
ReactDOM.render(
  <App/>, document.querySelector('.container'))
