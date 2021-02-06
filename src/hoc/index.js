import React, { Fragment } from 'react'
import { defaultTheme } from '../hoc/theme'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet'

const GlobalStyles = createGlobalStyle`
  body{
    font-family: 'Roboto', 'Sans-serif';
  }
`

const Theme = ({ children }) => (
  <Fragment>
    <Helmet>
      <script
        src='https://kit.fontawesome.com/acc0890c64.js'
        crossorigin='anonymous'
      />
    </Helmet>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  </Fragment>
)

export default Theme
