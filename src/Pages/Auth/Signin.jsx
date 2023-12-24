import { Box, Button, Input, styled } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postSignin } from '../../Redux/authRedux/authAction'


const OuterContainer=styled(Box)(({theme})=>({
border:"2px solid red",
justifyContent:"center",
display:"flex",

  [theme.breakpoints.down("xl")]:{

  },
  [theme.breakpoints.down("lg")]:{
    
  },
  [theme.breakpoints.down("md")]:{
    
  },
  [theme.breakpoints.down("sm")]:{
    
  },
  [theme.breakpoints.down("xs")]:{
    
  },
}))

const InnerContainer=styled(Box)(({theme})=>({
  border:"2px solid black",
  display:"flex",
  flexDirection:"column",
  width:"50%",
    [theme.breakpoints.down("xl")]:{
  
    },
    [theme.breakpoints.down("lg")]:{
      
    },
    [theme.breakpoints.down("md")]:{
      
    },
    [theme.breakpoints.down("sm")]:{
      
    },
    [theme.breakpoints.down("xs")]:{
      
    },
  }))

  const ButtonBox=styled(Button)(({theme})=>({
    border:"2px solid blue",
      [theme.breakpoints.down("xl")]:{
    
      },
      [theme.breakpoints.down("lg")]:{
        
      },
      [theme.breakpoints.down("md")]:{
        
      },
      [theme.breakpoints.down("sm")]:{
        
      },
      [theme.breakpoints.down("xs")]:{
        
      },
    }))

function Signin() {
  const navigate=useNavigate()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const dispatch=useDispatch()
  const token=localStorage.getItem("token")
  const data=localStorage.getItem("data")

 

  console.log("userData",data)
  

  const handleEmail=(e)=>{
    let value=e.target.value 
    setEmail(value)
  }
  
  const handlePassword=(e)=>{
    let value=e.target.value 
    setPassword(value)
  }

  const handleSignin=()=>{
    let data={
      email:email,
      password:password
    }
    dispatch(postSignin(data))
    navigate('/dashboard')
  }

  return (
    <OuterContainer>

      <InnerContainer>
     <Input onChange={handleEmail} placeholder='Email'/>
     <Input onChange={handlePassword} placeholder='Password'/>
     <ButtonBox onClick={handleSignin}>SignIn</ButtonBox>
      </InnerContainer>


    </OuterContainer>
  )
}

export default Signin