import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"
import spacing from '../styles/spacingConstants.js'

export default function CaseStudyTitle(props) {
  let { light, title, overlineText, isLeftAligned } = props;
  let alignment = isLeftAligned ? 'left' : 'center'
  const styles = {
    titleContainer:css`
      display: grid;
      grid-template-columns: ${spacing.desktop.largeMargin} auto ${spacing.desktop.largeMargin};
      margin-bottom: 50px;
      text-align: ${alignment};
    `,
    titleOverline:css`
      color: rgb(120,120,120);
      margin-bottom: 25px;
    `,
  }

  return(
    <div className = {styles.titleContainer}>
      <div class = 'spacer'></div>
        <div>
          {overlineText && <h5 className = {styles.titleOverline}>{overlineText}</h5>}
          <h1 className = {cx(light && 'light', styles.titleText)} style = {overlineText && {marginTop: 0}}>{title}</h1>
      </div>
      <div class = 'spacer'></div>
    </div>
  )
}
