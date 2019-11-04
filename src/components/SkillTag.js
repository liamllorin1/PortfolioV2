import React, { useState } from "react"
import { css, cx } from 'emotion'

export default function SkillTag(props) {
  let { tagColor, textColor, title } = props;
  const styles = {
    tagContainer:css`
      background-color: ${tagColor};
      min-width: 15px;
      height: 30px;
      display: inline-block;
      padding: 0 10px;
      margin: 25px 0;
      margin-top: 0;
      box-shadow: 0px 0px 3px rgb(10,10,10, .025);
      margin-right: 10px;
    `,
    title:css`
      color: ${textColor};
      margin: 0;
      line-height: 30px;
    `
  }
  return (
    <div className = {styles.tagContainer}>
      <h6 className = {styles.title}>{title}</h6>
    </div>
  )
}
