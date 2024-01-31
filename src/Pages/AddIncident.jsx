import { Box, Button, OutlinedInput, styled } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { postIncident } from '../Redux/data/action';

const OuterContainer = styled(Box)(({ theme }) => ({
    display:"flex",
    
    justifyContent:"center",
 
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const InnerContainer = styled(Box)(({ theme }) => ({

    display:"flex",
    flexDirection:"column",
   
    width:"50%",
 
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

function AddIncident() {
    const params=useParams()
    const [isseu,setIssue]=useState('')
    const [status,setStatus]=useState('')
    const [des,setDes]=useState('')
    const dispatch=useDispatch()


    const handleIssue=(e)=>{
        let value=e.target.value 
        setIssue(value)
    }
    const handleStatus=(e)=>{
        let value=e.target.value 
        setStatus(value)
    }
    const handleDes=(e)=>{
        let value=e.target.value 
        setDes(value)
    }

    const handleSubmit=()=>{
        let data={
            issue:isseu,
            status:status,
            description:des,
            assetId:params._id
        }
     dispatch(postIncident(data))

    }

    console.log("params",params)

  return (
    <OuterContainer>

        <InnerContainer>

            <OutlinedInput onChange={handleIssue} placeholder='Issue'/>
            <OutlinedInput onChange={handleStatus} placeholder='Status'/>
            <OutlinedInput onChange={handleDes} placeholder='Description'/>
            <Button onClick={handleSubmit}>Submit</Button>
      


        </InnerContainer>




    </OuterContainer>
  )
}

export default AddIncident