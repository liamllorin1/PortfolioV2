import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import spacing from '../styles/spacingConstants.js'
import "../styles/fonts.css"
import "../styles/phoneSpacing.css"
import "../styles/tabletSpacing.css"
import "../styles/desktopSpacing.css"


export default function SubSectionHeader(props) {
  let {header} = props;
  return(
    <div className = {cx('row', styles.parentContainer)}>
      <div class = 'col-2'></div>
      <div class = 'col-1' style = {{position: 'relative'}}>
        <h5 className = {styles.header}>{header}</h5>
        <div className = {styles.rectangle}></div>
      </div>
      <div class = 'col-9'></div>
    </div>
  )
}


const styles = {
  parentContainer:css`
    padding-top: 100px;
    /* border-bottom: 1px solid red; */
  `,
  header:css`
    margin-bottom: 0;
  `,
  rectangle:css`
    width: 30px;
    height: 5px;
    background-color: rgb(30, 30, 30);
    margin: 0;
    margin-top: 3px;
  `
}
