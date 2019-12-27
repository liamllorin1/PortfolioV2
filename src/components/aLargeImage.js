import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import spacing from '../styles/spacingConstants.js'
import ImageCaption from '../components/bImageCaption'
import "../styles/fonts.css"
import "../styles/phoneSpacing.css"
import "../styles/tabletSpacing.css"
import "../styles/desktopSpacing.css"


export default function LargeImage(props) {
  let {imageUrl, caption, uniqueId} = props;
  //TODO: ADD "CLICK ME" SIGN ON HOVER IF UNIQUEID
  let imageMouseOver = null;
  let imageMouseOut = null;
  useEffect(() => {
    let displaySign = document.getElementById(uniqueId);
    imageMouseOver = () => {
      if (displaySign) {
        displaySign.style.display = 'initial';
      }
    }
    imageMouseOut = () => {
      if (displaySign) {
        displaySign.style.display = 'none';
      }
    }
  });
  return(
    <>
    <div className = {cx('row', styles.parentContainer)}>
      <div class = 'col-2'></div>
      <div class = 'col-8'>
        <Link to = {'/ImageView'} state = {{imgSrc: imageUrl}} target = "_blank">
          <img className = {styles.image} src = {imageUrl} id = 'image' style = {uniqueId ? {cursor: 'pointer'} : {}} onMouseOver = {() => imageMouseOver()} onMouseOut = {() => imageMouseOut()}/>
        </Link>
        <div className = {'col-2'} id = {uniqueId} className = {styles.displaySignContainer}>
          <div className = {styles.displaySign}>
            <h6 className = {cx(styles.displayText, 'light')}>Click image to view full-screen.</h6>
          </div>
        </div>
        {caption && <ImageCaption caption = {caption}/>}
      </div>
      <div class = 'col-2'></div>
    </div>
    </>
  )
}


const styles = {
  displayText:css`
    line-height: 50px;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin: 0;
  `,
  displaySignContainer:css`
    display: none;
  `,
  displaySign:css`
    background-color: rgb(30,30,30);
    box-shadow: 0px 0px 10px rgb(0,0,0, .5);
    position: fixed;
    top: 25px;
    left: calc(16.66% + 25px);
    min-width: 150px;
    padding-left: 25px;
    padding-right: 25px;
    min-height: 50px;
    margin: 0;
  `,
  parentContainer:css`
    padding-top: 50px;
    padding-bottom: 50px;
    /* border-bottom: 1px solid red; */
  `,
  image:css`
    width: 100%;
    position: relative;
  `,
}
