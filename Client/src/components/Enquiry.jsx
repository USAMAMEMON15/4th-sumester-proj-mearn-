import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Label, TextInput ,Textarea  } from "flowbite-react";
import EnquiryList from './EnquiryList';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify'; 

function Enquiry() {
  let [enquiry , setEnquiry] = useState([])
let [formData , setFormData] = useState({
  "name" : "",
  "email" : "",
  "number" : "",
  "message" : ""
})

    const saveEnquiry =(e)=>{
        e.preventDefault()
        
        axios.post(`http://localhost:8500/api/website/enquiry/insert` , formData).then((res)=>{
          toast.success("Enquiry has been inserted!");  
          console.log(res.data);
          getEnquiry()
        })
        setFormData({
          "name" : "",
          "email" : "",
          "number" : "",
          "message" : "",
        })
    }
    //Get Enquiry
    const getEnquiry = () =>{
      axios.get(`http://localhost:8500/api/website/enquiry/`).then((res)=>{
    return res.data
      }).then((data)=>{
        console.log(data.message);
        setEnquiry(data.message)
      })
    } 
    useEffect(()=>{
      getEnquiry()
    },[])

    const getVal = (e)=>{
      let oldData = {...formData};  
      let inputName = e.target.name;
      let inputValue = e.target.value
      oldData[inputName] = inputValue;
      setFormData(oldData);
    }
  return (
  <>
  <ToastContainer/>
    <h1 className='shadow-slate-500 shadow-1xl font-bold py-3 text-[40px] text-center'>Enquiry Form</h1>
    <div className=' grid grid-cols-[30%_auto] p-3 gap-2'>
        <div className=' bg-slate-500 rounded p-2'>
            <h2 className='text-white text-[30px] text-center'>Enquiry Form</h2>
            <form action="" onSubmit={saveEnquiry}>
                      <div className='py-3'>
                        <Label htmlFor="email1" className='text-white'>Your Name</Label>
                         <TextInput  value={formData.name} onChange={getVal} name='name'  type="text" placeholder="Enter Your Name" required />
                      </div>
                      <div className='py-3'>
                        <Label className='text-white'>Your Email</Label>
                         <TextInput  value={formData.email} onChange={getVal} name='email' type="text" placeholder="Enter Your Email" required />
                      </div>
                      <div className='py-3'>
                        <Label className='text-white'>Your Number</Label>
                         <TextInput  value={formData.number} onChange={getVal} name='number' type="number" placeholder="Enter Your number" required />
                      </div>
                        <div className='py-3'>
                        <Label className='text-white'>your Message</Label>
                        <Textarea value={formData.message} onChange={getVal} name='message' placeholder="Leave a comment..." required rows={4} />
                      </div>
                     <Button type="submit" className='w-[100%]
                     '>Register new account</Button>
            </form>
        </div>
    <EnquiryList data={enquiry}/>
    </div>
  </>
  )
}

export default Enquiry