import { Button } from "@/components/ui/button"
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
import Link from "next/link"
  
  const customers = [
    {
      customerId: "INV001",
      firstName: "Christfavour ",
      lastname: "Oloba",
      country: "Nigeria",
      gender: "Male",
      age:'50',
      institution:'Unilorin',
      url: '/customer_details'
    },
    {
      customerId: "INV002",
      firstName: "Christfavour ",
      lastname: "Oloba",
      country: "Nigeria",
      gender: "Male",
      age:'50',
      institution:'Unilorin',
      url: '/customer_details'
    },
    {
      customerId: "INV003",
      firstName: "Christfavour ",
      lastname: "Oloba",
      country: "Nigeria",
      gender: "Male",
      age:'50',
      institution:'Unilorin',
      url: '/customer_details'
    },
    {
      customerId: "INV004",
      firstName: "Christfavour ",
      lastname: "Oloba",
      country: "Nigeria",
      gender: "Male",
      age:'50',
      institution:'Unilorin',
      url: '/customer_details'
    },
   
  ]
  
   const CustomerTable= () => {
    return (
      <Table>
        <TableCaption>A list of your recent customers.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">First name</TableHead>
            <TableHead>Last name</TableHead>
            <TableHead>Country</TableHead>
            <TableHead className="">Gender</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Institution</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.customerId}>
              <TableCell className="">{customer.firstName}</TableCell>
              <TableCell>{customer.lastname}</TableCell>
              <TableCell>{customer.country}</TableCell>
              <TableCell className="">{customer.gender}</TableCell>
              <TableCell>{customer.age}</TableCell>
              <TableCell>{customer.institution}</TableCell>
              <TableCell>,<Link href={customer.url}><Button>View more</Button></Link></TableCell>
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
  
  export default CustomerTable
  