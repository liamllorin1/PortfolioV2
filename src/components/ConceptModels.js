import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"
import "../styles/phoneSpacing.css"
import "../styles/tabletSpacing.css"
import "../styles/desktopSpacing.css"

export default function ConceptModels(props) {
  let {conceptModels} = props;
  let middlePadding = {padding: '0 10px'};
  let leftPadding = {paddingLeft: '0px', paddingRight: '10px'};
  let rightPadding = {paddingLeft: '10px', paddingRight: '0px'};
  return(
    <div className = {cx('row', styles.conceptModelsContainer)}>
      {conceptModels.map((conceptModel, index) => {
        let position = conceptModel.position ? conceptModel.position : 'center';
        let paddingStyle;
        if (index % 3 === 0) {
          paddingStyle = leftPadding;
        } else if (index % 3 === 2) {
          paddingStyle = rightPadding;
        } else {
          paddingStyle = middlePadding;
        }
        return (
          <div class = 'col-4 col-m-4' style = {paddingStyle}>
            <div className = {styles.imageContainer} style = {{backgroundImage: 'url(' + conceptModel.image + ')', backgroundPosition: position}}>
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
    column-gap: 20px;
    margin-top: 50px;
    margin-bottom: 100px;
  `,
  imageContainer:css`
    height: 250px;
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
  `,
  conceptCaptionText:css`
    margin: 10px 0;
  `
}
