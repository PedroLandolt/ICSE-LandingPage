import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import { IconContext } from 'react-icons/lib'

function Navbar() {

  const [click, setClick] = React.useState(false)
  const [button, setButton] = React.useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) setButton(false)
    else setButton(true)
  }

  window.addEventListener('resize', showButton)

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <img src='images/logo-3.png' alt='logo' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <i className='fas fa-times' /> : <i className='fas fa-bars' />}
            </div>
            <ul className={click ? 'navbar-menu active' : 'navbar-menu'}>
              <li className='navbar-btn'>
                {
                  button ? (
                    <Link to='https://www.google.com' className='btn-link'>
                      <Button buttonStyle='btn--outline' buttonColor='transparent' >REGISTER</Button>
                    </Link>
                  ) : (
                    <Link to='https://www.google.com' className='btn-link' onClick={closeMobileMenu}>
                      <Button buttonStyle='btn--outline' buttonColor='transparent' buttonSize='btn--mobile' >REGISTER</Button>
                    </Link>
                  )
                }
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
}

export default Navbar