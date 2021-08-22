import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// styled components
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize } from "styled-normalize"

// components
import Header from "./header"
import Cursor  from "../components/customCursor"  

// context
import { useGlobalStateContext } from '../context/globalContext'


const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
      text-decoration: none;
      cursor: none;
    }

  html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        font-size: 16px;
    }

  body {
        font-size: 16px;
        font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background: ${props => props.theme.background};
        overscroll-behavior: none;
        overflow-x: hidden;
    }

`


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    const darkTheme = {
      background: '#645394',
      text: '#e2eaeb',
      turquoise: "#45B8AC"
    }
    const lightTheme = {
      background: '#e2eaeb',
      text: '#645394',
      turquoise: "#45B8AC"
    }

    const {currentTheme} = useGlobalStateContext()

  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle/>
      <Cursor/> 
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  ) 
  
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
