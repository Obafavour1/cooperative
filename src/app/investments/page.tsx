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

const page = () => {
  return (
    <section className=' sections'>
      <div className='flex items-center justify-between'>
        <h2 className='heading2'>Investment</h2>
        {/* <Link href='#'><Button>Apply for Investment</Button></Link> */}

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
      </div>
      <div>
        
        <InvestmentTable/>
        
      </div>
    </section>
  )
}

export default page