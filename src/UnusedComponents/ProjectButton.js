import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"
import ButtonBold from "./ButtonBold.js"

export default function ProjectButton() {
  return (
    <div className = {styles.buttonContainer}>
    <h3 className = {styles.buttonCaption}>Interested?</h3>
    <ButtonBold title = {'Find out more'}/>
    </div>
  )
}

const styles = {
  buttonContainer:css`
  padding: 25px;
  padding-top: 0;
  background-color: rgb(240,240,240);
  position: absolute;
  left: 0;
  bottom: 50%;
  transform: translateX(-50%) translateY(50%);
  box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.1);
  `,
  buttonCaption:css`
  color: rgb(30,30,30);
  `
};
