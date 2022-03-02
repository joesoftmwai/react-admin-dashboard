import React from 'react';
import {ArrowDownward, ArrowUpward} from '@mui/icons-material';
import './FeaturedInfo.css';
const FeaturedInfo = () => {
  return (
    <div className='container'>
      <div className='featured'>
          <div className='featured-item'>
            <span className="featured-title">Revenue</span>
            <div className="featured-money-container">
              <span className="featured-money">$2,500</span>
              <span className="featured-money-rate"> -10.4 <ArrowDownward className='icon negative'/></span>
            </div>
            <span className="sub-title">Compare to last month</span>
          </div>

          <div className='featured-item'>
            <span className="featured-title">Sales</span>
            <div className="featured-money-container">
              <span className="featured-money">$2,000</span>
              <span className="featured-money-rate"> -11.4 <ArrowDownward className='icon negative'/></span>
            </div>
            <span className="sub-title">Compare to last month</span>
          </div>

          <div className='featured-item'>
            <span className="featured-title">Cost</span>
            <div className="featured-money-container">
              <span className="featured-money">$200</span>
              <span className="featured-money-rate"> +1.4 <ArrowUpward className='icon'/></span>
            </div>
            <span className="sub-title">Compare to last month</span>
          </div>
      </div>
    </div>
  )
}

export default FeaturedInfo