import React from "react"
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

export default function IndexPageProjectsSection(props) {
  let {} = props;
  return(
    <>
      <div className = {'marginBottom2'}>
        <IndexPageProjectSectionProjectBar overline={'MOBILE'} title={'Songkick Redesign.'} image = {songkickCover}/>
      </div>
      <div>
        <IndexPageProjectSectionProjectBar overline={'MOBILE'} title={'Agyle App Design.'} image = {fooBack}/>
      </div>
    </>
  )
}

const styles = {
}
