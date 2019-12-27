import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import spacing from '../styles/spacingConstants.js'
import "../styles/fonts.css"
import "../styles/phoneSpacing.css"
import "../styles/tabletSpacing.css"
import "../styles/desktopSpacing.css"


export default function VideoPhone(props) {
  let {source} = props;
  return(
    <div className = {cx('row', styles.parentContainer)}>
      <div class = 'col-4'></div>
      <div class = 'col-3' style = {{position: 'relative'}}>
        <video src = {source} controls  style = {{width: 100 + '%', outline: 'none'}}></video>
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
  `,
  image:css`
    width: 100%;
  `,
}
