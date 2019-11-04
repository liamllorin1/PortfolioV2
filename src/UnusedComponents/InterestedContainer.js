

import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"
import ButtonBold from "./ButtonBold.js"

export default function InterestedContainer(props) {
  let {title} = props;
  return (
    <div className = {styles.interestedContainer}>
      <h3 className={styles.interestedLeft}>Interested?</h3>
      <ButtonBold title={'Find out more.'}className={styles.interestedRight}/>
    </div>
  )
}

const styles = {
  interestedContainer:css`
  display: flex;
  display: -webkit-flex; /* Safari */
  -webkit-justify-content: space-between; /* Safari 6.1+ */
  justify-content: space-between;
  width: 100%;
  padding: 25px 0;
  flex-wrap: wrap;
  `,
  interestedLeft:css`
  flex: 1;
  margin: 0;
  margin-right: 25px;
  margin-bottom: 25px;
  `,
  interestedRight:css`
  flex: 1;
  max-width: 100%;
  `,
};
