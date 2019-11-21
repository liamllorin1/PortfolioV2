import React, { useState, useEffect } from "react"
import { Link, navigate } from "gatsby"
import { css, cx } from 'emotion'
import Footer from '../components/Footer'
import ButtonBold from '../components/ButtonBold'
import spacing from '../styles/spacingConstants.js'
import "../styles/phoneSpacing.css"
import "../styles/tabletSpacing.css"
import "../styles/desktopSpacing.css"
import NavBar from '../components/NavBar'


export default function PasswordPage() {
  const correctPassword = 'dsign';

  return (
  <>
    <NavBar navLinks = {[]} />
    <div className = {styles.PasswordContainer}>
      <div class = 'row'>
        <div class = 'col-4 col-m-3'></div>
        <div class = 'col-4 col-m-6'>
          <div className = {styles.warningRow}>
            <h4>This page contains confidential material.</h4>
            <p>Haven't got a password yet? Email me: <b>liamllorin</b><i>@stanford.edu</i>.</p>
            <form onSubmit = {(e) => {
              const passwordVal = document.getElementById("pword").value;
              const buttonContainerElem = document.getElementById('buttonContainer');
              if (passwordVal === correctPassword) {
                navigate("/Arcesium/")
              } else {
                alert('Incorrect password! Please try again.');
              }
              e.preventDefault();
            }}>
              <input type="text" id="pword" placeholder="Password" className = {styles.input}/>
            </form>
          </div>
        </div>
        <div class = 'col-4 col-m-3'></div>
      </div>
    </div>
  </>
  )
}

const styles = {
  PasswordContainer:css`
    height: 100vh;
    position: relative;
    padding: 150px 0;
  `,
  input:css`
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid rgb(90,90,90);
    border-radius: 0px;
    box-sizing: border-box;
    font-family: 'Proxima Nova', 'Avenir';
    font-size: 15px;
    &:focus {
        border: 2px solid rgb(50,50,50);
        outline: none;
    }
  `
}
