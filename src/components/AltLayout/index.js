import React, { Component } from 'react'

import './AltLayout.scss'

class AltLayout extends Component {

    constructor(props) {
        super(props)

        this.state = {
            menuIsOpen: false,
        }
    }

    toggleMenu() {
        const aside = document.getElementById('aside')
        const isOpen = aside.classList.contains('open')
        if (isOpen) {
            aside.classList.remove('open')
        } else {
            aside.classList.add('open')
        }
        this.setState({ menuIsopen: !this.state.menuIsOpen })
    }
    
    render() {
        const { menuIsOpen } = this.state
        return (
            <div id='alt-layout'>
                <header>
                    <button onClick={e => this.toggleMenu()}>Menu</button>
                </header>
                <div id='main-content'>
                    <aside id='aside'>
                        <ul id='menu' className={(menuIsOpen ? 'open' : '')}>
                            <li>
                                <a href='/'>One</a>
                            </li>
                            <li>
                                <a href='/'>Two</a>
                            </li>
                            <li>
                                <a href='/'>Three</a>
                            </li>
                        </ul>
                    </aside>
                    <main>
                        <div className='section'>
                            Content
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}

export default AltLayout