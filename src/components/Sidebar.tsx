import React from 'react'
// import { Calendar, ChevronDown, Home, Inbox, Search, Settings } from "lucide-react"

// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
//   } from "@/components/ui/accordion"
import Link from 'next/link'
import Image from 'next/image'


  const items = [
    {
      title: "Dashboard",
      url: "/",
      icon: "/house.svg",
    },
    {
      title: "Cooperative staff",
      url: "/staff",
      icon: '/circle-user.svg',
    },

    {
      title: "Customers",
      url: "/customer",
      icon: '/contact.svg'
  },
    
    {
      title: "Loans",
      url: "/loan",
      icon: 'banknote.svg',
    },

    {
      title: "Savings",
      url: "/saving",
      icon: '/piggy-bank.svg',
    },

    {
        title: "Investment",
        url: "/investments",
        icon: '/card.svg',
    },
    
    // {
    //   title: "Branches",
    //   url: "/branches",
    //   icon: Inbox,
    // },
    
    {
      title: "Settings",
      url: "/setting",
      icon: '/settings.svg'
    },
  ]
  

const Sidebar = () => {
  return (
    <section className='hidden md:block fixed bg-sidebar shadow-2xl w-[250px] h-screen px-4 py-5   rounded-lg'>
        <div className=''>
            <h1 className='text-[28px] mt-4 pb-5 border-b'>Cooperative</h1>

            <div className='grid gap-y-4 mt-10'>
                {
                    items.map(item=>{
                      const {title,url}=item
                        return(
                            <div key={title}>
                              <Link href={url} className='text-primary'> <p className='cursor-pointer hover:bg-muted py-3 px-2 rounded-md shadow-sm text-sidebar-primary flex gap-4'><Image src={item.icon} alt='icon' width={25} height={25} className='text-white'/>{title}
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