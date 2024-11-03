import React from 'react'
import SavingTable from '../component/table/SavingTable'

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
import { SearchIcon } from 'lucide-react'
import { ThemeSwitch } from '../component/ThemeSwitch'

const page = () => {
  return (
    <section className=' sections'>
      <div className='navbar'>
        <h2 className='text-[36px]'>Savings</h2>
        <div className='flex gap-4 items-center'>
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
          <div className='flex bg-popover shadow-lg py-3 px-4 rounded-full gap-4'>
            <div className='flex items-center bg-input/50 px-2 rounded-full'>
              <SearchIcon size={20}/>
              <input type="text" placeholder='Search'  className='bg-transparent outline-none px-2'/>
            </div>
            <ThemeSwitch />
          </div>
        </div>
      </div>
      
      <div className='layer2'>
        
        <SavingTable/>
        
      </div>
    </section>
  )
}

export default page