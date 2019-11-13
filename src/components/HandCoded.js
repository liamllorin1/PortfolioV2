import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import $ from 'jquery';


export default function HandCoded() {

  return (
  <div className = {styles.container}>
    <h6 className = {styles.text}>Developed / Designed by Liam Llorin.</h6>
  </div>)
}

const styles = {
  container:css`
    position: absolute;
    bottom: 25px;
    left: 25px;
    background-color: rgb(22,22,22);
    height: 30px;
    padding: 0 10px;
    z-index: 100;
  `,
  text:css`
    line-height: 30px;
    margin: 0;
    color: rgb(180,180,180);
    font-weight: 100;
    font-size: 11px;
  `
}
