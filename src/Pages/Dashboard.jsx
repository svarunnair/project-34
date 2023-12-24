import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const OuterContainer = styled(Box)(({ theme }) => ({
  border: "1px solid red",
  display: "flex",
  justifyContent: "center",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  border: "1px solid blue",
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextData = styled(Button)(({ theme }) => ({
  border: "1px solid black",
  width: "100%",

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
