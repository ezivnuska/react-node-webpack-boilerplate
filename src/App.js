import React from 'react'
import { render } from 'react-dom'
import { CopyLayout } from './components'
import './scss/app.scss'

const App = () => (
  <div id='app'>
    <CopyLayout />
  </div>
)

render(<App />, document.getElementById('root'))