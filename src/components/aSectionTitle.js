import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import spacing from '../styles/spacingConstants.js'
import "../styles/fonts.css"
import "../styles/phoneSpacing.css"
import "../styles/tabletSpacing.css"
import "../styles/desktopSpacing.css"


export default function SectionTitle(props) {
  let {title, titleCaption} = props;
  return(
    <div className = {cx('row', styles.parentContainer)}>
      <div class = 'col-2'></div>
      <div class = 'col-4'>
        <h2 className = {styles.title}>{title}</h2>
        <h4 className = {styles.titleCaption}>{titleCaption}</h4>
      </div>
      <div class = 'col-6'></div>
    </div>
  )
}


const styles = {
  parentContainer:css`
    padding-top: 150px;
    padding-bottom: 100px;
    /* border-bottom: 1px solid red; */
  `,
}
