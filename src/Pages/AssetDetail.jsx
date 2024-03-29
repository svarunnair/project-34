import { Box, Button, Typography, styled } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAssets, getDetail, getServiceData } from '../Redux/data/action';


const OuterContainer = styled(Box)(({ theme }) => ({
    
    display:"flex",
    justifyContent:"center",
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const InnerBox = styled(Box)(({ theme }) => ({
   
    width:"30%",
    
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const TextBox = styled(Typography)(({ theme }) => ({
    textAlign:"left",
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const MapData = styled(Box)(({ theme }) => ({
    
    border:"2px solid #1E90FF",
  padding:30,
  borderRadius:20,
  
  
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

function AssetDetail() {

    const params=useParams()
    const serviceData=useSelector((store)=>store.data.getDataService)

    console.log("serviceUpdate",serviceData)
    
    console.log("paramsidd",params._id)

    const assetDetail=useSelector((store)=>store.data.getDetail)
    const dispatch=useDispatch()
    

    console.log("assettt",assetDetail)


    useEffect(()=>{
      dispatch(getServiceData(params._id))
    },[])
    

useEffect(()=>{
   dispatch(getDetail(params._id))
},[])

  return (
    <OuterContainer>

      <InnerBox>


      <TextBox sx={{textTransform:"uppercase",fontSize:25,textAlign:"center"}}>Detail Page</TextBox>
  <MapData>
    
 <TextBox>Asset name : {assetDetail.asset_name}</TextBox> 
 <TextBox>Brand : {assetDetail.brand}</TextBox> 
 <TextBox>Department : {assetDetail.department}</TextBox> 

 
  </MapData>



      </InnerBox>


    </OuterContainer>
  )
}

export default AssetDetail