import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "../../styles/styleConstants.js"
import "../../styles/fonts.css"
import "../../styles/phoneSpacing.css"
import "../../styles/tabletSpacing.css"
import "../../styles/desktopSpacing.css"


export default function FlexibleWrapper(props) {
  let { marginTopClass, children } = props;
  return(
    <div className = {cx(marginTopClass)}>
      {children}
    </div>
  )
}


const styles = {
}
