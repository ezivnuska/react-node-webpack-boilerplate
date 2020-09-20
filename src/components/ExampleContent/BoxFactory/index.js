import React, { Component } from 'react'

import './BoxFactory.scss'

class BoxFactory extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            numBoxes: 0,
        }
    }

    addBox = e => {
        e.preventDefault()
        const boxContainer = document.getElementById('box-container')
        const box = document.createElement('div')
        box.className = 'box'
        box.innerHTML = boxContainer.childElementCount + 1
        boxContainer.appendChild(box)
        console.log('boxContainer.childElementCount', boxContainer.childElementCount)
        this.setState({ numBoxes: boxContainer.childElementCount })
    }

    removeLastBox = e => {
        e.preventDefault()
        const boxContainer = document.getElementById('box-container')
        if (boxContainer.hasChildNodes) {
            boxContainer.removeChild(boxContainer.lastChild)
            this.setState({ numBoxes: boxContainer.childElementCount })
        }
    }

    render() {
        const { numBoxes } = this.state
        return (
            <div id='box-factory'>
                <div id='box-factory-controls'>
                    <button onClick={e => this.addBox(e)}>Add Box</button>
                    {numBoxes !== 0 && <button onClick={e => this.removeLastBox(e)}>Remove Last Box</button>}
                </div>
                <div id='box-container'></div>
            </div>
        )
    }
}

export default BoxFactory