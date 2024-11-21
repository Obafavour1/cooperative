import React from 'react'
import StaffTable from '../../../component/table/StaffTable'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'
import { ThemeSwitch } from '@/app/component/ThemeSwitch'


const page = () => {
  return (
    <section className='sections'>
        <div className='navbar'>
          <h2 className='text-[28px] md:text-[36px]'>Staff</h2>
          <div className='flex gap-4 items-center justify-between'>
            <Link href='/staff_form'><Button>Add staff</Button></Link>
            <div className='flex bg-popover shadow-lg py-1 md:py-3 px-1 md:px-4 rounded-full gap-4'>
              <div className='flex items-center bg-input/50 px-2 rounded-full'>
                <SearchIcon size={20}/>
                <input type="text" placeholder='Search'  className='bg-transparent outline-none w-[50%] px-2'/>
              </div>
              <ThemeSwitch />
            </div>
          </div>
        </div>
        <div className='layer2'>
          <StaffTable/>
        </div>
    </section>
  )
}

export default page