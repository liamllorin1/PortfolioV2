import React, { useState, useEffect } from "react"
import { Link, navigate } from "gatsby"
import { css, cx } from 'emotion'
import Footer from '../components/Footer'
import ButtonBold from '../components/ButtonBold'
import spacing from '../styles/spacingConstants.js'
import "../styles/phoneSpacing.css"
import "../styles/tabletSpacing.css"
import "../styles/desktopSpacing.css"


export default function ImageView({location}) {
  //TODO HERE - why is it not working on "gatsby build"
  // let source = null;
  // useEffect(() => {
  //   source = props.location.state.imgSrc
  // });
  const { state = {} } = location
  const { imgSrc } = state
  return imgSrc ? (
      <img src = {imgSrc} className = {styles.displayedImage}/>
  ) : (
    <h1>Image Loading</h1>
  )
}

const styles = {
  displayedImage:css`
    width: 100vw;
  `
}
