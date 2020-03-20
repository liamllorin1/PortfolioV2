import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "styles/styleConstants.js"
import CaseStudyHeroImage from "ComponentsV2/CasestudyPage/CaseStudyHeroImage.js"
import "styles/fonts.css"
import "styles/phoneSpacing.css"
import "styles/tabletSpacing.css"
import "styles/desktopSpacing.css"


export default function CaseStudyTopSection(props) {
  let { overline, title, image, description } = props;
  return(
    <div className = {cx(styles.entireTopSection)}>
      <div className = {cx(styles.topSection)}>
        <div className = {cx('row')}>
          <div className = {cx('col-8')}></div>
          <div className = {cx('col-3')}>
            <Link to = {'/'} style={{ textDecoration: 'none' }}>
              <h6 className = {cx('darkAccent', 'rightAlign')}><i className="fas fa-arrow-left"></i> Home</h6>
            </Link>
          </div>
          <div className = {cx('col-1')}></div>
        </div>
        <div className = {cx('row')}>
          <div className = {cx('col-1')}></div>
          <div className = {cx('col-7')}>
            <h6 className = {cx('overline', 'lightDisabled', 'marginTop3')}>
              {overline}
            </h6>
            <h1 className = {cx('lightPrimary')}>
              {title}
            </h1>
          </div>
        </div>
      </div>
      <CaseStudyHeroImage description = {description} image = {image}/>
    </div>
  )
}


const styles = {
  entireTopSection:css`
    background-color: ${styleConstants.darkBack0};
  `,
  topSection:css`
    padding-top: 50px;
    padding-left: ${styleConstants.desktopMargin}px;
    padding-right: ${styleConstants.desktopMargin}px;
  `,
}
