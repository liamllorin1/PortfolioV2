import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "../../styles/styleConstants.js"
import "../../styles/fonts.css"
import "../../styles/phoneSpacing.css"
import "../../styles/tabletSpacing.css"
import "../../styles/desktopSpacing.css"
import FlexibleWrapper from 'ComponentsV2/AtomicComponents/FlexibleWrapper.js'


export default function Paragraph(props) {
  let { text } = props;

  return(
    <p className = {styles.todo}>{text}</p>
  )
}


const styles = {
  todo:css`
    display: none;
  `,
}
