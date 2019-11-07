import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"
import spacing from '../styles/spacingConstants.js'

export default function User(props) {
  let { image, caption, role } = props.user;
  return(
    <div className = {styles.userContainer}>
      <div className = {styles.userImage} style = {{backgroundImage: 'url(' + image + ')'}}>
        <div className = {styles.userTop}>
          <div className = {styles.userTextParent}>
            <h5 style = {{marginBottom: 0}} class = 'light'>{role}</h5>
            <h2 className = {cx('light', styles.userText)}>Ron</h2>
          </div>
        </div>
      </div>
      <div className = {styles.userDescriptionContainer}>
        <h4 style = {{marginTop: 0}}>Profile.</h4>
        <p className = {styles.userDescriptionText}>{caption}
        </p>
      </div>
    </div>
  )
}

const styles = {
    userContainer:css`
      display: grid;
      grid-template-columns: 3fr 3fr;
    `,
    userImage:css`
      background-position: center; /* Center the image */
      background-repeat: no-repeat; /* Do not repeat the image */
      background-size: cover; /* Resize the background image to cover the entire container */
      width: 100%;
      height: 350px;
      position: relative;
    `,
    userTop:css`
      height: 100%;
      width: 100%;
      background-image: linear-gradient(45deg, rgb(0,0,0,.6), rgb(0,0,0,.05));
    `,
    userTextParent:css`
      bottom: 25px;
      left: 25px;
      position: absolute;
    `,
    userText:css`
      margin: 0;
    `,
    userDescriptionContainer:css`
      padding-left: 50px;
      padding-right: 100px;
    `
}
