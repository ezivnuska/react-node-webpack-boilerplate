import React from 'react'

import './MyFunctionalComponent.scss'

const MyFunctionalComponent = () => {
    
    const onButtonClick = e => {
        e.preventDefault()
        alert('button clicked!')
    }
    
    return (
        <div
            className='my-functional-component'
            onClick={e => onButtonClick(e)}
        >
            MyFunctionalComponent
        </div>
    )
}

export default MyFunctionalComponent