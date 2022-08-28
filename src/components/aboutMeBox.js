import React from "react"
import Gatsby from "gatsby"
import avatar from './../images/avatar.png';
import githubIcon from './../images/icons/GitHub-Mark-Light-64px.png'
import phoneIcon from './../images/icons/phone-light.png'
import instagramIcon from './../images/icons/instagram-light.png'

const AboutMeBox = () => {
  return (
    <div id="box-about_me" className="flex flex-column justify-content-center text-center p-2">
      <img src={avatar} alt="" className="avatar-image mh-auto" />
        <div className="box-about-me_content_container">
          <h2 className="color-white">سلام، اشکان فکری هستم</h2>
          <p className="color-light">من برنامه نویس فول استک و توسعه دهنده نرم افزار هستم</p>
        </div>
        <div className="mt-2">
          <h4 className="color-white">من رو میتونی از اینجاها پیدا کنی :)</h4>
          <div className="flex mt-1 icon-network_row">
          <a href="https://github.com/ashkanfekridev/" target={'_blank'}>
              <img src={githubIcon} alt="github link" className="icon-network-size-1" />
            </a>
            <a href="tel:09116169846">
              <img src={phoneIcon} alt="mobile number" className="icon-network-size-1" />
            </a>
            <a href="https://instagram.com/ashkanfekridev" target={'_blank'}>
              <img src={instagramIcon} alt="mobile number" className="icon-network-size-1" />
            </a>
          </div>
        </div>
    </div>
)
}

export default AboutMeBox
