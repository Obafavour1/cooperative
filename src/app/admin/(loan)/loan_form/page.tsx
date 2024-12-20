import LoanForm from "@/app/component/forms/LoanForm"
import { ThemeSwitch } from "@/app/component/ThemeSwitch"
// import { Button } from "@/components/ui/button"
import { SearchIcon } from "lucide-react"
// import Link from "next/link"


const page = () => {
  return (
    <section className=' sections'>
      <div className='navbar'>
          <h2 className='text-[36px]'>Loan Form</h2>
          <div className='flex gap-4 items-center'>
          {/* <Link href='/customer_form'><Button>Add customer</Button></Link> */}
          <div className='flex bg-popover shadow-lg py-3 px-4 rounded-full gap-4'>
            <div className='flex items-center bg-input/50 px-2 rounded-full'>
              <SearchIcon size={20}/>
              <input type="text" placeholder='Search'  className='bg-transparent outline-none px-2'/>
            </div>
            <ThemeSwitch />
          </div>
          </div>
        </div>
      <div className="layer2">
        
        <LoanForm/>
        
      </div>
    </section>
  )
}

export default page