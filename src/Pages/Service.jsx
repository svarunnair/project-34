import { Box, Button, Typography, styled } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteService, getService } from '../Redux/data/action';
import { useNavigate } from 'react-router-dom';


const OuterContainer = styled(Box)(({ theme }) => ({
  // border: "1px solid blue",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const InnerContainer = styled(Box)(({ theme }) => ({
  // border: "2px solid green",
  paddingTop:20,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextBox = styled(Typography)(({ theme }) => ({
  // border: "1px solid red",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const MapData = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display:"grid",
  gridTemplateColumns:'repeat(3,1fr)',
  padding:50,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InnerDiv = styled(Box)(({ theme }) => ({
  border: "1px solid #1E90FF",
  width:"80%",
  borderRadius:20,
  

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));


const TextDetails = styled(Typography)(({ theme }) => ({

  textAlign:"left",
  padding:10,
  

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

function Service() {

  const serviceData=useSelector((store)=>store.data.getService)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  console.log("serviceData",serviceData)

  const handleDelete=(_id)=>{
    dispatch(deleteService(_id))
  }
  const handleEdit=(_id)=>{
      navigate(`/serviceupdate/${_id}`)
  }
  

  useEffect(()=>{
    dispatch(getService())
  },[])
  return (
    <OuterContainer>

      <InnerContainer>
<TextBox sx={{fontSize:20,fontWeight:600,paddingBottom:3,}}>Service Details</TextBox>

<MapData>

  {serviceData.map((item)=>(
    <InnerDiv>

     <TextDetails>Description : {item.description}</TextDetails> 
     <TextDetails>Issue : {item.issue}</TextDetails> 
     <TextDetails>Status : {item.status}</TextDetails> 
     <Button onClick={()=>handleEdit(item._id)}>Edit</Button>
     <Button onClick={()=>handleDelete(item._id)}>Delete</Button>

    
    </InnerDiv>
  ))}


</MapData>



      </InnerContainer>
    </OuterContainer>
  )
}

export default Service