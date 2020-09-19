import React from 'react'
import {
    Header,
    MyComponent,
    MyFunctionalComponent
} from '../'

import './Layout.scss'

const Layout = props => (
    <div id='layout'>
        <Header title="Zach&rsquo;s Site" />
        <div id='main-content'>
            <MyComponent />
            <MyFunctionalComponent />
        </div>
    </div>
)

export default Layout