import { Box, Button, Input, Typography, styled } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postAssets, postService } from '../Redux/data/action';
import { useNavigate } from 'react-router-dom';

const OuterContainer = styled(Box)(({ theme }) => ({
    border: "1px solid red",
    display:"flex",
    justifyContent:'center',
  
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));


  const TextBox = styled(Typography)(({ theme }) => ({
 
    
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
  width:"40%",
  borderRadius:20,

  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
function AddAssets() {

    const[name,setName]=useState('')
    const[dep,setDep]=useState('')
    const[brand,setBrand]=useState('')
    const dispatch=useDispatch()
   const navigate=useNavigate()

  
    const handleName=(e)=>{
        let value=e.target.value 
        setName(value)
    }
    const handleDep=(e)=>{
        let value=e.target.value 
        setDep(value)
    }

    const handleBrand=(e)=>{
        let value=e.target.value 
        setBrand(value)
    }
    const handleService=()=>{
      navigate('/addservice')
    }

    const handleSubmit=()=>{
        let data={
            asset_name:name,
            department:dep,
            brand:brand
        }   
        dispatch(postAssets(data)) 
        alert('data saved')   
    }

   


  return (
    <OuterContainer>

        <InnerContainer>
        <TextBox sx={{fontSize:25,}}>ADD ASSET DETAILS</TextBox>
      
      <Input onChange={handleName} placeholder='Asset name'/>
      <Input onChange={handleDep} placeholder='Department'/>
      <Input onChange={handleBrand} placeholder='Brand'/>
      <Button onClick={handleService}>Send Service Request</Button>
      

    
  
      {/* <Button onClick={handleService} sx={{":hover":{ background:"#1E90FF",color:"white"}}}>Service details</Button> */}
      <Button onClick={handleSubmit}>Submit</Button>
      

        </InnerContainer>

    </OuterContainer>
  )
}

export default AddAssets