import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"


export default function ImageCaption(props) {
  let { caption, light } = props;
  return(
    <h6 className = {cx(styles.caption, light ? 'light' : null)}>{caption} <i style = {{color: 'rgb(150,150,150)'}} class="fas fa-level-up-alt"></i></h6>
  )
}


const styles = {
  caption:css`
    line-height: 100%;
    margin: 0;
    margin-top: 10px;
  `
}
