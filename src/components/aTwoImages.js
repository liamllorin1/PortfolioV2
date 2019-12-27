import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import spacing from '../styles/spacingConstants.js'
import ImageCaption from '../components/bImageCaption'
import "../styles/fonts.css"
import "../styles/phoneSpacing.css"
import "../styles/tabletSpacing.css"
import "../styles/desktopSpacing.css"


export default function TwoImages(props) {
  let {imageUrls, captions, bottomPadding, topPadding} = props;
  let paddingBottom = 50;
  let paddingTop = 50;
  if (bottomPadding !== undefined) {
    paddingBottom = bottomPadding;
  }
  if (topPadding !== undefined) {
    paddingTop = topPadding;
  }

  return(
    <div className = {cx('row', styles.parentContainer)} style = {{['padding-bottom']: paddingBottom + 'px', ['padding-top']: paddingTop + 'px'}}>
      <div class = 'col-2'></div>
      <div class = 'col-4' style = {{paddingRight: 12.5 + 'px'}}>
        {imageUrls[0] &&
          <img className = {styles.image} src = {imageUrls[0]}/>}
        {captions[0] && <ImageCaption caption = {captions[0]}/>}
      </div>
      <div class = 'col-4' style = {{paddingLeft: 12.5 + 'px'}}>
        {imageUrls[1] &&
          <img className = {styles.image} src = {imageUrls[1]}/>}
        {captions[1] && <ImageCaption caption = {captions[1]} />}
      </div>
      <div class = 'col-2'></div>
    </div>
  )
}


const styles = {
  parentContainer:css`
    /* border-bottom: 1px solid red; */
  `,
  image:css`
    width: 100%;
  `,
}
