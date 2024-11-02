import CustomerForm from "@/app/component/forms/CustomerForm"
import { Button } from "@/components/ui/button"

const page = () => {
  return (
    <section className=' sections'>
      <h2 className='heading2'>Customer Form</h2>
      <div className="layer2">
        
        <CustomerForm/>
        
      </div>
    </section>
  )
}

export default page