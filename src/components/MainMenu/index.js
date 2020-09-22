import React, { Component } from 'react'

import './MainMenu.scss'

class MainMenu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            buttons: [
                { label: 'Home', path: '/' },
                { label: 'I-Ching', path: '/i-ching' },
                { label: 'Server Monitor', path: '/server-monitor' },
                { label: 'About', path: '/about' },
                { label: 'Contact', path: '/contact' },
            ],
        }
    }

    render() {
        const { buttons } = this.state

        return (
            <ul id='main-menu'>
                {buttons.map(({ label, path }, index) => (
                    <li key={index}>
                        <a
                            href={path}
                            className='main-menu-button'
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        )
    }
}

export default MainMenu