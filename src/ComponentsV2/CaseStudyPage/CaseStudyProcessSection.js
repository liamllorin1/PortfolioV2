import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "styles/styleConstants.js"
import "styles/fonts.css"
import "styles/phoneSpacing.css"
import "styles/tabletSpacing.css"
import "styles/desktopSpacing.css"
import songkickCover from "images/BackgroundSongkick.jpg"
import fooBack from "images/fooBack.png"

export default function CaseStudyProcessSection(props) {
  let { children } = props;
  return(
    <div className = {cx(styles.processSection)}>
      {children}
    </div>
  )
}

const styles = {
  processSection:css`
    background-color: ${styleConstants.lightBack1};
    padding-left: ${styleConstants.desktopMargin}px;
    padding-right: ${styleConstants.desktopMargin}px;
    padding-top: 150px;
    padding-bottom: 150px;
  `,
}
