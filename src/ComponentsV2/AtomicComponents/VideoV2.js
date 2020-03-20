import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "../../styles/styleConstants.js"
import "../../styles/fonts.css"
import "../../styles/phoneSpacing.css"
import "../../styles/tabletSpacing.css"
import "../../styles/desktopSpacing.css"
import FlexibleWrapper from 'ComponentsV2/AtomicComponents/FlexibleWrapper.js'
import $ from 'jquery';


export default function VideoV2(props) {
  let { source, isLarge = false, caption } = props;

  return(
    <>
      <div className = {cx('row', 'marginTop4')}>
        <div className = {isLarge ? 'col-2' : 'col-4'}></div>
        <div className = {cx(isLarge ? 'col-8' : 'col-4', styles.videoContainer)}>
          <video src = {source} controls  className = {cx(styles.video)}></video>
        </div>
      </div>
      <div className = {cx('row', 'marginTop8')}>
        <div className = {'col-2'}></div>
        <div className = {cx('col-8')}>
          <h6 className = {cx('centerAlign', 'caption', 'darkPrimary', 'marginTop7')}>
            {caption}
          </h6>
        </div>
      </div>
    </>
  )
}


const styles = {
    videoContainer:css`
      position: relative;
      padding-right: 50px;
      padding-left: 50px;
    `,
    video:css`
      width: 100%;
      outline: none;
      display: block;
    `,
}
