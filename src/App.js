import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import Personnages from './components/container/Personnages'
import Comics from './components/container/Comics'
import Favoris from './components/container/Favoris'
import Detail from './components/container/Detail'
import './Reset.css'
import './App.css'

function App () {
  const [search, setSearch] = useState('')
  const handleSearch = (e) => {
    const { value } = e.target
    setSearch(value)
  }
  return (
    <div className='App'>
      <Router>
        <Header searchVal={search} handleSearch={handleSearch} />
        <Switch>
          <Route path='/personnages'>
            <Personnages search={search} />
          </Route>
          <Route path='/comics'>
            <Comics search={search} />
          </Route>
          <Route path='/favoris'>
            <Favoris />
          </Route>
          <Route path='/detail'>
            <Detail />
          </Route>
          <Route path='*'>
            <Redirect to='/personnages' />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
