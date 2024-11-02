import { Button } from '@/components/ui/button'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  // DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import CollateralForm from '@/app/component/forms/CollateralForm'
import RefereeForm from '@/app/component/forms/ReferenceForm'

const customers = [
    {
      customerId: "INV001",
      firstName: "Christfavour ",
      lastname: "Oloba",
      country: "Nigeria",
      gender: "Male",
      age:'50',
      institution:'Unilorin'
    },
    // {
    //   customerId: "INV002",
    //   firstName: "Christfavour ",
    //   lastname: "Oloba",
    //   country: "Nigeria",
    //   gender: "Male",
    //   age:'50',
    //   institution:'Unilorin'
    // },
    // {
    //   customerId: "INV003",
    //   firstName: "Christfavour ",
    //   lastname: "Oloba",
    //   country: "Nigeria",
    //   gender: "Male",
    //   age:'50',
    //   institution:'Unilorin'
    // },
    // {
    //   customerId: "INV004",
    //   firstName: "Christfavour ",
    //   lastname: "Oloba",
    //   country: "Nigeria",
    //   gender: "Male",
    //   age:'50',
    //   institution:'Unilorin'
    // },
   
  ]

const page = () => {
  return (
    <section className=' sections'>
      <div className='flex items-center justify-between'>
        <h2 className='heading2'>Customer Details</h2>
        <div className='flex gap-4'>
            {/* <Link href='/'><Button>Add Collateral</Button></Link> */}
            {/* <Link href='/'><Button>Add Referee</Button></Link> */}

            <Dialog >
              <DialogTrigger asChild>
                <Button >Add Referee</Button>
              </DialogTrigger>
              <DialogContent className="">
                <DialogHeader>
                  <DialogTitle>Add Referee Details</DialogTitle>
                  <DialogDescription>
                    Fill in all details below to add your Referee
                  </DialogDescription>
                </DialogHeader>
                <div className="w-full">
                 <RefereeForm/>
                </div>
                {/* <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter> */}
              </DialogContent>
            </Dialog>

            <Dialog >
              <DialogTrigger asChild>
                <Button >Add Collateral</Button>
              </DialogTrigger>
              <DialogContent className="">
                <DialogHeader>
                  <DialogTitle>Add Collateral Details</DialogTitle>
                  <DialogDescription>
                    Fill in all details below to add your collateral
                  </DialogDescription>
                </DialogHeader>
                <div className="w-full">
                 <CollateralForm/>
                </div>
                {/* <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter> */}
              </DialogContent>
            </Dialog>

        </div>
      </div>
      <div >
        {
            customers.map(customer=>{
                return(
                    <div key={customer.customerId} className='grid grid-cols-4 gap-y-4'>
                        <div className='flex gap-2'>
                            <p className='font-semibold'>First name:</p>
                            <p >{customer.firstName}</p>
                        </div>
                        <div className='flex gap-2'>
                            <p className='font-semibold'>Last name:</p>
                            <p >{customer.lastname}</p>
                        </div>
                        <div className='flex gap-2'>
                            <p className='font-semibold'>Country:</p>
                            <p>{customer.country}</p>
                        </div>
                        <div className='flex gap-2'>
                            <p className='font-semibold'>Gender:</p>
                            <p>{customer.gender}</p>
                        </div>
                        <div className='flex gap-2 '>
                            <p className='font-semibold'>Age:</p>
                            <p>{customer.age}</p>
                        </div>
                        <div className='flex gap-2'>
                            <p className='font-semibold'>Institution:</p>
                            <p>{customer.institution}</p>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </section>
  )
}

export default page