import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import spacing from '../styles/spacingConstants.js'
import "../styles/fonts.css"
import "../styles/phoneSpacing.css"
import "../styles/tabletSpacing.css"
import "../styles/desktopSpacing.css"


export default function PageTitle(props) {
  let { category, title, light } = props;
  return(
    <div className = {cx('row', styles.parentContainer)}>
      <div class = 'col-4'></div>
      <div class = 'col-4'>
        <h5 className = {cx(styles.overline, light ? 'light' : null)}>{category}</h5>
        <h1 className = {cx(styles.title, light ? 'light' : null)}>{title}</h1>
      </div>
      <div class = 'col-4'></div>
    </div>
  )
}


const styles = {
  parentContainer:css`
    padding-top: 150px;
    padding-bottom: 50px;
    /* border-bottom: 1px solid red; */
  `,
  overline:css`
    text-align: center;
    line-height: 100%;
  `,
  title:css`
    text-align: center;
  `
}
