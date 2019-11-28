import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"
import "../styles/phoneSpacing.css"
import "../styles/tabletSpacing.css"
import "../styles/desktopSpacing.css"

export default function WideCaptionedImages(props) {
  let {captionedImages} = props;
  let leftPadding = {paddingLeft: '0px', paddingRight: '10px'};
  let rightPadding = {paddingLeft: '10px', paddingRight: '0px'};
  return(
    <div className = {cx('row', styles.conceptSketchesContainer)}>
      {captionedImages.map((captionedImage, index) => {
        let paddingStyle;
        if (index % 2 === 0) {
          paddingStyle = leftPadding;
        } else if (index % 2 === 1) {
          paddingStyle = rightPadding;
        }
        return (
          <div class = 'col-6 col-m-6' style = {paddingStyle}>
            <div className = {styles.imageContainer} style = {{backgroundImage: 'url(' + captionedImage.image + ')'}}>
            </div>
            <h6 className = {cx(styles.conceptSketchText, 'light')}>{captionedImage.caption} <i style = {{color: 'rgb(150,150,150)'}}class="fas fa-level-up-alt"></i></h6>
          </div>
        )
      })}
    </div>
  )
}

const styles = {
  conceptSketchesContainer:css`
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
