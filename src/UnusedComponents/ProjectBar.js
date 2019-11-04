import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import projectImage from '../images/mainLogoLight.jpg'
import "../styles/fonts.css"
import RightBarContainer from "./RightBarContainer.js"


export default function ProjectBar(props) {
  return (
      <RightBarContainer projectTitle = {projectTitle} projectDescription = {projectDescription} projectImage = {projectImage} gradientDark = {gradientDark} gradientLight = {gradientLight}/>
)
}

const styles = {
  barContainer:css`

  `,
  leftSectionContainer:css`

  `,
}
