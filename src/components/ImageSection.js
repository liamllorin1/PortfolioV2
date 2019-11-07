import React, { useState } from "react"
import { css, cx } from 'emotion'

export default function ImageSection(props) {
  let { backgroundImg } = props;
  return (
    <div className = {styles.imageContainer} style = {{backgroundImage: 'url(' + backgroundImg + ')'}}></div>
  )
}


const styles = {
  imageContainer:css`
  height: min-content;
  box-sizing: border-box;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  `,
}
