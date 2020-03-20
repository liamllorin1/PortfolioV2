import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "styles/styleConstants.js"
import profilePicture from "images/ProfilePictureWide.jpg"
import "styles/fonts.css"
import "styles/phoneSpacing.css"
import "styles/tabletSpacing.css"
import "styles/desktopSpacing.css"
import IndexPageIntroSectionMainContentTextContent from "./IndexPageIntroSectionMainContentTextContent.js"


export default function IndexPageIntroSectionMainContent(props) {
  let {} = props;
  return(
    <div className = {cx(styles.mainContentContainer)}>
      <div className = {cx(styles.textContentContainer)}>
        <IndexPageIntroSectionMainContentTextContent/>
      </div>
      <div className = {cx(styles.imageContentContainer)}>
      <div className = {cx('row')}>
        <div className = {'col-5'}></div>
        <div className = {'col-6'} style = {{position: 'relative'}}>
          <div className = {cx('marginTop2', styles.imageBack)}>
            <img src={profilePicture} className = {cx(styles.profilePicture)}/>
            <div className = {cx(styles.imageOverlay)}></div>
          </div>
        </div>
        <div className = {'col-1'}></div>
      </div>
      </div>
    </div>
  )
}


const styles = {
  imageBack:css`
    background: linear-gradient(305deg, #61DEC7, #0E0912 40%);
    position: relative;
    left: 10px;
    top: 10px;
    border-radius: 15px;
  `,
  imageOverlay:css`
    background: linear-gradient(90deg, rgba(14, 9, 18,.84), rgba(14, 9, 18,0.0) 35%);
    width: 100%;
    height: 100%;
    position: absolute;
    top: -10px;
    right: 10px;
    border-radius: 10px;
  `,
  mainContentContainer:css`
    position: relative;
  `,
  textContentContainer:css`
    position: relative;
    z-index: 100;
  `,
  imageContentContainer:css`
    position: absolute;
    top: 0;
    z-index: 0;
  `,
  profilePicture:css`
    width: 100%;
    display: block;
    top: -10px;
    right: 10px;
    position: relative;
    border-radius: 15px;
  `
}
