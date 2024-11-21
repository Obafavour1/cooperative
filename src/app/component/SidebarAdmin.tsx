
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
      icon: '/banknote.svg',
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
    
    {
      title: "Branches",
      url: "/branches",
      icon: '/banknote.svg'
    },
    
    {
      title: "Settings",
      url: "/setting",
      icon: '/settings.svg'
    },
  ]
  


import { Button } from "@/components/ui/button"

import {
  Sheet,
  // SheetClose,
  SheetContent,
  // SheetDescription,
  // SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function SidebarAdmin() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle><h1 className='text-4xl text-primary mt-4 pb-5 border-b'>Cooperative</h1></SheetTitle>
          {/* <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription> */}
        </SheetHeader>
        <section 
        // className=' md:block fixed bg-sidebar shadow-2xl w-[250px] h-screen px-4 py-5   rounded-lg'
        >
            <div className=''>
                

                <div className='grid gap-y-4 mt-10'>
                    {
                        items.map(item=>{
                        const {title,url}=item
                            return(
                                <div key={title}>
                                <Link href={url} className='text-primary'> <p className='cursor-pointer hover:bg-popover py-3 px-2 rounded-md shadow-sm flex gap-4'><Image src={item.icon} alt='icon' width={25} height={25} className='text-white bg-white/80 rounded-full px-1'/>{title}
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
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  )
}

