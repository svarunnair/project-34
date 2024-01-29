import { Box, Button, Input, styled } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { patchAsset, patchService, postService } from '../Redux/data/action';
import { useParams } from 'react-router-dom';

const OuterContainer = styled(Box)(({ theme }) => ({
    // border: "3px solid red",
  display:'flex',
  justifyContent:"center",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const InnerContainer = styled(Box)(({ theme }) => ({
    border: "1px solid #1E90FF",
    width:"50%",
    display:'flex',
    flexDirection:"column",
    padding:30,
    borderRadius:20,
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

function AddService() {
    const [dep,setDep]=useState('')
    const [issue,setIssue]=useState('')
    const [status,setStatus]=useState('')
    const dispatch=useDispatch()
    const params=useParams()

    console.log("paramszzzzzz",params)


    const handleDep=(e)=>{
        let value =e.target.value 
        setDep(value)
    }
    const handleIssue=(e)=>{
        let value =e.target.value 
        setIssue(value)
    }
    const handleStatus=(e)=>{
        let value =e.target.value 
        setStatus(value)
    }

    const handleSubmit=()=>{
        let data={
            description:dep,
            issue:issue,
            status:status,
           
        }
   dispatch(patchAsset(params._id,data))
    }

  return (
    <OuterContainer>

        <InnerContainer>
            <Input onChange={handleDep} placeholder='Description'/>
            <Input onChange={handleIssue} placeholder='Issue'/>
            <Input onChange={handleStatus} placeholder='Status'/>
            <Button onClick={handleSubmit} sx={{":hover":{background:"#1E90FF",color:"white"}}}>Submit</Button>
            
        </InnerContainer>

    </OuterContainer>
  )
}

export default AddService