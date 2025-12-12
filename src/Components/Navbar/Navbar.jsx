import React, { useRef, useState } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import image from  '../../assets/images.png'

const Navbar = () => {
  const [menu,setmenu] = useState('home');
   const menuRef=useRef();


   const openMenu=()=>{
    menuRef.current.style.right="0"
   }
      const closeMenu=()=>{
    menuRef.current.style.right="-350px"
   }
  return (
    <div className='navbar'>
       <i class="fa-solid fa-bars open-icon" onClick={openMenu}></i>     
      
      <h2>Nayab Mubashar</h2>

    <ul ref={menuRef} className='nav-menu'>
       <i class="fa-solid fa-xmark close-icon" onClick={closeMenu} ></i>

      <li className={menu==="home" ? "active" :""} > <AnchorLink className='anchor-link'  href='#home'> <p onClick={()=>setmenu("home")} > Home</p></AnchorLink></li>
         <li className={menu==="about"? "active" :""} > <AnchorLink className='anchor-link'offset={50} href='#about'><p onClick={()=>setmenu("about")} >About Me</p></AnchorLink></li>
            <li className={menu==="services"?"active" :""}> <AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setmenu("services")} >Services</p></AnchorLink> </li>
               <li className= {menu==="portfolio"?"active" :""} > <AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setmenu("portfolio")} >Portfolio</p></AnchorLink></li>
                  <li className= {menu==="contact"?"active" :""} > <AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setmenu("contact")} >Contact</p></AnchorLink></li>

    </ul>

      <div className="nav-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'> Connect With Me </AnchorLink></div>
    </div>
  );
};

export default Navbar;
