import React from 'react'
// import { Calendar, ChevronDown, Home, Inbox, Search, Settings } from "lucide-react"

// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
//   } from "@/components/ui/accordion"
import Link from 'next/link'


  const items = [
    {
      title: "Dashboard",
      url: "/",
      // icon: "/assets/borrow",
    },
    // {
    //   title: "Branches",
    //   url: "/branches",
    //   icon: Inbox,
    // },
    
    {
      title: "Loans",
      url: "/loan",
      // icon: Search,
    },
    {
        title: "Investment",
        url: "/investments",
        // icon: Settings,
    },
    {
        title: "Savings",
        url: "/saving",
        // icon: Settings,
    },
    {
      title: "Staff",
      url: "/staff",
      // icon: Calendar,
    },
    {
        title: "Customers",
        url: "/customer",
        // icon: Settings,
    },
    {
      title: "Settings",
      url: "/setting",
      // icon: Settings,
    },
  ]
  

const Sidebar = () => {
  return (
    <section className='fixed shadow-2xl w-[250px] h-screen px-4 py-5   rounded-lg'>
        <div className=''>
            <h1 className='text-[28px] mt-6 pb-5 border-b'>Cooperative</h1>

            <div className='grid gap-y-8 mt-10'>
                {
                    items.map(item=>{
                      const {title,url}=item
                        return(
                            <div key={title}>
                              <Link href={url}> <p className='cursor-pointer hover:bg-neutral-200/60 p-1 px-2 rounded-md shadow-sm flex gap-4'><p></p>{title}
                                {/* <ChevronDown className='w-4'/> */}
                                </p></Link>
                            </div>
                        )
                    })
                }
            </div>
            {/* <Accordion  collapsible>
                <AccordionItem >
                {
                    items.map(item =>{
                        return(
                           <div>
                             <AccordionTrigger>{item.title}</AccordionTrigger>
                             <AccordionContent>{item.title}</AccordionContent>
                           </div>
                        )
                    })
                }
                </AccordionItem>
            </Accordion> */}

        </div>
    </section>
  )
}

export default Sidebar