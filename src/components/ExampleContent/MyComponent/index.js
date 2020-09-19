import React, { Component } from 'react'

import './MyComponent.scss'

class MyComponent extends Component {

    // constructor is optional
    constructor(props) {
        super(props)
        console.log('MyComponent props...\n', props)
    }
    
    // optional react component lifecycle events
    componentWillMount() {
        console.log('MyComponent will mount')
    }
    
    componentDidMount() {
        console.log('MyComponent did mount with props...', this.props)
    }

    // render is required
    render() {
        return (
            <div className='my-component'>MyComponent</div>
        )
    }
}

export default MyComponent