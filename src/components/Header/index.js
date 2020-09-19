import React from 'react'
import './Header.scss'

const Header = ({ title = 'Website Name' }) => (
    <h1 id='header'>{title}</h1>
)

export default Header