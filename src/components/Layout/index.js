import React from 'react'

import MyComponent from '../MyComponent'
import MyFunctionalComponent from '../MyFunctionalComponent'

const Layout = props => (
    <div id='layout'>
        <h1>Website</h1>
        <MyComponent />
        <MyFunctionalComponent />
    </div>
)

export default Layout