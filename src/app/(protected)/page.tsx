import React from 'react'
import Cards from '../component/Cards'

import { PieCharts } from '../component/charts/PieChart'
import { ThemeSwitch } from '../component/ThemeSwitch'
import { SearchIcon } from 'lucide-react'
import FetchApi from '../component/FetchApi'

const page = () => {
  return (
    <section className=' sections'>
      <div className='navbar'>
        <h2 className='text-[36px]'>Dashboard</h2>
        <FetchApi/>
        <div className='flex bg-popover shadow-lg py-3 px-4 rounded-full gap-4'>
          
          <div className='flex items-center bg-input/50 px-2 rounded-full'>
            <SearchIcon size={20}/>
            <input type="text" placeholder='Search'  className='bg-transparent outline-none px-2'/>
          </div>
          <ThemeSwitch />
          
        </div>
      </div>
      <div className='layer2'>
        <Cards/>
        
        <PieCharts/>
      </div>
    </section>
  )
}

export default page