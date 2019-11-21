import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"
import "../styles/phoneSpacing.css"
import "../styles/tabletSpacing.css"
import "../styles/desktopSpacing.css"

export default function WIP(props) {
  let {title} = props;
  return (
    <div className = {styles.wipBack}>
      <div className = {styles.wipMessageContainer}>
      <h2 style = {{color: 'rgb(230,230,230)'}}> <i class="fas fa-tools"></i> Under construction. </h2>
      <h4 style = {{color: 'rgb(230,230,230)'}}> Sorry, I'm currently coding up a new version of my portfolio! Please come back after <b>October 27th</b> to see a much more finished website! </h4>
      </div>
    </div>
  )
}

const styles = {
  wipBack:css`
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: 101;
    background-color: rgb(0,0,0,.5);
  `,
  wipMessageContainer:css`
  width: 500px;
  position: absolute;
  padding: 25px 50px;
  background-color: rgb(150,20,20);
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  box-shadow: 0px 0px 10px rgb(0,0,0,.3);
  `
};
