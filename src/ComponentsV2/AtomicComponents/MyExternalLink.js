import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "styles/styleConstants.js"
import "styles/fonts.css"
import "styles/phoneSpacing.css"
import "styles/tabletSpacing.css"
import "styles/desktopSpacing.css"


export default function MyExternalLink(props) {
  let {url, textColorClass, isDarkTheme, children} = props;

  const styles = {
    link:css`
      text-decoration: none;
      cursor: pointer;
    `,
    linkDark:css`
      border-bottom: ${styleConstants.darkAccent} 0.125em solid;
    `,
    linkLight:css`
      border-bottom: ${styleConstants.lightAccent} 0.125em solid;
    `
  }

  return(
    <a target = '_blank' href = {url} className = {cx(styles.link, textColorClass, isDarkTheme ? styles.linkDark : styles.linkLight)}>{children}</a>
  )
}
