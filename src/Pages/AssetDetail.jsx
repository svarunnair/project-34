import { Box, Typography, styled } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAssets, getDetail } from '../Redux/data/action';


const OuterContainer = styled(Box)(({ theme }) => ({
    border: "1px solid yellow",
  
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

  const TextBox = styled(Typography)(({ theme }) => ({
    
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const MapData = styled(Box)(({ theme }) => ({
    
    border:"2px solid red",
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

function AssetDetail() {

    const params=useParams()
    
    console.log("params",params._id)

    const assetDetail=useSelector((store)=>store.data.getDetail)
    const dispatch=useDispatch()
    

    console.log("assettt",assetDetail)

useEffect(()=>{
   dispatch(getDetail(params._id))
},[])

  return (
    <OuterContainer>

      <InnerBox>


{assetDetail.map((item)=>(
  <MapData>
 <TextBox> {item.asset_name}</TextBox>
 <TextBox> {item.asset_name}</TextBox>
 <TextBox> {item.asset_name}</TextBox>
  
  </MapData>
))}


      </InnerBox>


    </OuterContainer>
  )
}

export default AssetDetail