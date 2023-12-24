import { Box, Button, Typography, styled } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAssets } from '../Redux/data/action';

const OuterContainer = styled(Box)(({ theme }) => ({
    border: "1px solid blue",
    display: "flex",
    flexDirection: "column",
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const InnerBox = styled(Box)(({ theme }) => ({
    border: "1px solid red",
  
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  
  const InnerDiv = styled(Box)(({ theme }) => ({
    border: "1px solid red",
  
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const TextData = styled(Typography)(({ theme }) => ({
    border: "1px solid red",
  
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const ButtonBox = styled(Button)(({ theme }) => ({
    border: "1px solid red",
  
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const DetailBox = styled(Box)(({ theme }) => ({
    border: "1px solid yellow",
  
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const Mapdata = styled(Box)(({ theme }) => ({
    border: "1px solid yellow",
  
  
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
function Assets() {
    const navigate=useNavigate()
    const assetData=useSelector((store)=>store.data.getAsset)
    const dispatch=useDispatch()

    console.log("assetData",assetData)

    const handleAdd=()=>{
        navigate('/addassets')
    }


    useEffect(()=>{
      dispatch(getAssets())
    },[])

  return (
    <OuterContainer>

<InnerBox>

<InnerDiv>
    <TextData>Assets details</TextData>
    <ButtonBox onClick={handleAdd}>Add Assets</ButtonBox>

    <DetailBox>
      {assetData.map((item)=>(
        <Mapdata>

          <TextBox>Asset name :{item.asset_name} </TextBox>
          <TextBox>Brand :{item.brand} </TextBox>
          <TextBox>Department:{item.department} </TextBox>
          <TextBox>Service:{item.service} </TextBox>



        </Mapdata>
      ))}
    </DetailBox>


    </InnerDiv>



</InnerBox>


    </OuterContainer>
  )
}

export default Assets