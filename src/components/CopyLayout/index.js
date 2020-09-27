import React, { Component } from 'react'

import './CopyLayout.scss'

class CopyLayout extends Component {

    constructor(props) {
        super(props)

        this.state = {
            menuIsOpen: false,
        }
    }

    toggleMenu() {
        this.setState({ menuIsOpen: !this.state.menuIsOpen })
    }

    render() {
        const { menuIsOpen } = this.state
        return (
            <div id='copy-layout'>
                <header>HEADER</header>
                <main>
                    <aside className={menuIsOpen ? 'open' : ''}>
                        <button onClick={() => this.toggleMenu()}>
                            {menuIsOpen ? 'O' : 'X'}
                        </button>
                    </aside>
                    <section>
                        Some content...
                    </section>
                </main>
                <footer>FOOTER</footer>
            </div>
        )
    }
}

export default CopyLayout