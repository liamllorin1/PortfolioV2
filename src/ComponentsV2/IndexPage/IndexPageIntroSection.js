import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "../../styles/styleConstants.js"
import IndexPageIntroSectionMainContent from './IntroSection/IndexPageIntroSectionMainContent.js'
import IndexPageIntroSectionTopBar from './IntroSection/IndexPageIntroSectionTopBar.js'
import "../../styles/fonts.css"
import "../../styles/phoneSpacing.css"
import "../../styles/tabletSpacing.css"
import "../../styles/desktopSpacing.css"


export default function IndexPageIntroSection(props) {
  let {} = props;
  return(
    <div className = {styles.introSectionContainer}>
      <IndexPageIntroSectionTopBar/>
      <IndexPageIntroSectionMainContent/>
    </div>
  )
}

const styles = {
  introSectionContainer:css`
    padding-top: 25px;
  `
}
