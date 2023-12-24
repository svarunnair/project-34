import { Box, Button, Input, styled } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postDepartment } from '../Redux/data/action';
import { useNavigate } from 'react-router-dom';


const OuterContainer = styled(Box)(({ theme }) => ({
    border: "1px solid black",
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const InnerContainer = styled(Box)(({ theme }) => ({
    border: "1px solid blue",
    display:"flex",
    flexDirection:"column",
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
function AddDepartment() {
    const [dep,setDep]=useState('')
    const [incharge,setIncharge]=useState('')
    const [discrip,setdDiscrip]=useState('')
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const handleDep=(e)=>{
        let value=e.target.value 
        setDep(value)
    }
    const handleIncharge=(e)=>{
        let value=e.target.value 
        setIncharge(value)
    }
    const handleDescrp=(e)=>{
        let value=e.target.value 
        setdDiscrip(value)
    }
    const handleSubmit=()=>{
        let data={
            department:dep,
            incharge:incharge,
            description:discrip
        }
       dispatch(postDepartment(data))
       alert('data saved')
    }

  return (
    <OuterContainer>

<InnerContainer>

<Input onChange={handleDep} placeholder='Department'/>
<Input onChange={handleIncharge} placeholder='Incharge'/>
<Input onChange={handleDescrp} placeholder='Description'/>
<Button onClick={handleSubmit}>Submit</Button>

</InnerContainer>


    </OuterContainer>
  )
}

export default AddDepartment