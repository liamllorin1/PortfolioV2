import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "styles/styleConstants.js"
import "styles/fonts.css"
import "styles/phoneSpacing.css"
import "styles/tabletSpacing.css"
import "styles/desktopSpacing.css"


export default function CaseStudyHeroImage(props) {
  let { description, image } = props;
  return (
    <>
    <div className = {cx(styles.imageContainer, 'marginTop3')}>
      <div className = {cx('row', styles.imageRow)}>
        <div className = {cx('col-1')}></div>
        <div className = {cx('col-10', styles.imageParent)}>
          <div className = {cx(styles.imageBack)}></div>
          <img src={image} className = {cx(styles.heroImage)}/>
        </div>
      </div>
      <div className = {cx(styles.whiteBack)}></div>
    </div>
    <div className = {cx(styles.captionRow, 'row')}>
      <div className = {cx('col-3')}></div>
      <div className = {cx('col-6')}>
        <p className = {cx('p1', 'darkPrimary', 'centerAlign', 'marginTop4')}>{description} </p>
      </div>
      <div className = {cx('col-3')}></div>
    </div>
    </>
  )
}


const styles = {
  imageRow:css`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 100;
    padding-left: ${styleConstants.desktopMargin}px;
    padding-right: ${styleConstants.desktopMargin}px;
    box-sizing: border-box;
  `,
  imageParent:css`
    position: relative;
  `,
  imageBack:css`
    background: linear-gradient(270deg, ${styleConstants.darkAccent}, ${styleConstants.darkBack0} 70%);
    position: absolute;
    height: calc(50% + 10px);
    width: 100%;
    left: 10px;
    bottom: 50%;
    border-top-right-radius: 15px;
    z-index: 0;
  `,
  imageContainer:css`
    position: relative;
    width: 100%;
    height: 100%;
  `,
  heroImage:css`
    width: 100%;
    border-radius: 10px;
    position: relative;
    display: block;
    top: 0px;
    right: 0px;
  `,
  whiteBack:css`
    position: absolute;
    height: 50%;
    width: 100%;
    background-color: ${styleConstants.lightBack1};
    bottom: 0;
    z-index: 0;
  `,
  captionRow:css`
    background-color: ${styleConstants.lightBack1};
    padding-left: ${styleConstants.desktopMargin}px;
    padding-right: ${styleConstants.desktopMargin}px;
  `,
}
