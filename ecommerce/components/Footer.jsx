import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>© 2023 Cool Headphones All rights reserved</p>
      <p className='icons'>
        <AiFillFacebook />
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer