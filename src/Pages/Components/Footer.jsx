import { Box, Typography, styled } from '@mui/material';
import React from 'react'


const OuterContainer = styled(Box)(({ theme }) => ({
//    border:'2px solid red',
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  
const InnerContainer = styled(Box)(({ theme }) => ({
    // border:'2px solid green',
    display: "flex",
    gap:130,
    padding:50,
    background:"#87CEFA",
    
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
        display: "grid",
        gridTemplateColumns:"repeat(2,1fr)",
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const FirstBox = styled(Box)(({ theme }) => ({
    // border:'2px solid blue',
    textAlign:"left",
    
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const SecondBox = styled(Box)(({ theme }) => ({
    // border:'2px solid blue',
    textAlign:"left",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const ThirdBox = styled(Box)(({ theme }) => ({
    // border:'2px solid blue',
    textAlign:"left",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const FourthBox = styled(Box)(({ theme }) => ({
    // border:'2px solid blue',
    textAlign:"left",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const TextBox = styled(Typography)(({ theme }) => ({
    color:"white",
   ":hover":{textDecoration:"underline"},
    
    cursor:"pointer",
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const BottomDiv = styled(Box)(({ theme }) => ({
    // border:'2px solid yellow',
    height:50,
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  

function Footer() {
  return (
    <OuterContainer>


        <InnerContainer>

            <FirstBox>
                <TextBox sx={{fontSize:15,fontWeight:600,paddingBottom:1, ":hover":{ textDecoration:'none'},}}>ABOUT US</TextBox>
                <TextBox>Genesis</TextBox>
                <TextBox>Board Members</TextBox>
                <TextBox>Vision & Mission</TextBox>
                <TextBox>TMM Core Values</TextBox>
                <TextBox>Quality Policy</TextBox>
             
            </FirstBox>
            <SecondBox>
            <TextBox sx={{fontSize:15,fontWeight:600,paddingBottom:1, ":hover":{ textDecoration:'none'},}}>APPOINTMENT</TextBox>
                <TextBox>Book an Appointment</TextBox>
                <TextBox>Departments</TextBox>
                <TextBox>Find a doctor</TextBox>
                <TextBox>Health Packages</TextBox>
               
            </SecondBox>
            <ThirdBox>
            <TextBox sx={{fontSize:15,fontWeight:600,paddingBottom:1, ":hover":{ textDecoration:'none'},}}> GALLERY</TextBox>
                <TextBox>Videos</TextBox>
                <TextBox>Photos</TextBox>
                <TextBox>TMM Patient Testimonials</TextBox>
                <TextBox>TMM Doctors Speak</TextBox>
                
            </ThirdBox>
            <FourthBox>
            <TextBox sx={{fontSize:15,fontWeight:600,paddingBottom:1, ":hover":{ textDecoration:'none'},}}>CONTACT US</TextBox>
                <TextBox>Contact details</TextBox>
                <TextBox>Feedback</TextBox>
                
            </FourthBox>


        </InnerContainer>

        <BottomDiv>

        <TextBox sx={{color:'black'}}>© 2024 www.tmmhospital.org</TextBox>

        </BottomDiv>



    </OuterContainer>
  )
}

export default Footer