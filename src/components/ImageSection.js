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
  height: calc(100vh - 300px);
  box-sizing: border-box;
  margin: 150px 0;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  `,
}
