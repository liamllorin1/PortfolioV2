import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"
import "../styles/phoneSpacing.css"
import "../styles/tabletSpacing.css"
import "../styles/desktopSpacing.css"
import spacing from '../styles/spacingConstants.js'

export default function User(props) {
  let { image, caption, role, name } = props.user;
  return(
    <div className = {cx(styles.userContainer, 'row')}>
      <div className = {cx('col-6', 'col-m-6', styles.userImage)} style = {{backgroundImage: 'url(' + image + ')'}}>
        <div className = {styles.userTop}>
          <div className = {styles.userTextParent}>
            <h5 style = {{marginBottom: '15px'}} class = 'light'>{role}</h5>
            <h2 className = {cx('light', styles.userText)}>{name}</h2>
          </div>
        </div>
      </div>
      <div className = {cx('col-6', 'col-m-6', styles.userDescriptionContainer)}>
        <h4 style = {{marginTop: 0}}>Profile.</h4>
        <p className = {styles.userDescriptionText}>{caption}
        </p>
      </div>
    </div>
  )
}

const styles = {
    userContainer:css`
      margin: 100px 0;
      margin-top: 50px;
      position: relative;
    `,
    userImage:css`
      background-position: center; /* Center the image */
      background-repeat: no-repeat; /* Do not repeat the image */
      background-size: cover; /* Resize the background image to cover the entire container */
      height: 350px;
      position: relative;
      margin-bottom: 50px;
    `,
    userTop:css`
      height: 100%;
      width: 100%;
      background-image: linear-gradient(45deg, rgb(0,0,0,.5), rgb(0,0,0,0));
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
      padding-right: 50px;
    `
}
