import '../styles/globals.css'
import React from "react"
import { Layout } from '../components'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} /> {/*Immer das aktuelle Component (z.B. Homepage oder Details Page)*/}
    </Layout>
  )
}

export default MyApp
