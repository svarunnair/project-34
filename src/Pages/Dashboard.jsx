import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const OuterContainer = styled(Box)(({ theme }) => ({

  display: "flex",
  justifyContent: "center",
  paddingTop:50,
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InnerContainer = styled(Box)(({ theme }) => ({
 
  display: "flex",
  flexDirection: "column",
  padding:50,
  gap:20,
  background:"#FFFAF0",
 
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextData = styled(Button)(({ theme }) => ({
  border: "1px solid #1E90FF",
  width: "100%",
  borderRadius:20,
  padding:10,
  ":hover":{color:"white",background:"#1E90FF"},

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

function Dashboard() {
    const navigate=useNavigate()


    const handleDepartment=()=>{
        navigate('/department')
    }
    const handleAssets=()=>{
        navigate('/assets')
    }
    const handleService=()=>{
        navigate('/service')
    }
    const handleWarrenty=()=>{
        navigate('/warrenty')
    }
  return (
    <OuterContainer>
      <InnerContainer>
        <TextData onClick={handleDepartment}>Department Details and List</TextData>
        <TextData onClick={handleAssets}>Assets Details and List</TextData>
        <TextData onClick={handleService}>Services Details and List</TextData>
        <TextData onClick={handleWarrenty}>Warrenty Details and List</TextData>
      </InnerContainer>
    </OuterContainer>
  );
}

export default Dashboard;
