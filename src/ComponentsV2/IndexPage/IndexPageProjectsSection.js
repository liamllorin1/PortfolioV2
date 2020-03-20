import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "styles/styleConstants.js"
import "styles/fonts.css"
import "styles/phoneSpacing.css"
import "styles/tabletSpacing.css"
import "styles/desktopSpacing.css"
import songkickCover from "images/BackgroundSongkick.jpg"
import agyleCover from "images/BackgroundAgyle.jpg"
import IndexPageProjectSectionProjectBar from 'ComponentsV2/IndexPage/ProjectsSection/IndexPageProjectSectionProjectBar.js'

export default function IndexPageProjectsSection(props) {
  let {} = props;
  return(
    <>
      <div className = {'marginBottom2'}>
        <IndexPageProjectSectionProjectBar overline={'MOBILE'} title={'Songkick Redesign.'} underlayText = {'01'} image = {songkickCover} caseStudy = {'SongkickV2'} backgroundPosition = {'top'}/>
      </div>
      <div>
        <IndexPageProjectSectionProjectBar overline={'MOBILE'} title={'Agyle App Design.'} underlayText = {'02'} image = {agyleCover} caseStudy = {'AgyleV2'} backgroundPosition = {'top'}/>
      </div>
    </>
  )
}

const styles = {
}
