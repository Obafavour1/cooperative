import React from 'react'
import SavingTable from '../component/table/SavingTable'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const page = () => {
  return (
    <section className=' sections'>
      <div className='flex items-center justify-between'>
        <h2 className='heading2'>Savings</h2>

        <Dialog>
          <DialogTrigger asChild>
            <Button >Deposit</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Make deposit</DialogTitle>
              <DialogDescription>
                Input your Id and amount to be deposited
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid   gap-4">
                <label htmlFor="name" className="">
                  Id
                </label>
                <input
                  id="name"
                  // defaultValue="id"
                  className="input"
                  placeholder='input id'
                />
              </div>
              <div className="grid items-center gap-4">
                <label htmlFor="username" className="">
                  Amount
                </label>
                <input
                  id="username"
                  // defaultValue="amount"
                  className="input"
                  placeholder='type in amount to be deposited'
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* <Link href='#'><Button>Deposit</Button></Link> */}
      </div>
      <div className='bg-white shadow-xl rounded-lg'>
        
        <SavingTable/>
        
      </div>
    </section>
  )
}

export default page