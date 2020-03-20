import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "../../styles/styleConstants.js"
import "../../styles/fonts.css"
import "../../styles/phoneSpacing.css"
import "../../styles/tabletSpacing.css"
import "../../styles/desktopSpacing.css"


export default function SecondaryHeading(props) {
  let { heading, id } = props;
  return(
    <div className = {cx('row', 'marginTop4')}>
      <div className = {cx('col-3')}></div>
      <div className = {cx('col-5')} id = {id ? id : null}>
        <h4 className = {cx('darkPrimary')}>
          {heading}
        </h4>
      </div>
    </div>
  )
}


const styles = {
}
