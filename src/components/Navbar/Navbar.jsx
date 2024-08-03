import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <>
      <section className='navbar'>
        <img src="https://cc-prod.scene7.com/is/image/CCProdAuthor/mascot-logo-design_P1_900x420?$pjpeg$&jpegSize=200&wid=900" alt="" width={100} height={50} />
        <ul className='menus'>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About Us</a></li>
          <li><a href='#'>About Us</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
        <div className='button'>
          <a href='#'>Call to action</a>
        </div>
      </section>
    </>
  )
}

export default Navbar