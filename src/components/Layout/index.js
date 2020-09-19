import React from 'react'
import {
    Header,
    ExampleContent,
} from '../'

import './Layout.scss'

const Layout = () => (
    <div id='layout'>
        <Header title="Zach&rsquo;s Site" />
        <div id='main-content'>
            <ExampleContent />
        </div>
    </div>
)

export default Layout