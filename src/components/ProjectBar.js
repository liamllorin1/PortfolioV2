import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"
import ButtonBold from "./ButtonBold.js"

export default function ProjectBar(props) {
  let {projectTitle, projectDescription, projectImage} = props;
  return (
    <div className = {styles.projectContainer}>
    <div className = {styles.descriptionContainer}>
      <h2 className = {styles.projectTitle}>{projectTitle}</h2>
      <p className = {styles.projectDescription}>{projectDescription}</p>
      <ButtonBold title={'Find out more.'}/>
    </div>
    <div className = {styles.imageContainer}>
      <div className = {styles.projectImage} style = {{backgroundImage: 'url('+projectImage+')'}}>
      </div>
    </div>
    </div>
  )
}

const styles = {
  projectContainer:css`
  box-sizing: border-box;
  margin: 100px 0;
  height: 500px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  `,
  descriptionContainer:css`
    padding: 50px;
    box-sizing: border-box;
    height: 100%;
    width: 50%;
    background-color: white;
  `,
  projectTitle:css`
  color: rgb(30,30,30);
  `,
  projectDescription:css`
  color: rgb(60,60,60);
  margin-bottom: 25px;
  `,
  imageContainer:css`
  box-sizing: border-box;
  position: relative;
  padding: 100px 0;
  width: 50%;
  `,
  projectImage:css`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 500px;
  background-position: bottom; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  `,
};
