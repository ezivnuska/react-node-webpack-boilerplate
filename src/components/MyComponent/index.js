import React, { Component } from 'react'

class MyComponent extends Component {

    // constructor is optional
    constructor(props) {
        super(props)
        console.log('MyComponent props...\n', props)
    }

    componentWillMount() {
        console.log('MyComponent will mount')
    }
    
    componentDidMount() {
        console.log('MyComponent did mount with props...', this.props)
    }

    render() {
        return (
            <div className='my-component'>MyComponent</div>
        )
    }
}

export default MyComponent