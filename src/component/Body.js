import React from 'react'
import Chart from './Chart'

function Body() {
  return (
    <div className='container'>
        <div className='title'>Spending - Last 7 days</div>
        <Chart/>
        <hr />
        <div className='bottom'>
            <div className='bottom-1'>
                <div className="total">Total this month</div>
                <div className="montant">$478.33</div>
            </div>
            <div className='bottom-2'>
                <div className="rate">+2.4%</div>
                <div className="last_month">from last month </div>
            </div>
        </div>
            
    </div>
  )
}

export default Body