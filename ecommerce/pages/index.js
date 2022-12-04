import React from 'react'
import { Product, FooterBanner, HeroBanner } from '../components'
import { client } from '../lib/client'

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className='products-heading'>
        <h2>Best Selling Product</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>
        {products?.map((product) => product.name)}
      </div>

      <FooterBanner/>
    </>
  )
}

//Fetching mit Next.js statt React.js
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'; //Nimm alle Produkte vom Sanity Dashboard
  const products = await client.fetch(query); //Gehe zum richtigen Client & fetche alle Produkte

  const bannerQuery = '*[_type == "banner"]'; //Nimm alle Banner vom Sanity Dashboard
  const bannerData = await client.fetch(bannerQuery); //Gehe zum richtigen Client & fetche alle Banner

  return {
    props: { products, bannerData }
  }
}

export default Home
