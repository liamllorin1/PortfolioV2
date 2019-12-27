import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "styles/styleConstants.js"
import "styles/fonts.css"
import "styles/phoneSpacing.css"
import "styles/tabletSpacing.css"
import "styles/desktopSpacing.css"


export default function IndexPageProjectsSectionHeader(props) {
  let {} = props;
  return(
    <div className = {cx(styles.headingContainer)}>
      <div className = {cx('row', styles.titleContainer)}>
        <div className = {'col-3'}></div>
        <div className = {'col-8'}>
          <h1 className = {cx('lightPrimary', 'rightAlign', 'marginTop2', 'marginBottom2')}>My Projects.</h1>
        </div>
        <div className = {'col-1'}></div>
      </div>
      <div className = {cx(styles.bottomHalfBack)}></div>
    </div>
  )
}

const styles = {
  headingContainer:css`
    background-color: ${styleConstants.darkBack1};
    position: relative;
    position: relative;
    width: 100%;
    height: 100%;
  `,
  titleContainer:css`
    position: relative;
    z-index: 100;
    padding-left: ${styleConstants.desktopMargin}px;
    padding-right: ${styleConstants.desktopMargin}px;
  `,
  bottomHalfBack:css`
    background-color: ${styleConstants.darkBack2};
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 50%;
    z-index: 0;
  `,
}
