import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"
import "../styles/phoneSpacing.css"
import "../styles/tabletSpacing.css"
import "../styles/desktopSpacing.css"
import spacing from '../styles/spacingConstants.js'
import CaseStudyTitle from '../components/CaseStudyTitle'

export default function FrameSection(props) {
  let { categoryText, titleText, paragraphs, glamourShotImage, teammates } = props.frameObj;
  return(
    <section className = {styles.frameSection} id = 'frameSection'>
      <CaseStudyTitle title = {titleText} overlineText = {categoryText}/>
      <div className = {cx(styles.glamourShotContainer, 'row')}>
        <div class = 'col-2 col-m-1'></div>
        <div className = {cx('col-8', 'col-m-10', styles.glamourShotImage)} style = {{backgroundImage: 'url(' + glamourShotImage + ')'}}>
        </div>
        <div class = 'col-2 col-m-1'></div>
      </div>
      <div className = {cx(styles.backgroundSection, 'row')}>
        <div class = 'col-4 col-m-3'></div>
        <div className = {cx('col-4', 'col-m-6', styles.backgroundContainer)}>
          {paragraphs.map(paragraph => {
            return (<div className = {styles.paragraphContainer}>
              {paragraph.title && <h4>{paragraph.title}</h4>}
              <p className = {styles.paragraphText}>{paragraph.text}</p>
            </div>)
          })}
          {teammates && <div className = {styles.paragraphContainer}>
              <h4>Teammates.</h4>
              {teammates.map(teammate => {
                return <p>{teammate}</p>;
              })}
          </div>}
        </div>
        <div class = 'col-4 col-m-3'></div>
      </div>
    </section>
  )
}

const styles = {
  frameSection:css`
    width: 100%;
    padding: 150px 0;
  `,
  glamourShotContainer:css`
    margin-bottom: 50px;
  `,
  glamourShotImage:css`
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    height: 600px;
  `,
  backgroundSection:css`
    padding: 50px 0;
  `,
  paragraphText:css`
    color: rgb(60,60,60);
  `,
  paragraphContainer:css`
    margin-bottom: 50px;
  `
}
