import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import spacing from '../styles/spacingConstants.js'
import "../styles/fonts.css"


export default function HeaderAndParagraphs(props) {
  let { paragraphs, header, light } = props;
  let headerOnly = false;
  if (paragraphs.length === 0) {
    headerOnly = true;
  }
  let styleHeader = {};
  return(
    <>
      {header && <h3 class = {light ? 'light' : null} style = {!headerOnly ? {marginBottom: '20px'} : {} }>{header}</h3>}
      {paragraphs && paragraphs.map((paragraph, index) => {
        let style = {};
        if (index === paragraphs.length - 1) {
          style = {marginBottom: 0};
        }
        return (
          <p style = {style} class = {light ? 'light' : null}>{paragraph}</p>
        )
      })}
    </>
  )
}


const styles = {
  parentContainer:css`
    padding-top: 50px;
    padding-bottom: 50px;
    border-bottom: 1px solid red;
  `,
}
