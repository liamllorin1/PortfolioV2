import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"
import "../styles/phoneSpacing.css"
import "../styles/tabletSpacing.css"
import "../styles/desktopSpacing.css"
import SkillTag from "../components/SkillTag"
import HandCoded from '../components/HandCoded'
import ButtonBold from '../components/ButtonBold'
import resumeFile from '../../DesignResume(2-3-20).pdf'

export default function StandardSection(props) {
  let { title, caption, sectionId, textColor, image, leftGradient, rightGradient, button, skillTags, resume } = props.sectionObj;
  return(
    <section className={styles.sectionContainer} id={sectionId ? sectionId : ""}>
      {title === "Liam Llorin." && <HandCoded/>}
      <div className = {cx(styles.sectionBackground)}>
        <div className = {styles.leftBack} style = {{backgroundImage: leftGradient}}>
        </div>
        <div className = {styles.rightBack} style = {{backgroundImage: rightGradient}}>
        </div>
      </div>
      <div className = {cx(styles.sectionTop, 'row')}>
        <div class = "col-2 col-m-1"></div>
        <div className={cx('col-3 col-m-5', styles.sideBarContainer)}>
          {title === "Liam Llorin." ? <h1 class = {textColor} style = {{marginTop: 0}}>{title}</h1> : <h2 class = {textColor} style = {{marginTop: 0}}>{title}</h2>}
          <p class = {textColor}>{caption}</p>
          {skillTags && skillTags.map(skillTag => {
            return <SkillTag textColor = {skillTag.textColor} tagColor = {skillTag.tagColor} title = {skillTag.title}/>
          })}
          {resume && <h5 className = {styles.resumePromptText}>Want to see my <a href = {resumeFile} className = {styles.resumePromptLink}>Resume</a>?</h5>}
          {button}
        </div>
        <div className = {cx(styles.imageSectionContainer, 'col-5 col-m-5')}>
          <div className = {styles.imageContainer} style = {{backgroundImage: 'url(' + image + ')'}}></div>
        </div>
        <div class = 'col-2 col-m-1'></div>
      </div>
    </section>)
}

const styles = {
  sectionContainer:css`
    height: 100vh;
    width: 100vw;
    position: relative;
  `,
  sectionBackground:css`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 60% 40%;
  `,
  sideBarContainer:css`
    padding-right: 50px;
    padding-top: 150px;
    box-sizing: border-box;
  `,
  sectionTop:css`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
  `,
  imageSectionContainer:css`
    height: 100%;
    position: relative;
    padding: 150px 0;
  `,
  resumePromptText:css`
    color: rgb(200,200,200);
  `,
  resumePromptLink:css`
    text-decoration: none;
    color: rgb(180,180,180);
    text-decoration: underline;
  `,
  imageContainer:css`
    height: calc(100vh - 300px);
    box-sizing: border-box;
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
  `,

}
