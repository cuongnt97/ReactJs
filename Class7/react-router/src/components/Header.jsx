import React from 'react'

import { NavLink } from 'react-router-dom'


export default function Header() {
  return (
    <header className='header'>
        <div className='logo'>Logo</div>
        <nav className='nav'>
            <NavLink className='nav-link' to='.'>Home</NavLink>
            <NavLink className='nav-link' to='about'>About</NavLink>
            <NavLink className='nav-link' to='product'>Product</NavLink>
            <NavLink className='nav-link' to='checkout'>Checkout</NavLink>
            <NavLink className='nav-link' to='cart'>Cart</NavLink>
            <NavLink className='nav-link' to='blog'>Blog</NavLink>
            <NavLink className='nav-link' to='posts'>Posts</NavLink>
        </nav>
    </header>
  )
}
