import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "styles/styleConstants.js"
import profilePicture from "images/ProfilePictureWide.jpg"
import gunWalking from "images/GunWalkingIg-1.jpg"
import fuad from "images/FuadUncropped-1.jpg"
import david from "images/DavidLookBackAtItIG2.jpg"
import dubsLaunch from "images/DubsLaunchOptimized.jpg"
import doge from "images/doge.jpg"
import gatesFountain from "images/GatesFountain2.jpg"
import facebookCar from "images/CarIg.jpg"
import "styles/fonts.css"
import "styles/phoneSpacing.css"
import "styles/tabletSpacing.css"
import "styles/desktopSpacing.css"


export default function IndexPagePhotographySectionPhotosContent(props) {
  let {} = props;
  return(
    <div>
      <div className = {cx(styles.picRow, styles.row1, 'marginTop5')}>
        <img src = {facebookCar} className = {styles.photo}/>
        <img src = {doge} className = {styles.photo}/>
      </div>
      <div className = {cx(styles.picRow, styles.row2, 'marginTop5')}>
        <img src = {dubsLaunch} className = {styles.photo}/>
        <img src = {gunWalking} className = {styles.photo}/>
        <img src = {david} className = {styles.photo}/>
        <div className = {cx(styles.photosOverlay)}></div>
      </div>
    </div>
  )
}


const styles = {
  picRow:css`
    width; 100%;
    display: grid;
    column-gap: 25px;
    position: relative;
  `,
  row1:css`
    grid-template-columns: repeat(2, 1fr);
  `,
  row2:css`
    grid-template-columns: repeat(3, 1fr);
  `,
  photo:css`
    width: 100%;
    max-height: 100%;
  `,
  photosOverlay:css`
    width: 100%;
    height: 200px;
    background: linear-gradient(0deg, ${styleConstants.darkBack1} 1%, rgba(14, 9, 18, 0));
    position: absolute;
    bottom: 0;
  `
}
