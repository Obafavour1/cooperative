'use client'
import { Button } from "@/components/ui/button"
import Link from "next/link"
// import axios from "axios"
// import { CustomerInput } from "@/app/data"

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
// import { useEffect, useState } from "react"
// import { headers } from "next/headers"
// import { useEffect, useState } from "react"

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

//  const allStaffUrl= 'https://cooperative-server-a77x.onrender.com/cooperative-staff/all'

 const StaffTable= () => {
  // const[staffData, setStaffData]=useState<string| number| null>()
  // const [loading, setLoading] = useState(false);
  // const[error, setError] = useState<string>()

  // useEffect(()=>{
  //   const staffFetchApi = async () =>{
  //     setLoading(true)
  //     try{
  //       const response = await axios.get(
  //         allStaffUrl,
  //         {
  //           headers:{
  //             'Content-Type' : 'application/json'
  //           }
  //         }
  //       )
        
  //       if(response.status === 200 || response.status === 201){
  //         console.log(response.data.data)
  //         setStaffData(response.data.data)
  //       }
  //     } catch (err:any) {
  //       console.error('This is showing:', err);
  //       setError(err.message)
  //     } finally {
  //       setLoading(false);  // Ensure loading is stopped in both success and error cases
  //     }
  //     staffFetchApi()
  //   }
  // },[])
  



  return (
    <Table>
      
        {/* {loading? <h3>loading...</h3>: product.map((products,index) =>{
          return(
            <div >{products.index}</div>
          )
        })} */}
      

      <TableCaption>A list of your recent staffs.</TableCaption>
      <TableHeader>
        <TableRow className="text-lg">
          <TableHead className="">First name</TableHead>
          <TableHead>Last name</TableHead>
          <TableHead>Country</TableHead>
          <TableHead className="">Gender</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>Institution</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-lg">
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

        {/* <div>{staffData}</div>
        <div>{loading}</div>
        <div>{error}</div> */}
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
