import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import spacing from '../styles/spacingConstants.js'
import "../styles/fonts.css"
import ImageCaption from '../components/bImageCaption'
import HeaderAndParagraphs from '../components/bHeaderAndParagraphs'
import "../styles/phoneSpacing.css"
import "../styles/tabletSpacing.css"
import "../styles/desktopSpacing.css"


export default function TextOnlyRow(props) {
  let { paragraphs, header } = props;
  return(
    <div className = {cx('row', styles.parentContainer)}>
      <div class = 'col-3'></div>
      <div class = 'col-4' style = {{paddingRight: 50 + 'px'}}>
        <HeaderAndParagraphs header = {header} paragraphs = {paragraphs}/>
      </div>
      <div class = 'col-5'></div>
    </div>
  )
}


const styles = {
  parentContainer:css`
    padding-top: 50px;
    padding-bottom: 50px;
    /* border-bottom: 1px solid red; */
  `
}
