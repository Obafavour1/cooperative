import { Button } from "@/components/ui/button"
import Link from 'next/link'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const loans = [
  {
    fullName: "Christfavour Oloba",
    email:'olobafavour@gmail.com',
    principalAmount: "400,000",
    outstandingBalance: "$250.00",
    interestRate: 0.1,
    defaultedFeeRate:0.02,
    termStateDate: 'January,2024',
    nextInterestDate:'March,2025',
    pendingPayment: 20,
    unpaidInterest:4,
    url:'#'
  },
  {
    fullName: "Christfavour Oloba",
    email:'olobafavour@gmail.com',
    principalAmount: "400,000",
    outstandingBalance: "$250.00",
    interestRate: 0.1,
    defaultedFeeRate:0.02,
    termStateDate: 'January,2024',
    nextInterestDate:'March,2025',
    pendingPayment: 20,
    unpaidInterest:4,
    url:'#'
  },
  {
    fullName: "Christfavour Oloba",
    email:'olobafavour@gmail.com',
    principalAmount: "400,000",
    outstandingBalance: "$250.00",
    interestRate: 0.1,
    defaultedFeeRate:0.02,
    termStateDate: 'January,2024',
    nextInterestDate:'March,2025',
    pendingPayment: 20,
    unpaidInterest:4,
    url:'#'
  },
  {
    fullName: "Christfavour Oloba",
    email:'olobafavour@gmail.com',
    principalAmount: "400,000",
    outstandingBalance: "$250.00",
    interestRate: 0.1,
    defaultedFeeRate:0.02,
    termStateDate: 'January,2024',
    nextInterestDate:'March,2025',
    pendingPayment: 20,
    unpaidInterest:4,
    url:'#'
  },
  {
    fullName: "Christfavour Oloba",
    email:'olobafavour@gmail.com',
    principalAmount: "400,000",
    outstandingBalance: "$250.00",
    interestRate: 0.1,
    defaultedFeeRate:0.02,
    termStateDate: 'January,2024',
    nextInterestDate:'March,2025',
    pendingPayment: 20,
    unpaidInterest:4,
    url:'#'
  },
  {
    fullName: "Christfavour Oloba",
    email:'olobafavour@gmail.com',
    principalAmount: "400,000",
    outstandingBalance: "$250.00",
    interestRate: 0.1,
    defaultedFeeRate:0.02,
    termStateDate: 'January,2024',
    nextInterestDate:'March,2025',
    pendingPayment: 20,
    unpaidInterest:4,
    url:'#'
  },
  {
    fullName: "Christfavour Oloba",
    email:'olobafavour@gmail.com',
    principalAmount: "400,000",
    outstandingBalance: "$250.00",
    interestRate: 0.1,
    defaultedFeeRate:0.02,
    termStartDate: 'January,2024',
    nextInterestDate:'March,2025',
    pendingPayment: 20,
    unpaidInterest:4,
    url:'#'
  },
]

 const LoanTable= () => {
  return (
    <Table className="">
      <TableCaption>A list of your recent loans.</TableCaption>
      <TableHeader>
        <TableRow className="text-bold">
          <TableHead className="">Full name</TableHead>
          {/* <TableHead>Email</TableHead> */}
          <TableHead>Principal Amount</TableHead>
          <TableHead className="">Outstanding Balance</TableHead>
          <TableHead>Interest Rate</TableHead>
          <TableHead>Defaulted Fee Rate</TableHead>
          <TableHead>Start Date</TableHead>
          <TableHead>Interest Date</TableHead>
          <TableHead>Pending Payment</TableHead>
          <TableHead>Unpaid Interest</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {loans.map((loan) => (
          <TableRow >
            <TableCell className="">{loan.fullName}</TableCell>
            {/* <TableCell className="">{loan.email}</TableCell> */}
            <TableCell>{loan.principalAmount}</TableCell>
            <TableCell>{loan.outstandingBalance}</TableCell>
            <TableCell className="">{loan.interestRate}</TableCell>
            <TableCell>{loan.defaultedFeeRate}</TableCell>
            <TableCell>{loan.termStartDate}</TableCell>
            <TableCell>{loan.nextInterestDate}</TableCell>
            <TableCell>{loan.pendingPayment}</TableCell>
            <TableCell>{loan.unpaidInterest}</TableCell>
          
            
            <TableCell><Link href={loan.url}><Button>View details</Button></Link></TableCell>

          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

export default LoanTable
