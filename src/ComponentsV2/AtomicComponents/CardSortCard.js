import React, {useEffect} from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "../../styles/styleConstants.js"
import "../../styles/fonts.css"
import "../../styles/phoneSpacing.css"
import "../../styles/tabletSpacing.css"
import "../../styles/desktopSpacing.css"


export default function CardSortCard(props) {
  let { title, id } = props;

  const styles = {
      cardParent:css`
        height: 100%;
        position: relative;
        width: 100%;
        margin-right: 25px;
      `,
      cardContainer:css`
        border-radius: 15px;
        box-shadow: 0px 0px 7px rgba(0,0,0,0.15);
        width: 200px;
        height: 100px;
        position: relative;
        display: flex;
        padding-right: 25px;
        padding-left: 25px;
        box-sizing: border-box;
      `,
      cardTitle:css`
        margin: auto;
        text-align: center;
      `
  }

  return (
    <div id = {id ? id : undefined} className = {cx(styles.cardParent, 'marginTop4')}>
      <div className = {cx(styles.cardContainer)}>
        <h5 className = {cx('darkSecondary', styles.cardTitle)}>
          {title}
        </h5>
      </div>
    </div>
  );
}
