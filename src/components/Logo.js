import React from 'react';
import logo from './../assets/img/logo.png';

export default function Menu() {
   return(
      <a href='/'>
         <img 
            alt='OQV?' 
            className='logo' 
            src={ logo } 
         />
      </a>
   )
}