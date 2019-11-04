import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"
import Image from "../components/image"
import spacing from '../styles/spacingConstants.js'
import SEO from "../components/seo"
import ProjectBar from "../components/ProjectBar"
import logoImage from '../images/mainLogoLight.jpg'
import automataImage from '../images/mainAutomataLight.jpg'

const sectionTitle = 'Mechanical Systems + Industrial Design.';
const projects = [
  {
    title: 'Inverted Pendulum Logo.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    image: logoImage,
  },
  {
    title: 'Japanese-Themed Automata System.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    image: automataImage,

  }
]

export default function MESection() {
  return (
    <section className = {styles.MEContainer} id="MESection">
      <div class = 'spacer'></div>
      <div className = {styles.sideBarContainer}></div>
      <div className = {styles.projectBarsContainer}>
        {projects.map((projectObj) => {
          return <ProjectBar projectTitle = {projectObj.title} projectDescription = {projectObj.description} projectImage = {projectObj.image}
        })}
      </div>
      <div class = 'spacer'></div>
    </section>
  )
}

const styles = {
  MEContainer:css`
  display: grid;
  grid-template-columns: ${spacing.desktop.smallMargin} ${spacing.desktop.largeMargin} auto ${spacing.desktop.smallMargin};
  background-image: linear-gradient(45deg, rgb(15, 15, 15), rgb(45, 45, 45));
  height: 100vh;
  `,
  `,
  projectBarsContainer:css`
  width: 100%;
  box-sizing: border-box;
  `,
  sectionTitle:css`
  color: rgb(220,220,220);
  `,
};
