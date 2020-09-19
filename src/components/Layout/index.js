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
            <p>These two components are, basically, the same.</p>
            <p>
                The difference is that
                <br />
                one is a functional component (a function)
                <br />
                and the other is a class component (React)
                <br />
                that uses built-in lifecycle events.
            </p>
            <MyComponent />
            <MyFunctionalComponent />
        </div>
    </div>
)

export default Layout