import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

function EnquiryList({data}) {
  return (
    <>
    <div className='bg-slate-500 rounded'>

     <div className="overflow-x-auto p-2">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Sno</TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Email</TableHeadCell>
            <TableHeadCell>number</TableHeadCell>
            <TableHeadCell>message</TableHeadCell>
            <TableHeadCell>edit</TableHeadCell>
            <TableHeadCell>Delete</TableHeadCell>
           
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          {data.length > 0 ? <>
          
                    {data.map((items , index)=>{
            return(
              <>
     <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {index + 1}
            </TableCell>
            <TableCell>{items.name}</TableCell>
            <TableCell>{items.email}</TableCell>
            <TableCell>{items.number}</TableCell>
            <TableCell>{items.message}</TableCell>
            <TableCell>
             Edit
            </TableCell>
            <TableCell>
             Delete
            </TableCell>
          </TableRow>
              </>
            )
          })}

          </> : <>
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell colSpan={"7"} className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <h2>not Data Found</h2>
            </TableCell>
          </TableRow>
          </>}

     
        
        </TableBody>
      </Table>
    </div>
    </div>
    </>
  )
}

export default EnquiryList