import { Box, Button, Typography, styled } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteDepartment, getDepartment } from "../Redux/data/action";

const OuterContainer = styled(Box)(({ theme }) => ({
  // border: "1px solid blue",
  display: "flex",
  justifyContent:"center",
  paddingTop:20,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InnerContainer = styled(Box)(({ theme }) => ({

  display: "flex",
  flexDirection: "column",
  justifyContent:"center",
  

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextBox = styled(Typography)(({ theme }) => ({
  // border: "1px solid yellow",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const FirstBox = styled(Box)(({ theme }) => ({
    // border: "1px solid black",
    display:"flex",
    justifyContent:"center",
    flexDirection:"column",
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const ButtonBox = styled(Button)(({ theme }) => ({
    border: "1px solid black",
  width:"50%",
 left:190,
 top:30,
 ":hover":{color:"white",background:"#1E90FF"},
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      left:120,
    },
    [theme.breakpoints.down("sm")]: {
      left:80,
    },
    [theme.breakpoints.down("xs")]: {},
  }));


  const DetailBox = styled(Box)(({ theme }) => ({
    // border: "1px solid red",
   display:"grid",
   gridTemplateColumns:"repeat(3,1fr)",
   padding:50,
   gap:30,
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns:"repeat(2,1fr)",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns:"repeat(1,1fr)",
    },
    [theme.breakpoints.down("xs")]: {},
  }));

  const TextDetail = styled(Typography)(({ theme }) => ({
 display:"flex",
    textTransform:"none",
    // justifyContent:"space-between",
    // textAlign:"left",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const MapBox = styled(Box)(({ theme }) => ({
    border: "1px solid #1E90FF",
    borderRadius:15,
    padding:20,
    gap:30,
   
  
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const ResultBox = styled(Typography)(({ theme }) => ({
    color:"grey",
    fontWeight:100,
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));


  
function Department() {
    const navigate=useNavigate()
    const depData=useSelector((store)=>store.data.dep)
    const dispatch=useDispatch()
  


    console.log("depData",depData)

    const handleAdd=()=>{
        navigate('/adddepartment')
    }
    const handleRemove=(_id)=>{
        dispatch(deleteDepartment(_id))
    }


    useEffect(()=>{
        dispatch(getDepartment())
    },[])

  return (
    <OuterContainer>
      <InnerContainer>
        <FirstBox>
        <TextBox sx={{fontWeight:100, fontSize:30, textTransform:"uppercase",}}>Department details</TextBox>
        <ButtonBox onClick={handleAdd}>Add department</ButtonBox>
        </FirstBox>

<DetailBox>

{depData.map((item)=>(
    <MapBox>

    <TextDetail>Department  : <ResultBox>{item.department}</ResultBox></TextDetail>
    <TextDetail>Incharge    :  <ResultBox>{item.incharge}</ResultBox></TextDetail>
    <TextDetail>Description : <ResultBox>{item.description}</ResultBox> </TextDetail>
    <Button sx={{textTransform:"none",":hover":{background:"#1E90FF",color:"white"}}} onClick={()=>handleRemove(item._id)}>Remove</Button>

    </MapBox>
))}

</DetailBox>



       
      </InnerContainer>
    </OuterContainer>
  );
}

export default Department;
