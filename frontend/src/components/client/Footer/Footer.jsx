import React from 'react'
import Playstore from "../../../images/Playstore1.png"
import aapStore from "../../../images/aapStore1.png"
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <footer id="Footer">
        <div className="leftFooter">
            <h4>DOWNLOAD OUR APP</h4>
            <p>Download App for Android and mobile phone</p>
            <img src={Playstore} alt="playstore" />
            <img src={aapStore} alt="Appstore" />
        </div>

        <div className="midFooter">
             <h1>ECOMMERCE.</h1>
             <p>High Quality is our priority</p>
            <p>Copyright 2023 &copy; RajmalVarma</p>
        </div>

        <div className="rightFooter">
            <h4>Follow Us</h4>
            <a href="#..">Instagram</a>
            <a href="#..">Youtube</a>
            <a href="#..">Facebook</a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
