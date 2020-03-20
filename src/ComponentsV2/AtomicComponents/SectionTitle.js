import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "../../styles/styleConstants.js"
import "../../styles/fonts.css"
import "../../styles/phoneSpacing.css"
import "../../styles/tabletSpacing.css"
import "../../styles/desktopSpacing.css"


export default function SectionTitle(props) {
  let { title, underlayText, description } = props;
  return(
    <>
      <div className = {cx('row', 'marginTop1')}>
        <div className = {cx('col-2')}></div>
        <div className = {cx('col-7')}>
          <div className = {cx(styles.sectionTitleContainer)}>
            <h1 className = {cx('darkDisabled', 'title')}>
              {underlayText}
            </h1>
            <h2 className = {cx('darkPrimary', styles.sectionTitle)}>
              {title}
            </h2>
          </div>
        </div>
      </div>
      {description && (
        <div className = {cx('row', 'marginTop5')}>
          <div className = {cx('col-2')}></div>
          <div className = {cx('col-5')}>
            <p className = {cx('darkSecondary', 'p1')}>
              {description}
            </p>
          </div>
        </div>
      )}
    </>
  )
}


const styles = {
  sectionTitleContainer:css`
    position: relative;
    width: 100%;
    height: 100%;
  `,
  sectionTitle:css`
    position: absolute;
    bottom: 0;
    left: 0;
  `,
}
