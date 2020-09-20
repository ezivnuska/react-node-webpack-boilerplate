import React from 'react'
import { render } from 'react-dom'
import Layout from './components/Layout'
import './scss/main.scss'

const App = () => (
  <div id='main'>
    <Layout />
  </div>
)

render(<App />, document.getElementById('root'))