import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"
import Image from "../components/image"
import spacing from '../styles/spacingConstants.js'
import SEO from "../components/seo"
import logoImage from '../images/mainLogoDark.jpg'
import automataImage from '../images/leverSystem.jpg'
import ProjectCard from '../components/ProjectCard'

const sectionTitle = 'I build things.';
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
let isDropped = 1;

export default function MESection2() {
  return (
    <section className = {styles.MEContainer} id="MESection">
      <div className = {styles.METitleContainer}>
        <div class = 'spacer'></div>
        <div className = {styles.titleTextContainer}>
          <h1 className = {styles.METitle}>{sectionTitle}</h1>
          </div>
          <div class = 'spacer'></div>
      </div>
      <div className = {styles.projectsContainer}>
        <div class = 'spacer'></div>
        <div className = {styles.projectCardsContainer}>
          <ProjectCard projectTitle = {projects[0].title} projectDescription = {projects[0].description} projectImage = {projects[0].image}/>
          <ProjectCard projectTitle = {projects[1].title} projectDescription = {projects[1].description} projectImage = {projects[1].image}/>
        </div>
        <div class = 'spacer'></div>
      </div>
    </section>
  )
}

const styles = {
  MEContainer:css`
  padding: 150px 0;
  padding-bottom: 200px;
  width: 100%;
  box-sizing: border-box;
  background-color: rgb(250,250,250);
  `,
  METitleContainer:css`
    display: grid;
    grid-template-columns: ${spacing.desktop.smallMargin} auto ${spacing.desktop.largeMargin};
    margin-bottom: 25px;
  `,
  projectsContainer:css`
    display: grid;
    grid-template-columns: ${spacing.desktop.smallMargin} auto ${spacing.desktop.smallMargin};
  `,
  projectCardsContainer:css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 50px;
    width: 100%;
    box-sizing: border-box;
  `,
  sectionTitle:css`
  color: rgb(220,220,220);
  `,
};
