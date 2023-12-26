import { Box, Button, Input, Typography, styled } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postDepartment } from '../Redux/data/action';
import { useNavigate } from 'react-router-dom';


const OuterContainer = styled(Box)(({ theme }) => ({
    
    display:"flex",
    justifyContent:"center",
    paddingTop:100,
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const InnerContainer = styled(Box)(({ theme }) => ({
    border: "1px solid grey",
    display:"flex",
    flexDirection:"column",
    width:"40%",
    padding:30,
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      width:"70%",
    },
    [theme.breakpoints.down("sm")]: {
      width:"90%",
    },
    [theme.breakpoints.down("xs")]: {},
  }));

  const TextDetail = styled(Typography)(({ theme }) => ({
    textTransform:"uppercase",
  
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
<TextDetail>Add department details</TextDetail>
<Input onChange={handleDep} placeholder='Department'/>
<Input onChange={handleIncharge} placeholder='Incharge'/>
<Input onChange={handleDescrp} placeholder='Description'/>
<Button sx={{":hover":{background:"#1E90FF",color:"white"}}} onClick={handleSubmit}>Submit</Button>

</InnerContainer>


    </OuterContainer>
  )
}

export default AddDepartment