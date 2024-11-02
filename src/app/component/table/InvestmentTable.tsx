import { Button } from "@/components/ui/button"
import Link from "next/link"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    // TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const investments = [
    {
      investorId: "INV001",
      initialInvestment: 300,
      currentBalance: 250.00,
      monthlyInterestRate: 0.02,
      lateFeeRate:0.1,
      investmentStartDate:'March, 2023',
      nextInterestDate:'September, 2024',
      url:'#'
    },
    {
      investmentId: "INV002",
      initialInvestment: 300,
      currentBalance: 250.00,
      monthlyInterestRate: 0.02,
      lateFeeRate:0.1,
      investmentStartDate:'March, 2023',
      nextInterestDate:'September, 2024',
      url:'#'
    },
    {
      investmentId: "INV003",
      initialInvestment: 300,
      currentBalance: 250.00,
      monthlyInterestRate: 0.02,
      lateFeeRate:0.1,
      investmentStartDate:'March, 2023',
      nextInterestDate:'September, 2024',
      url:'#'
    },
    {
      investmentId: "INV004",
      initialInvestment: 300,
      currentBalance: 250.00,
      monthlyInterestRate: 0.02,
      lateFeeRate:0.1,
      investmentStartDate:'March, 2023',
      nextInterestDate:'September, 2024',
      url:'#'
    },
   
  ]
  
   const InvestmentTable= () => {
    return (
      <Table>
        <TableCaption>A list of your recent investments.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Initial Investment</TableHead>
            <TableHead>Current Balance</TableHead>
            <TableHead>Monthly Interest Rate</TableHead>
            <TableHead className="">Late Fee Rate</TableHead>
            <TableHead>Investment Start Date</TableHead>
            <TableHead>Next Interest Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {investments.map((investment) => (
            <TableRow key={investment.investmentId}>
              <TableCell className="">{investment.initialInvestment}</TableCell>
              <TableCell>{investment.currentBalance}</TableCell>
              <TableCell>{investment.monthlyInterestRate}</TableCell>
              <TableCell className="">{investment.lateFeeRate}</TableCell>
              <TableCell>{investment.investmentStartDate}</TableCell>
              <TableCell>{investment.nextInterestDate}</TableCell>
              <TableCell><Link href={investment.url}><Button>View more</Button></Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    )
  }

  export default InvestmentTable
  