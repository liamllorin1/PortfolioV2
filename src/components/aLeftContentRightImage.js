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


export default function LeftContentRightImage(props) {
  let { imageUrl, caption, header, paragraphs } = props;
  return(
    <div className = {cx('row', styles.parentContainer)}>
      <div class = 'col-2'></div>
      <div class = 'col-3'>
        <div className = {styles.contentContainer}>
          <HeaderAndParagraphs header = {header} paragraphs = {paragraphs}/>
        </div>
      </div>
      <div class = 'col-5'>
        <img className = {styles.image} src = {imageUrl} />
        {caption && <ImageCaption caption = {caption}/>}
      </div>
      <div class = 'col-2'></div>
    </div>
  )
}


const styles = {
  parentContainer:css`
    padding-top: 100px;
    padding-bottom: 100px;
    /* border-bottom: 1px solid red; */
  `,
  image:css`
    width: 100%;
  `,
  contentContainer:css`
    /* border: 1px solid red; */
    margin-right: 50px;
  `
}
