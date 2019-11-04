import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"

export default function ConceptSketches(props) {
  let {conceptSketches} = props;
  return(
    <div className = {styles.conceptSketchesContainer}>
      {conceptSketches.map((conceptSketch) => {
        return (
          <div>
            <div className = {styles.imageContainer} style = {{backgroundImage: 'url(' + conceptSketch.image + ')'}}>
            </div>
            <h6 className = {cx(styles.conceptSketchText, 'light')}>{conceptSketch.caption} <i style = {{color: 'rgb(150,150,150)'}}class="fas fa-level-up-alt"></i></h6>
          </div>
        )
      })}
    </div>
  )
}

const styles = {
  conceptSketchesContainer:css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    margin-top: 25px;
    margin-bottom: 50px;
  `,
  imageContainer:css`
    height: 300px;
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
  `,
  conceptSketchText:css`
    color: rgb(30,30,30);
    margin: 10px 0;
  `
}
