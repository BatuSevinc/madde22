import React from 'react'
import {NavLink} from 'react-router-dom';
const NavigationLeft = () => {

  return (
    <div className='navLinks container'>
      <div>
    <NavLink to='/'>Tüm Etkinlikler</NavLink>
    <NavLink to='/tiyatro'>Tiyatro</NavLink>
    <NavLink to='/konser'>Konser</NavLink>
    </div>
    <div>
    <NavLink to='/standUp'>Stand Up</NavLink>
    <NavLink to='/sinema'>Sinema</NavLink>
    <NavLink to='/cocuk'>Çocuk</NavLink>
    </div>
    </div>
  )
}

export default NavigationLeft;