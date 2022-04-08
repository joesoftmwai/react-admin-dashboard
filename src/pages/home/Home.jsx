import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import WidgetSm from '../../components/widgets/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgets/widgetLg/WidgetLg'
import { salesData } from '../../dummyData'
import './Home.css'
const Home = () => {
  return (
    <div>
      <FeaturedInfo/>
      <Chart title="Sales Analytics" data={salesData} dataKey="sales" grid />
      <div className='home-widgets'>
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>

    

  )
}

export default Home