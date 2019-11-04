import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"
import ButtonFaint from "./ButtonFaint.js"


export default function ProjectCard(props) {
  let {projectTitle, projectDescription, projectImage, isRightSide} = props;
  return (
    <div className = {cx(styles.projectCardContainer)}>
      <div className = {styles.projectImage} style = {{backgroundImage: 'url('+projectImage+')'}}>
      </div>
      <div className = {styles.descriptionContainer}>
        <h4 className = {styles.projectTitle}>{projectTitle}</h4>
        <div className = {styles.skillsListContainer}>
          <div className = {styles.skillBlock}>
            <h6 className = {styles.skillText}>
              Prototyping
            </h6>
          </div>
          <div className = {styles.skillBlock}>
            <h6 className = {styles.skillText}>
              Iteration
            </h6>
          </div>
          <div style = {{clear: 'left'}}></div>
        </div>
        <h5 className ={styles.projectLink}>Find out more.</h5>
      </div>
    </div>
  )
}

const styles = {
  projectCardContainer:css`
    box-sizing: border-box;
    width: 100%;
    display: grid;
    min-width: 300px;
    margin-bottom: 100px;
  `,
  rightSideProjectCardContainer:css`
    grid-template-columns: 70% 30%;
  `,
  leftSideProjectCardContainer:css`
    grid-template-columns: 30% 70%;
  `,
  descriptionContainer:css`
    padding-right: 25px;
    box-sizing: border-box;
    width: 100%;
    bottom: 0;
    position: relative;
    height: max-content;
  `,
  projectTitle:css`
  color: rgb(30,30,30);
  `,
  projectLink:css`
    font-weight: 700;
    color: rgb(70,70,70)
  `,
  projectDescription:css`
  color: rgb(60,60,60);
  margin-bottom: 25px;
  height: 50%;
  `,
  projectImage:css`
  width: 100%;
  height: 300px;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  `,
  skillBlock:css`
    height: 30px;
    background-color: rgb(30,30,30);
    display: inline-block;
    padding: 0 10px;
    box-sizing: border-box;
    float: left;
    margin-right: 15px;
    margin-bottom: 15px;
  `,
  skillText:css`
    line-height: 30px;
    color: rgb(230,230,230);
    margin: 0;
  `
};
