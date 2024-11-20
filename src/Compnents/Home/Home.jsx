import React from 'react'
import {assets} from '../../assets/assets'
import './Home.css'
import Product from '../Products/Product'

function Home() {
  return (
    <div className='home'>
        <div className="home_container">
            <img src={assets.Banner1} alt="banner" className="home_image" />
            <div className="home_row">
                <Product               id="12345"
                title="Small gifts under $20"
                price={18}
                rating={5}
                image={assets.Gifts}/>
                <Product id="54321"
                title="Deals in PCs"
                price={159.99}
                rating={4}
                image={assets.PCs}/>
                <Product id="54321"
                title="Shop for your home essentials"
                price={100}
                rating={4}
                image={assets.cleaningTools}/>
                <Product id="54321"
                title="Top categories in Kitchen appliances"
                price={150}
                rating={4}
                image={assets.Cooker}/>
            </div>
            <div className="home_row">
                <Product id="67890"
            title="Shop activity trackers and smartwatches"
            price={499.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"/>
                <Product id="09876"
            title="Home refresh ideas"
            price={139.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/G/01/home/THILGMA/SpringEvent2023/XCM_CUTTLE_1559454_3018199_379x304_1X_en_US._SY304_CB592739737_.jpg"/>
                <Product id="34567"
            title="Kindle E readers"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Desktop_Dash_Kindle_1x._SY304_CB639752818_.jpg"/>
            </div>
            <div className="home_row">
                <Product id="76543"
            title="Computers & Accessories"
            long_image="long_image"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"/>
            </div>
            <div className="home_row">
                <Product id="23456"
            title="Health & Personal Care"
            price={69.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg"/>
                <Product id="65432"
            title="New arrivals in Toys"
            price={999.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg"/>
                <Product id="11479"
            title="For your Fitness Needs"
            price={98.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg"/>
            </div>
        </div>
    </div>
  )
}

export default Home