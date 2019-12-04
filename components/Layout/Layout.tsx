import React from 'react'
import Meta from '../Meta'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import globalStyle from '../../style/style-global'
import { ThemeProvider } from '@material-ui/core/styles'
import { otsTheme } from '../../style/style'

export default function Layout({ siteTitle, siteDescription, children }) {
  return (
    <ThemeProvider theme={otsTheme}>
      <Meta siteTitle={siteTitle} siteDescription={siteDescription} />
      <Header siteTitle={siteTitle} />

      <div className='main'>{children}</div>
      <Footer />
      <style jsx global>
        {globalStyle}
      </style>
    </ThemeProvider>
  )
}
