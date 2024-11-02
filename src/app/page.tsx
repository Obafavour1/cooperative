import React from 'react'
import Cards from './component/Cards'

import { PieCharts } from './component/charts/PieChart'

const page = () => {
  return (
    <section className=' sections'>
      <h2 className='text-[40px] mb-4'>Dashboard</h2>
      <div>
        <Cards/>
        
        <PieCharts/>
      </div>
    </section>
  )
}

export default page