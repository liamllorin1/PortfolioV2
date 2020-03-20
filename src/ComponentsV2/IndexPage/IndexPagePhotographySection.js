import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "styles/styleConstants.js"
import "styles/fonts.css"
import "styles/phoneSpacing.css"
import "styles/tabletSpacing.css"
import "styles/desktopSpacing.css"
import songkickCover from "images/BackgroundSongkick.jpg"
import fooBack from "images/fooBack.png"
import IndexPageProjectSectionProjectBar from 'ComponentsV2/IndexPage/ProjectsSection/IndexPageProjectSectionProjectBar.js'

export default function IndexPagePhotographySection(props) {
  let {} = props;
  const [topOfTitle, setTopOfTitle] = useState(0);
  useEffect(() => {
    // Update the document title using the browser API
    const titleElem = document.getElementById('title');
    const titleWidth = titleElem.clientWidth;
    setTopOfTitle(titleWidth);
  });

  const styles = {
    photographySectionContainer:css`
      background-color: ${styleConstants.darkBack1};
      padding-top: 150px;
      min-height: 100vh;
    `,
    titleContainer:css`
      position: relative;
    `,
    photographyTitle:css`
      text-align: right;
      position: absolute;
      left: 0;
      top: ${topOfTitle}px;
      transform-origin: 0 0;
      -webkit-transform: rotate(-90deg);
      -ms-transform: rotate(-90deg);
      transform: rotate(-90deg);
    `
  }
  console.log('hey: ', topOfTitle);
  return(
    <div className = {styles.photographySectionContainer}>
      <div className = {cx('row')}>
        <div className = {cx('col-1')}></div>
        <div className = {cx('col-2', styles.titleContainer)}>
          <h1 id = 'title' className = {cx('lightSecondary', styles.photographyTitle)}>Photography.</h1>
        </div>
      </div>
    </div>
  )
}
