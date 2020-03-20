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
    </div>
  )
}

const styles = {
  headingContainer:css`
    background: linear-gradient(180deg, ${styleConstants.darkBack1}, ${styleConstants.darkBack0});
    position: relative;
    width: 100%;
    height: 200px;
  `,

}
