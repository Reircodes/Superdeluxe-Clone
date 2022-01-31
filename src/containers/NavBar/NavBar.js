import React, {useState} from 'react';
import './NavBar.css'
import Button from '@material-ui/core/Button'
// import { HamburgerIcon } from 'react-hamburger-icon';
import { Divide as Hamburger } from 'hamburger-react'
import { Logo,NavBarItems} from '../../components/index'

const NavBar = () => {
    const [toggle , setToggle] = useState(false)

    const changeToggle = () => {
       setToggle(true)
      console.log('1')

      if(toggle){
         setToggle(false)
      }
    }

  return <section className="navbar">
      <div className="navbar__container">

          <div className="navbar__container-hamburger">
              <Hamburger size={25} onToggle={changeToggle}/>
              {toggle ? <div className={`navbar__container-items small__screen ${toggle ? 'scale-up-top' : ''}`}>
                 <NavBarItems/>
              </div>   : ''
              }
          </div>
        
 
  <div className="">
                <Logo/>
            </div>
        
                <div className="navbar__container-items big__screen">
                <NavBarItems/>
             </div> 
          
            <div className="">
            <Button>Request a Quote</Button>
            </div>
 
      </div>
  </section>;
};

export default NavBar;
