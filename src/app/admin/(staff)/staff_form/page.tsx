
import StaffForm from '@/app/component/forms/StaffForm'
import { SidebarAdmin } from '@/app/component/SidebarAdmin'
import { ThemeSwitch } from '@/app/component/ThemeSwitch'
// import { Button } from '@/components/ui/button'
import { SearchIcon } from 'lucide-react'
// import Link from 'next/link'

const page = () => {
  return (
    <section className='sections'>
        <div className='navbar'>
          <div className='flex items-center justify-between w-full'>
            <h2 className='text-[36px]'>Staff Form</h2>
            {/* <Link href='/staff_form' className='bg-primary'><Button>Add staff</Button></Link> */}
          </div>
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
          
          <StaffForm/>
        </div>
    </section>
  )
}

export default page