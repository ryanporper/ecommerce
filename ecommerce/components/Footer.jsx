import React from 'react';

import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook, AiFillMail, AiFillPhone} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Contact Us</p>
      <a href="mailto:e-electronics@ee.com"><AiFillMail /> e-electronics@ee.com</a>
      <a href="tel:1234567890"><AiFillPhone /> (123)-456-7890</a>
      <p className="icons">
        <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer"><AiFillFacebook /></a>
        <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer"><AiFillInstagram /></a>
        <a href='https://twitter.com/' target="_blank" rel="noopener noreferrer"><AiOutlineTwitter /></a>
      </p>
      <p>© 2023 E's Electronics All rights reserverd</p>
    </div>
  )
}

export default Footer