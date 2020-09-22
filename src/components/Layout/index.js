import React from 'react'
import {
    ExampleContent,
    Header,
    MainMenu,
} from '../'

import './Layout.scss'

const Layout = () => (
    <div id='layout'>
        <Header title="Zach&rsquo;s Site" />
        <div id='main-content'>
            <aside>
                <MainMenu />
            </aside>
            <main>
                <ExampleContent />
            </main>
        </div>
    </div>
)

export default Layout