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

const staffs = [
  {
    staffId: "INV001",
    firstName: "Christfavour ",
    lastname: "Oloba",
    country: "Nigeria",
    gender: "Male",
    age:'50',
    institution:'Unilorin',
    url:'#'
  },
  {
    staffId: "INV002",
    firstName: "Christfavour ",
    lastname: "Oloba",
    country: "Nigeria",
    gender: "Male",
    age:'50',
    institution:'Unilorin',
    url:'#'
  },
  {
    staffId: "INV003",
    firstName: "Christfavour ",
    lastname: "Oloba",
    country: "Nigeria",
    gender: "Male",
    age:'50',
    institution:'Unilorin',
    url:'#'
  },
  {
    staffId: "INV004",
    firstName: "Christfavour ",
    lastname: "Oloba",
    country: "Nigeria",
    gender: "Male",
    age:'50',
    institution:'Unilorin',
    url:'#'
  },
 
]

 const StaffTable= () => {
  return (
    <Table>
      <TableCaption>A list of your recent staffs.</TableCaption>
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
        {staffs.map((staff) => (
          <TableRow key={staff.staffId}>
            <TableCell className="">{staff.firstName}</TableCell>
            <TableCell>{staff.lastname}</TableCell>
            <TableCell>{staff.country}</TableCell>
            <TableCell className="">{staff.gender}</TableCell>
            <TableCell>{staff.age}</TableCell>
            <TableCell>{staff.institution}</TableCell>
            <TableCell><Link href={staff.url}><Button>View more</Button></Link></TableCell>

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

export default StaffTable
