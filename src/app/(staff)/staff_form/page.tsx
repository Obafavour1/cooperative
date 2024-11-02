import Link from 'next/link'
import { Button } from '@/components/ui/button'
import StaffForm from '@/app/component/forms/StaffForm'

const page = () => {
  return (
    <section className='pt-10 px-5'>
        <h2 className='heading2'>Staff</h2>
        <div className='layer2'>
          
          <StaffForm/>
        </div>
    </section>
  )
}

export default page