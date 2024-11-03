import React from 'react'
import InvestmentTable from '../component/table/InvestmentTable'
import { Button } from '@/components/ui/button'
// import Link from 'next/link'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  // DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import InvestmentForm from '../component/forms/InvestmentForm'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'
import { ThemeSwitch } from '../component/ThemeSwitch'

const page = () => {
  return (
    <section className=' sections'>
      <div className='navbar'>
          <h2 className='text-[36px]'>Investment</h2>
          <div className='flex gap-4 items-center'>
          <Dialog >
            <DialogTrigger asChild>
              <Button >Apply for Investment</Button>
            </DialogTrigger>
            <DialogContent className="">
              <DialogHeader>
                <DialogTitle>Investment Form</DialogTitle>
                <DialogDescription>
                  Fill in the form below
                </DialogDescription>
              </DialogHeader>
              <div className="w-full">
                <InvestmentForm/>
              </div>
              {/* <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter> */}
            </DialogContent>
          </Dialog>
            <div className='flex bg-popover shadow-lg py-3 px-4 rounded-full gap-4'>
              <div className='flex items-center bg-input/50 px-2 rounded-full'>
                <SearchIcon size={20}/>
                <input type="text" placeholder='Search'  className='bg-transparent outline-none px-2'/>
              </div>
              <ThemeSwitch />
            </div>
          </div>
        </div>
      <div className='flex items-center justify-between'>
        <h2 className='heading2'>Investment</h2>
        {/* <Link href='#'><Button>Apply for Investment</Button></Link> */}

        
      </div>
      <div className='layer2'>
        
        <InvestmentTable/>
        
      </div>
    </section>
  )
}

export default page