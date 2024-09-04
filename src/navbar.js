import React from 'react'
import globe from './globe.png'


export default function Navbar() {
    return (
        <nav>
        <img src={globe} alt="logo" />
        <h1 className='nav--title'>my travel journal.</h1>
    </nav>
    )
}