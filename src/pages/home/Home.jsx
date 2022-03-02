import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import { salesData } from '../../dummyData'
import './Home.css'
const Home = () => {
  return (
    <div>
      <FeaturedInfo/>
      <Chart title="Sales Analytics" data={salesData} dataKey="sales" grid />
    </div>

    

  )
}

export default Home