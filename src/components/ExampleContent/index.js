import React from 'react'
import MyComponent from './MyComponent'
import MyFunctionalComponent from './MyFunctionalComponent'

const ExampleContent = () => (
    <div id='example-content'>
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
)

export default ExampleContent