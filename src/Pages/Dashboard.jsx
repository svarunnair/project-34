import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const OuterContainer = styled(Box)(({ theme }) => ({

  justifyContent: "center",
 
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InnerDiv = styled(Box)(({ theme }) => ({

  justifyContent: "center",
  display:"flex",
  justifyContent:"center",
  paddingTop:30,
 
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const MenuBar = styled(Box)(({ theme }) => ({
// border:"2px solid red",
  display: "flex",
  paddingBottom:30,
  justifyContent:"space-between",
  background:"#778899",
  height:45,
  
  
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    display:"none",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InnerContainer = styled(Box)(({ theme }) => ({
 
  display: "flex",
  flexDirection: "column",
  padding:50,
  gap:20,
  background:"#b0c4de",
  borderRadius:20,
 
 
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextData = styled(Button)(({ theme }) => ({
  border: "1px solid c",
  width: "100%",
  borderRadius:20,
  padding:10,
  color:'#1E90FF',
  background:"#FFFAF0",
  ":hover":{color:"white",background:"#1E90FF"},

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextMenu = styled(Typography)(({ theme }) => ({
  fontSize:15,
  fontWeight:600,
  color:"white",
  padding:10,
  cursor:"pointer",
  ":hover":{color:"#87CEFA",},
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
  
  },
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
      <MenuBar>

        <TextMenu>HOME</TextMenu>
        <TextMenu>CONTACT</TextMenu>
        <TextMenu>BOOOKING</TextMenu>
        <TextMenu>ENQUIERY</TextMenu>
        <TextMenu>ABOUT US</TextMenu>
        <TextMenu>BRANCHES</TextMenu>
        <TextMenu>BOOOKING</TextMenu>
        <TextMenu><MenuIcon/>MENU</TextMenu>


      </MenuBar>
<InnerDiv>
      <InnerContainer>
        <TextData onClick={handleDepartment}>Department Details and List</TextData>
        <TextData onClick={handleAssets}>Assets Details and List</TextData>
        <TextData onClick={handleService}>Services Details and List</TextData>
        <TextData onClick={handleWarrenty}>Warrenty Details and List</TextData>
      </InnerContainer>
      </InnerDiv>
    </OuterContainer>
  );
}

export default Dashboard;
