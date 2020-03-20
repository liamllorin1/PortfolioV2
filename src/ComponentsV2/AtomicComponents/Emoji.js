import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "../../styles/styleConstants.js"
import "../../styles/fonts.css"
import "../../styles/phoneSpacing.css"
import "../../styles/tabletSpacing.css"
import "../../styles/desktopSpacing.css"


export default function Emoji(props) {
  let { symbol } = props;

  return(
    <span
        className={cx('emoji', styles.emoji)}
        role="img"
    >
        {symbol}
    </span>
  )
}


const styles = {
  emoji:css`
    font-size: 27px;
  `
}
