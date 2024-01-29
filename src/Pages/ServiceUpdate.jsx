import { Box, Button, OutlinedInput, styled } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { patchService } from "../Redux/data/action";

const OuterContainer = styled(Box)(({ theme }) => ({
//   border: "2px solid red",
  display:"flex",
  justifyContent:"center",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InnerDiv = styled(Box)(({ theme }) => ({
    // border: "2px solid green",
    display:"flex",
    flexDirection:"column",
    width:"50%",
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

function ServiceUpdate() {
  const params = useParams();
  const [des,setDes]=useState('')
  const [status,setStatus]=useState('')
  const [issue,setIssue]=useState('')
  const dispatch=useDispatch()
  const navigate=useNavigate()




  const handleDes=(e)=>{
     let value=e.target.value 
     setDes(value)
  }
  const handleStatus=(e)=>{
    let value=e.target.value 
    setStatus(value)
 }
 const handleIssue=(e)=>{
    let value=e.target.value 
    setIssue(value)
 }

 const handleClick=()=>{
    let data={
        description:des,
  status:status,
  issue:issue,
    }
    dispatch(patchService(params._id,data))    
    alert('Status updates')
    navigate(-1)
 }

  console.log("parmzz", params);
  return (
    <OuterContainer>
      <InnerDiv>

        <OutlinedInput onChange={handleDes} placeholder="Description"/>
        <OutlinedInput onChange={handleStatus} placeholder="Status"/>
        <OutlinedInput onChange={handleIssue} placeholder="Issue"/>
        <Button onClick={handleClick}>Submit</Button>


      </InnerDiv>
    </OuterContainer>
  );
}

export default ServiceUpdate;
