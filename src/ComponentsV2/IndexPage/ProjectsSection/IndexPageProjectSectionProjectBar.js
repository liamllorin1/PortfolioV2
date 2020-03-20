import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "styles/styleConstants.js"
import profilePicture from "images/ProfilePictureWide.jpg"
import "styles/fonts.css"
import "styles/phoneSpacing.css"
import "styles/tabletSpacing.css"
import "styles/desktopSpacing.css"


export default function IndexPageProjectsSectionProjectBar(props) {
  let { overline, title, image } = props;
  const styles = {
    projectImage:css`
      background-image: url(${image});
      width: 100%;
      background-repeat: no-repeat;
      background-position: top;
      background-size: cover;
      height: 250px;
      position: absolute;
      top: -10px;
      right: 10px;
    `,
    imageBack:css`
      background: linear-gradient(310deg, #61DEC7, #201C24 40%);
      width: calc(100% + 20px);
      height: 250px;
      position: relative;
      right: -10px;
      top: 10px;
    `,
  }
  return(
    <div className = {cx('row')}>
      <div className = {cx('col-1')}></div>
      <div className = {cx('col-2')}>
        <h6 className = {cx('overline', 'lightDisabled')}>{overline}</h6>
        <h4 className = {cx('lightPrimary')}>{title}</h4>
        <h6 className = {cx('darkAccent', 'marginTop6')}>Check it out <i class="fas fa-arrow-right"></i></h6>
      </div>
      <div className = {cx('col-1')}></div>
      <div className = {cx('col-7')}>
        <div className = {cx(styles.imageBack)}>
          <div className = {cx(styles.projectImage)}></div>
        </div>
      </div>
    </div>
  )
}
