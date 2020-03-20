import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "../../styles/styleConstants.js"
import "../../styles/fonts.css"
import "../../styles/phoneSpacing.css"
import "../../styles/tabletSpacing.css"
import "../../styles/desktopSpacing.css"


export default function DevDesignTag(props) {
  let {} = props;
  return(
    <div className = {styles.tagContainer}>
      <h6 className = {cx('navText', 'lightTertiary')}>Designed + developed by Liam Llorin</h6>
    </div>
  )
}


const styles = {
  tagContainer:css`
    background-color: ${styleConstants.darkBack2};
    min-width: 10px;
    display:inline-block;
    padding: 15px;
  `
}
