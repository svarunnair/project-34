import { Box, Button, Typography, styled } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDepartment } from "../Redux/data/action";

const OuterContainer = styled(Box)(({ theme }) => ({
  border: "1px solid blue",
  display: "flex",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  border: "1px solid red",
  display: "flex",
  flexDirection: "column",
  

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextBox = styled(Typography)(({ theme }) => ({
  border: "1px solid yellow",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const FirstBox = styled(Box)(({ theme }) => ({
    border: "1px solid black",
    display:"flex",
    justifyContent:"center",
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const ButtonBox = styled(Button)(({ theme }) => ({
    border: "1px solid black",
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));


  const DetailBox = styled(Box)(({ theme }) => ({
    border: "1px solid red",
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const TextDetail = styled(Typography)(({ theme }) => ({
    border: "1px solid yellow",
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const MapBox = styled(Box)(({ theme }) => ({
    border: "1px solid red",
  
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


    useEffect(()=>{
        dispatch(getDepartment())
    },[])

  return (
    <OuterContainer>
      <InnerContainer>
        <FirstBox>
        <TextBox>Department details</TextBox>
        <ButtonBox onClick={handleAdd}>Add department</ButtonBox>
        </FirstBox>

<DetailBox>

{depData.map((item)=>(
    <MapBox>
    <TextDetail>Department : {item.department}</TextDetail>
    <TextDetail>Incharge : {item.incharge}</TextDetail>
    <TextDetail>Description : {item.description}</TextDetail>
    </MapBox>
))}

</DetailBox>



       
      </InnerContainer>
    </OuterContainer>
  );
}

export default Department;
