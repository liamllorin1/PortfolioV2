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
  let { overline, title, image, caseStudy, underlayText, backgroundPosition } = props;
  const styles = {
    projectImage:css`
      background-image: url(${image});
      width: 100%;
      background-repeat: no-repeat;
      background-position: ${backgroundPosition};
      background-size: cover;
      height: 500px;
      position: absolute;
      bottom: 0px;
      right: 0px;
      border-radius: 10px;
      cursor: pointer;
    `,
    imageBack:css`
      background: linear-gradient(310deg, #61DEC7, ${styleConstants.darkBack0} 40%);
      width: calc(100%);
      height: 500px;
      position: relative;
      left: 10px;
      top: 10px;
      border-radius: 15px;
    `,
    imageContainer:css`
      position: relative;
    `,
    projectTitleContainer:css`
      position: relative;
    `,
    projectTitle:css`
      position: absolute;
      bottom: 0;
      left: 0;
    `,
  }
  return(
    <>
    <div className = {cx('row')}>
      <div className = {cx('col-1')}></div>
      <div className = {cx('col-6', styles.projectTitleContainer)}>
        <h1 className = {cx('lightDisabled')}>
          {underlayText}
        </h1>
        <h3 className = {cx('lightPrimary', 'marginTop4', styles.projectTitle)}>{title}</h3>
      </div>
    </div>
    <div className = {cx('row')}>
      <div className = {cx('col-1')}></div>
      <div className = {cx('col-6')}>
        <h6 className = {cx('darkAccent', 'marginTop6')}>Check it out <i class="fas fa-arrow-right"></i></h6>
      </div>
    </div>
    <div className = {cx('row')}>
      <div className = {cx('col-1')}></div>
      <div className = {cx('col-10', styles.imageContainer, 'marginTop4')}>
        <div className = {cx(styles.imageBack)}>
        </div>
        <Link to = {'/' + caseStudy + '/'}>
          <div className = {cx(styles.projectImage)}></div>
        </Link>
      </div>
    </div>
    </>
  )
}
