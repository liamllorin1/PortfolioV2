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

export default function IndividualProcessSection(props) {
  let { children, id } = props;
  return(
    <section id = {id}>
      {children}
    </section>
  )
}

const styles = {
}
