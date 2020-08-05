import React from "react"
import Gatsby from "gatsby"
import avatar from './../images/avatar.png';
import githubIcon from './../images/icons/GitHub-Mark-Light-64px.png'

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
            <a href="https://github.com/ashkanfekridev/">
              <img src={githubIcon} alt="" className="icon-network-size-1" />
            </a>
          </div>
        </div>
    </div>
)
}

export default AboutMeBox
