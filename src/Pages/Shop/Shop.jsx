import React from 'react'
import './Shop.css'
import Title from '../Title/Title'
import Product from '../../components/Product/Product'

const Shop = () => {
  return (
    <section className='py-5'>
    <Title title="Watch Shop"/>
    <div className='shop_section container pt-5 d-flex justify-content-between py-5'>
        <div className='buttons'>
            <button>NewestArrivals</button>
            <button>BestSellers</button>
            <button>Most Popular</button>
        </div>
        <select>
            <option value="40 pages">40 pages</option>
            <option value="50 pages">50 pages</option>
            <option value="60 pages">60 pages</option>
            <option value="70 pages">70 pages</option>
        </select>
    </div>
    <Product/>
    </section>
  )
}

export default Shop
