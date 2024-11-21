import React from 'react'
import Cards from '../component/Cards'

import { PieCharts } from '../component/charts/PieChart'
import { ThemeSwitch } from '../component/ThemeSwitch'
import {  SearchIcon } from 'lucide-react'
import { SidebarAdmin } from '../component/SidebarAdmin'

const page = () => {
  return (
    <section className=' sections'>
      <div className='navbar'>
        <h2 className='text-[36px]'>Dashboard</h2>
      
        <div className='flex justify-between items-center  max-md:w-full  bg-popover shadow-lg py-2 px-2 rounded-full gap-2 md:gap-4'>
          
          <div className='flex  items-center max-md:w-[78%] bg-input/90  md:py-3 px-3 rounded-full'>
            <SearchIcon size={20}/>
            <input type="text" placeholder='Search...'  className='bg-transparent h-[50px] w-full outline-none py-1 px-2'/>
          </div>
          
          <SidebarAdmin/>
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