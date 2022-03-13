import React, { useEffect } from 'react'
import {} from '@mui/material';
import { SearchRounded, ShoppingCartRounded } from '@mui/icons-material';
import DehazeIcon from '@mui/icons-material/Dehaze';

function Header() {
    useEffect(() => {
        const toggleMenu = document.querySelector(".toggleMenu");

        toggleMenu.addEventListener('click', ()=>{
            document.querySelector('.rightMenu').classList.toggle('active')
        })
    }, [])
  return (
   <header>
       <img src="https://imgur.com/Z1chdB6.png" alt="" className='logo'/>

       <div className='inputBox'>
            <SearchRounded className="searchIcon"/>
            <input type="text" placeholder="Search" />
       </div>

       <div className='shoppingCart' >
            <ShoppingCartRounded className="cart"/>   
            <div className='cart-content'>
                <p>2</p>
            </div>
        </div>

        <div className='profileContainer'>
            <div className='imgBox'>
                <img src="https://imgur.com/lkhOxSE.png" alt="" className='profilePic'/>    
        </div>

        <h2 className='userName'>Crosbie Ybarra</h2>
        </div>

        <div className='toggleMenu' >
            <DehazeIcon className="toggleIcon" />    
        </div>
   </header>
  )
}

export default Header
