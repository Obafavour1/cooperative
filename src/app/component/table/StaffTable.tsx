'use client'
import { Button } from "@/components/ui/button"
import Link from "next/link"
// import axios from "axios"

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
  // const[loading,setLoading]=useState(false)
  // const [product,setProduct]=useState()
  // const apiUrl = 'https://cooperative-server-a77x.onrender.com/customers';

  // useEffect(()=>{
  //   const fetchData = async () =>{
  //     setLoading(true)
  //     try{
  //       const response = await axios.get(apiUrl)

  //       setProduct(response.status)
  //       setLoading(false)
  //       console.log(response.data)
  //     } catch (error){
  //       console.error('Error fetching custome data:',error)
  //     }
  //   };
  //   fetchData()
  // },[])

  // const card = product.map(Product=>{
  //   return(
  //     <div>{product.id}</div>
  //   )
  // })

  // axios.get(apiUrl).then(
  //   response=>{
  //     console.log('this went well')
  //   }
  // )
  



  return (
    <Table>
      
        {/* {loading? <h3>loading...</h3>: product.map((products,index) =>{
          return(
            <div >{products.index}</div>
          )
        })} */}
      

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
