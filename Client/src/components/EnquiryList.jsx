import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import axios from 'axios';

function EnquiryList({data , getEnquiry , Swal}) {
const deleteRow = (Id) =>{
  Swal.fire({
    title: "Do you want to save the changes?",
    showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Save",
  denyButtonText: `Don't save`
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    axios.delete(`http://localhost:8500/api/website/enquiry/delete/${Id}`).then((res)=>{
      console.log(res);
    })
    Swal.fire("Saved!", "", "success");
  }
  
  else if (result.isDenied) Swal.fire("Changes are not saved", "", "info");
});
}

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
            <a href="#" onClick={()=>deleteRow(items._id)} className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Delete
              </a>
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
          </>
          }
        </TableBody>
      </Table>
    </div>
    </div>
    </>
  )
}

export default EnquiryList