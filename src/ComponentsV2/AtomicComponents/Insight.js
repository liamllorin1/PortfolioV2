import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "../../styles/styleConstants.js"
import "../../styles/fonts.css"
import "../../styles/phoneSpacing.css"
import "../../styles/tabletSpacing.css"
import "../../styles/desktopSpacing.css"


export default function Insight(props) {
  let { insight } = props;
  return(
    <div className = {cx('row', 'marginTop4')}>
      <div className = {cx('col-3')}></div>
      <div className = {cx('col-6', styles.insightParent)}>
        <div className = {cx(styles.insightLeftBorder)}></div>
        <div className = {cx(styles.insightTextContainer)}>
          {Array.isArray(insight) ? insight.map((insightText, index) => (
            <h4 key = {index} className = {cx('italic', 'darkPrimary', styles.insightText, index > 0 ? 'marginTop6' : undefined)}>
              {insightText}
            </h4>
          )) : <h4 className = {cx('italic', 'darkPrimary', styles.insightText)}>
            {insight}
          </h4>}
        </div>
      </div>
    </div>
  )
}


const styles = {
  insightParent:css`
    position: relative;
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 50px;
  `,
  insightLeftBorder:css`
    height: 100%;
    width: 10px;
    background-color: ${styleConstants.lightAccent};
  `,
  insightTextContainer:css`
    position: relative;
    margin-top: 50px;
    margin-bottom: 50px;
  `,
  insightText:css`
    line-height: 130%;
  `
}
