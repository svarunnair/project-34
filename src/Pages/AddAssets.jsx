import { Box, Button, Input, styled } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postAssets } from '../Redux/data/action';

const OuterContainer = styled(Box)(({ theme }) => ({
    border: "1px solid red",
  
  
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
function AddAssets() {

    const[name,setName]=useState('')
    const[dep,setDep]=useState('')
    const[service,setService]=useState('')
    const[brand,setBrand]=useState('')
    const dispatch=useDispatch()
  
    const handleName=(e)=>{
        let value=e.target.value 
        setName(value)
    }
    const handleDep=(e)=>{
        let value=e.target.value 
        setDep(value)
    }
    // const handleService=(e)=>{
    //     let value=e.target.value 
    //     setService(value)
    // }
    const handleBrand=(e)=>{
        let value=e.target.value 
        setBrand(value)
    }
    const handleSubmit=()=>{
        let data={
            asset_name:name,
            department:dep,
            service:[
              {
                description:"",
  status:"",
  issue:"",
assetId:""

              }
            ],
            brand:brand
        }
        dispatch(postAssets(data))  
        alert('data saved')   
    }

  return (
    <OuterContainer>

        <InnerContainer>
      
      <Input onChange={handleName} placeholder='Asset name'/>
      <Input onChange={handleDep} placeholder='Department'/>
      {/* <Input onChange={handleService} placeholder='Service'/> */}
      <Input onChange={handleBrand} placeholder='Brand'/>
      <Button onClick={handleSubmit}>Submit</Button>
      

        </InnerContainer>

    </OuterContainer>
  )
}

export default AddAssets