import { Box, Button, Input, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postSignup } from '../../Redux/authRedux/authAction'


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

  const TextBox=styled(Typography)(({theme})=>({
    border:"2px solid yellow",
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
      border:"2px solid red",
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
    const InnerBox=styled(Box)(({theme})=>({
      border:"2px solid black",
      display:"flex",
      flexDirection:"column",
      width:"50%",
      justifyContent:"center",
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

function Signup() {

  const [hospital,setHospital]=useState('')
  const [name,setName]=useState('')
  const [mobile,setMobile]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const dispatch=useDispatch()
  const navigate=useNavigate()
  


  const handleHospital=(e)=>{
    let value=e.target.value 
    setHospital(value)
  }
  const handleName=(e)=>{
    let value=e.target.value 
    setName(value)
  }
  const handleMobile=(e)=>{
    let value=e.target.value 
    setMobile(value)
  }
  const handleEmail=(e)=>{
    let value=e.target.value 
    setEmail(value)
  }
  const handlePassword=(e)=>{
    let value=e.target.value 
    setPassword(value)
  }
  const handleSignup=()=>{
    let data={
      hospital:hospital,
      name:name,
      mobile:mobile,
      email:email,
      password:password,
    }
   dispatch(postSignup(data))
   navigate('/signin')
  }
  

  return (
    <OuterContainer>

<InnerBox>
<TextBox>Signin</TextBox>
<Input onChange={handleHospital} placeholder='Hospital Name'/>
<Input onChange={handleName} placeholder='Name'/>
<Input onChange={handleMobile} placeholder='Mobile number'/>
<Input onChange={handleEmail} placeholder='Email'/>
<Input onChange={handlePassword} placeholder='Password'/>
<ButtonBox onClick={handleSignup}>Signup</ButtonBox>
</InnerBox>

    </OuterContainer>
  )
}

export default Signup