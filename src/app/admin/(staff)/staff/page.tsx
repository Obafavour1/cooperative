import React from 'react'
import StaffTable from '../../../component/table/StaffTable'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'
import { ThemeSwitch } from '@/app/component/ThemeSwitch'
import { SidebarAdmin } from '@/app/component/SidebarAdmin'
import PopStaffForm from '@/app/component/forms/PopStaffForm'




const page = () => {
  return (
    <section className='sections'>
        <div className='navbar'>
          <div className='flex items-center justify-between w-full'>
            <h2 className='text-[36px]'>Staff</h2>
            <PopStaffForm/>
            <Link href='/admin/staff_form' className='bg-primary rounded-lg'><Button className='rounded-lg'>Add staff</Button></Link>
          </div>
          <div className='flex justify-between items-center  max-md:w-full  bg-popover shadow-lg py-2 px-2 rounded-full gap-2 md:gap-4'>
          
          <div className='flex  items-center max-md:w-[78%] bg-input/90  md:py-3 px-3 rounded-full'>
            <SearchIcon size={20}/>
            <input type="text" placeholder='Search...'  className='bg-transparent h-[50px] w-full outline-none py-1 px-2'/>
          </div>
          {/* <MenuIcon className='w-[30px] md:hidden'/> */}
          <SidebarAdmin/>
          <ThemeSwitch />
          
        </div>
        </div>
        <div className='layer2'>
        
          <StaffTable/>
        </div>
    </section>
  )
}

export default page