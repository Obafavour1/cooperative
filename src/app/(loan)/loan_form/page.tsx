import LoanForm from "@/app/component/forms/LoanForm"
import { Button } from "@/components/ui/button"

const page = () => {
  return (
    <section className=' sections'>
      <h2 className='heading2'>Loan Form</h2>
      <div className="layer2">
        
        <LoanForm/>
        
      </div>
    </section>
  )
}

export default page