import React, { useState } from "react"
import { css, cx } from 'emotion'
import logoImage from '../images/InvertedPendulumLogo/mainLogoDark.jpg'
import automataImage from '../images/leverSystem.jpg'

export default function MESectionImage() {

  return (
    <div className = {styles.MESectionContainer}>
      <div className = {styles.row}>
        <div className = {styles.image} style = {{backgroundImage: "url(" + logoImage + ")"}}></div>
        <div className = {styles.descriptionContainer}>
          <h4 class = 'dark'>Inverted Pendulum Logo</h4>
        </div>
      </div>
      <div className = {styles.row}>
        <div className = {styles.image} style = {{backgroundImage: `url(${automataImage})`}}></div>
      </div>
    </div>
  )
}


const styles = {
  MESectionContainer:css`
    height: 100%;
  `,
  row:css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 50%;
  `,
  image:css`
  opacity: .9;
  background-position: bottom; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  `,
}
