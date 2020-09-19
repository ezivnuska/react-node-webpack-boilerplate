import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './components/Layout'
import './scss/main.scss'
const App = () => {
  return (
    <div id='main'>
      <Layout />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))