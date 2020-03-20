import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "../../styles/styleConstants.js"
import "../../styles/fonts.css"
import "../../styles/phoneSpacing.css"
import "../../styles/tabletSpacing.css"
import "../../styles/desktopSpacing.css"


export default function StatRow(props) {
  let { stats } = props;
  const styles = {
    statContainerCompletelyAlone:css`
      padding-left: 0;
      padding-right: 50px;
    `,
    statContainerPair:css`
      padding-left: 25px;
      padding-right: 25px;
    `,
    stat:css`
      font-size: 130px;
    `,
  }

  return(
    <div className = {cx('row', 'marginTop4')}>
      <div className = {cx(stats.length === 2 ? 'col-2': 'col-3')}></div>
      <div className = {cx('col-4', stats.length === 2 ? styles.statContainerPair : styles.statContainerCompletelyAlone)}>
        <h1 className = {cx('darkPrimary', 'centerAlign', styles.stat)}>
          {stats[0].stat}
        </h1>
        <h5 className = {cx('centerAlign', 'darkTertiary')}>
          {stats[0].description}
        </h5>
      </div>
      {stats[1] &&
        <div className = {cx('col-4', styles.statContainer)}>
          <h1 className = {cx('darkPrimary', styles.stat, 'centerAlign')}>
            {stats[1].stat}
          </h1>
          <h5 className = {cx('centerAlign', 'darkTertiary')}>
            {stats[1].description}
          </h5>
        </div>
      }
    </div>
  )
}
