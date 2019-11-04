import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"

export default function ButtonBold(props) {
  let {title, buttonColor, titleColor} = props;

  const styles = {
    buttonContainer:css`
    height: 50px;
    padding: 0 25px;
    background-color: ${buttonColor};
    text-align: center;
    width: max-content;
    margin-bottom: 25px;
    `,
    buttonText:css`
    color: ${titleColor};
    margin: 0;
    line-height: 50px;
    font-weight: 700;
    `
  };

  return (
      <div className = {styles.buttonContainer}>
        <h5 className = {styles.buttonText}>{title}</h5>
      </div>
  )
}
