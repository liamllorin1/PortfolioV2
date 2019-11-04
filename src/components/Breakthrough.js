import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"
import spacing from '../styles/spacingConstants.js'



export default function Breakthrough(props) {
  let {margin} = props;

  const styles = {
    breakthroughSection:css`
      width: 100%;
      position: relative;
      margin-top: 50px;
      margin-bottom: 100px;
    `,
    breakthroughContainer:css`
      width: 700px;
      height: min-content;
      background-color: rgb(255,185,185);
      margin: auto;
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      z-index: 1;
      position: relative;
    `,
    leftBack:css`
      background-color: rgb(255,155,155);
      padding: 50px;
    `,
    rightBack:css`
      height: 100%;
      padding: 50px;
    `,
  }

  return(
    <div className = {styles.breakthroughSection}>
      <div className = {styles.breakthroughContainer}>
        <div className = {styles.leftBack}>
          <h3 style = {{margin: 0}}>Breakthrough</h3>
        </div>
        <div className = {styles.rightBack}>
          <p style = {{margin: 0, color: 'rgb(50,50,50)'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
    </div>
  )
}
