import React, {useEffect} from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "../../styles/styleConstants.js"
import "../../styles/fonts.css"
import "../../styles/phoneSpacing.css"
import "../../styles/tabletSpacing.css"
import "../../styles/desktopSpacing.css"
import ListItem from 'ComponentsV2/AtomicComponents/ListItem.js'
import Emoji from 'ComponentsV2/AtomicComponents/Emoji.js'


export default function Paragraph(props) {
  let { image, description, userJourney, name, isFirst = false, id} = props;

  const styles = {
      personaParent:css`
        height: 100%;
        position: relative;
        width: 100%;
        margin-right: 100px;
      `,
      personaCardContainer:css`
        border-radius: 15px;
        box-shadow: 0px 0px 7px rgba(0,0,0,0.15);
        display: grid;
        grid-template-columns: 40% 60%;
        width: 100%;
        width: 58.33vw
      `,
      left:css`
        background-color: ${styleConstants.darkBack2};
        padding: 50px 40px 50px 40px;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        position: relative;
        box-sizing: border-box;
        width: 100%;
      `,
      personaImage:css`
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-image: url(${image});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top;
        margin: auto;
      `,
      right:css`
        padding: 50px 40px 50px 40px;
        box-sizing: border-box;
      `,
      userJourneyItem:css`
        display: flex;
        width: 100%;
        position: relative;
      `,
      journeyItemLeft:css`
        width: 85%;
      `,
      journeyItemRight:css`
        margin-left: 20px;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
      `,
  }

  return (
    <div id = {id ? id : undefined} className = {cx(styles.personaParent)}>
      <div className = {cx(styles.personaCardContainer, 'marginTop4')}>
        <div className = {cx(styles.left)}>
          <div className = {cx(styles.personaImage)}>
          </div>
          <h6 className = {cx('overline', 'lightTertiary', 'marginTop5')}>USER PERSONA</h6>
          <h4 className = {cx('lightPrimary')}>{name}</h4>
          <p className = {cx('p2', 'lightSecondary', 'marginTop6')}>{description}</p>
        </div>
        <div className = {cx(styles.right)}>
          <h5 className = {cx('darkPrimary')}>User Journey</h5>
          {userJourney.map((journeyStep, index) => {
            return (
              <div className = {cx(styles.userJourneyItem, index === 0 ? 'marginTop5' : 'marginTop6')} key = {index}>
                <div className = {cx(styles.journeyItemLeft)}>
                  <ListItem isIsolated = {true} underlayText = {index + 1} text = {journeyStep.step}/>
                </div>
                <div className = {cx(styles.journeyItemRight)}>
                  <Emoji symbol = {journeyStep.emoji}/>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
