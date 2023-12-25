import { Box, Button, Typography, styled } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteService, getService } from '../Redux/data/action';


const OuterContainer = styled(Box)(({ theme }) => ({
  border: "1px solid blue",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const InnerContainer = styled(Box)(({ theme }) => ({
  border: "1px solid red",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextBox = styled(Typography)(({ theme }) => ({
  border: "1px solid red",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const MapData = styled(Box)(({ theme }) => ({
  border: "1px solid black",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InnerDiv = styled(Box)(({ theme }) => ({
  border: "3px solid red",
  

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));


const TextDetails = styled(Typography)(({ theme }) => ({
  

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

function Service() {

  const serviceData=useSelector((store)=>store.data.getService)
  const dispatch=useDispatch()

  console.log("serviceData",serviceData)

  const handleDelete=(_id)=>{
    dispatch(deleteService(_id))
  }
  

  useEffect(()=>{
    dispatch(getService())
  },[])
  return (
    <OuterContainer>

      <InnerContainer>
<TextBox>Service Details</TextBox>

<MapData>

  {serviceData.map((item)=>(
    <InnerDiv>

     <TextDetails>Description : {item.description}</TextDetails> 
     <TextDetails>Issue : {item.issue}</TextDetails> 
     <TextDetails>Status : {item.status}</TextDetails> 
     <Button>Edit</Button>
     <Button onClick={()=>handleDelete(item._id)}>Delete</Button>

    
    </InnerDiv>
  ))}


</MapData>



      </InnerContainer>
    </OuterContainer>
  )
}

export default Service