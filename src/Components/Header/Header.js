import './HeaderStyles.css'
import React, { useState } from 'react'
import logo from '../../Images/logo.png'
import { Link } from 'react-router-dom'


const Header = () => {
  const[state, setState] = useState(true)

  const handleClick = ()=>{
    setState(!state)
    
  }

  return (
    <div className='header-container'>
        <header>
            <div className="logo-container">
              <div className='logo-img'>
                <img src={logo} alt="Logo" className='logo'/>
              </div>
              <div className='logo-name'>
                <p>MUSEUMVERSE</p>
              </div>
            </div>

            <div id='navigations' className={state? '#navigations active':'#navigations'} onClick={handleClick}>
                <Link to='/' className='active'> <i className='fas fa-house'></i> Home</Link>
                <Link to='/artifacts'> <i className='fas fa-robot'></i> Artifacts</Link>
                <Link to = '/shop'> <i className='fas fa-shop'></i> Shop</Link>
                <Link to = '/about'> <i className='fas fa-circle-info'></i> About</Link>
            </div>

            <div className='bars' onClick={handleClick}>
              <i className={state? 'fas fa-times': 'fas fa-bars'}></i>
            </div>
        </header>
    </div>
  )
}

export default Header