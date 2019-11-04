import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"

export default function ConceptModels(props) {
  let {conceptModels} = props;
  return(
    <div className = {styles.conceptModelsContainer}>
      {conceptModels.map((conceptModel) => {
        return (
          <div>
            <div className = {styles.imageContainer} style = {{backgroundImage: 'url(' + conceptModel.image + ')'}}>
            </div>
            <h6 className = {styles.conceptCaptionText}>{conceptModel.caption} <i style = {{color: 'rgb(150,150,150)'}}class="fas fa-level-up-alt"></i></h6>
          </div>
        )
      })}
    </div>
  )
}

const styles = {
  conceptModelsContainer:css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
    margin-top: 25px;
    margin-bottom: 50px;
  `,
  imageContainer:css`
    height: 250px;
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
  `,
  conceptCaptionText:css`
    margin: 10px 0;
  `
}
