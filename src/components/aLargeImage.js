import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import spacing from '../styles/spacingConstants.js'
import ImageCaption from '../components/bImageCaption'
import "../styles/fonts.css"
import "../styles/phoneSpacing.css"
import "../styles/tabletSpacing.css"
import "../styles/desktopSpacing.css"


export default function LargeImage(props) {
  let {imageUrl, caption} = props;
  return(
    <div className = {cx('row', styles.parentContainer)}>
      <div class = 'col-2'></div>
      <div class = 'col-8'>
        <img className = {styles.image} src = {imageUrl}/>
        {caption && <ImageCaption caption = {caption}/>}
      </div>
      <div class = 'col-2'></div>
    </div>
  )
}


const styles = {
  parentContainer:css`
    padding-top: 50px;
    padding-bottom: 50px;
    /* border-bottom: 1px solid red; */
  `,
  image:css`
    width: 100%;
  `,
}
