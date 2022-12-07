import '../styles/globals.css'
import React from "react"
import { Layout } from '../components'
import { StateContext } from '../context/StateContext'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  return (
    //Alle States und State-Functions können hier über die ganze App benutzt werden
    <StateContext>
      <Layout>
        <Toaster/>
        <Component {...pageProps} /> {/*Immer das aktuelle Component (z.B. Homepage oder Details Page)*/}
      </Layout>
    </StateContext>
  )
}

export default MyApp
